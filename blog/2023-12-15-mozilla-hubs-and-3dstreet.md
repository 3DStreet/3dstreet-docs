---
title: Using Mozilla Hubs & 3DStreet for virtual Safe Streets collaboration
description: A guide to adding multi-user interactivity for 3D web applications using glTF files as intermediary.
slug: mozilla-hubs-and-3dstreet-virtual-safe-street-collaboration
authors: kfarr
tags: [webxr, gltf, hubs]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

Our WebXR app 3DStreet launched this year to empower anyone to visualize a safer, greener world, one street at a time. 3DStreet users have asked for collaboration features, but our team is small and integrating multi-user presence and conferencing into 3DStreet would be difficult and time consuming. How can we offer remote, virtual collaboration tools without major rewrites of our 3DStreet application?

Answer: use the power of glTF as an intermediary format combined with the power of Mozilla Hubs self-hosted on Community Edition! In this post we'll outline the strategy we used to implement a proof of concept for "3DStreet Club" -- our branded experiment for a hosted collaboration experience using 3DStreet designs as the foundation of the virtual space.

<!-- truncate -->

## What is Mozilla Hubs?
Hubs is an [open-source 3D conferencing cloud software](https://labs.mozilla.org/projects/hubs/) that works across every browser and VR, AR headsets like the Oculus Quest. Users create "rooms" and invite other users to join with live video and audio streaming like Zoom or Google Meets but for users with XR headsets they can choose live-animated 3D avatars connected to the XR headset and controllers for an immersive experience.

I’ve been a long time user of Hubs, but never customized it. During the pandemic our small but mighty marketing team at Bitmovin got Oculus Quest headsets and used Hubs for internal meetings. We had the most fun when interacting in a custom virtual space that a 3D artist helped us create, bespoke for a virtual conference that we eventually hosted open to the public.

## Project Strategy
During user testing we hear that a primary value of VR or AR headset visualization is gaining an instant spatial understanding of a scene and proposed civil infrastructure projects. When collaborating remotely on project designs, it can be time consuming for engineers and planning professionals to take 2D screen grabs, make markups, send back via email, and then still expect users to maintain that spatial reference to make use of the feedback. What if both users could be in the same 3D reference space and communicate with each other in realtime?

We’d like to provide the users an option of exporting their 3DStreet scene to have a live conversation with other users they invite. They may not have VR headsets, so supporting a wide range of devices is key.

We considered a few options for this. One option is to pay for a hosted pro plan, the other is to use CE. For this trial we are helping Mozilla test out their new workflow and chose to use the CE.

## Hubs Community Edition Setup and Deployment on GCP
My favorite reference document for setup was [the CE Quick Start on GCP](https://hubs.mozilla.com/labs/community-edition-case-study-quick-start-on-gcp-w-aws-services/), and there's no sense in copying all the setup steps here, so instead in this post I'll share a condensed set of instructions on just what you need to get started and what I learned deploying these things myself, but check out that link for more background on the Hubs architecture, Kubernetes and configuration options.

### Project Structure in Google Cloud Platform
GCP use of Projects is a very hand way to structure cloud services, I strongly recommend to create a dedicated project for your Hubs CE deployment. In our case we already have a project for 3DStreet Cloud production, and another project for 3DStreet Dev Server which is a copy of production for testing against, so adding another for Hubs is simple and fits in this existing structure. You can get other features by "leaning in" to this structure such as distinct user rights management and billing settings for each project.

### Domain and DNS Setup
I used an old domain lying around `3dstreet.club` which was registered with GoDaddy, and used [GCP for DNS hosting](https://cloud.google.com/dns) for the project. Using GCP to [setup Cloud DNS hosting zones was straightforward](https://cloud.google.com/dns/docs/set-up-dns-records-domain-name), once I [updated the GoDaddy domain to use custom nameservers](https://www.godaddy.com/help/edit-my-domain-nameservers-664) pointing to the new GCP Cloud DNS zone.

### Email SMTP Server and Forwarding
You'll need an SMTP server for Hubs to send emails for authentication. Thanks to some recommendations from others on the Hubs Discord, I tried out [Elastic Email's SMTP free tier]( https://elasticemail.com/referral-reward?r=2d26b9c5-2367-4c1a-a658-b9eaba965057) (you read that right, $0 / month) and it worked great. I also use [ImprovMX for email forwarding](https://improvmx.com) to receive email from various addresses across multiple domains.

### CLI Cheat Sheet
Here are the most critical command lines for deploying your Hubs scene -- you'll be using these over and over again if you're testing and changing deployment settings. This assumes you have everything else setup. Reference [the Mozilla Quick Start guide](https://hubs.mozilla.com/labs/community-edition-case-study-quick-start-on-gcp-w-aws-services/) for step-by-step guide on how to get your local dev environment setup. 

#### Create cluster in GCP
`gcloud container clusters create <YOUR_DESIRED_NAMESPACE> --zone=<YOUR_DESIRED_ZONE>`
zone: us-central-1
namespace: hubs-test-cluser

`gcloud container clusters create hubs-test-cluster --zone us-central1`

#### Deploy to newly created cluster with custom settings
After editing render_hcce.sh to place appropriate environment variables like your Hub domain, email and Namespace:
`bash render_hcce.sh && kubectl apply -f hcce.yaml`
Then wait until you get an "External IP" from this command.
`kubectl -n hubs-test-cluster get svc lb`
Use the External IP to set as A record for all 4 domains in DNS Zone: domain, assets.domain, stream.domain, cors.domain.

Then run the script to setup certificates for the domains after placing appropriate environment variables:
`bash cbb.sh`

You should be able to access your Hubs server on a web browser and see no certificate warnings at this stage. Now you can begin customizing your admin settings, the Hubs client, and other exciting ideas that come to mind.

#### "Pausing" the cluster
Evidently K8S doesn't have the concept of "pausing" a cluster, but instead you can scale it down with this command:
kubectl scale --replicas=0 -f hcce.yaml
kubectl scale --replicas=1 -f hcce.yaml

#### Deleting the cluster
`gcloud container clusters delete hubs-test-cluster --region=us-central1`

### Quota Limits
You will hit quota limits -- the defaults in GCP are too low for IP address limits and Persistent Disk SSD total storage capacity (GB). You will need to go into the [GCP Console > IAM & Admin > Quotas](https://console.cloud.google.com/apis/api/compute.googleapis.com/quotas) to make a quota request to increase these. Persistent disk storage upgrade from 500gb to 1000gb. IP addresses raise limit to 16.

### When things go wrong
Automated server deployment with Kubernetes engine on GCP magically works -- until it doesn't. Unfortunately, when it doesn't work you will need to dig through a lot of layers of clusters, nodes, and pods (oh my!) to see what's going wrong. In addition to using [Mirantis Lens](https://k8slens.dev/) to poke around at your cluster, I found the #community-edition channel on the Hubs discord to be super helpful.

## Billing and cost considerations
For a given GCP Project we can check out billing history. I've seen about $10 per day cost for compute and Kubernetes engine which was a bit more than I expected, and considerably more expensive (forecasted at $300/mo) compared to the $79 per month plan with the fully managed Hubs Professional plan.

## Hubs Client Customization
Using glTF as an intermediary format
Where to host? How to get it into the client?
Hosted or localstorage? Experiments with localstorage and large files, likely need to use hosted for highest reliability
User experience expectations and UI design
Testing the end-to-end flow

## User testing and prep for launch
Initial user feedback
Preparing for launch

## Summary
Learnings
Next steps
CTA

### Technical Notes

