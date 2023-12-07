---
title: Using Mozilla Hubs & 3DStreet for virtual Safe Streets collaboration
description: A guide to adding multi-user interactivity for 3D web applications using glTF files as intermediary.
slug: mozilla-hubs-and-3dstreet-virtual-safe-street-collaboration
authors: kfarr
tags: [webxr, gltf, hubs]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

We are getting more users to our WebXR application 3DStreet to visualize a safer, greener world, one street at a time, but how can we offer remote, virtual collaboration tools without rewriting the 3DStreet application from scratch?

The answer: using the power of glTF as an intermediary format combined with Mozilla Hubs! In this post we'll outline the strategy we used to implement a proof of concept for "3DStreet Club" -- our branded experiment for a hosted collaboration experience using 3DStreet designs as the foundation of the virtual space.

<!-- truncate -->

## Introduction
Kieran intro - I’ve been a long time user of Mozilla Hubs, but never customized it. During the pandemic we got our entire marketing team together at Bitmovin using VR headsets and Hubs.
3DStreet intro - We are getting more users to our WebXR application 3DStreet to visualize a safer, greener world, one street at a time. 
Problem statement: We’ve heard from a few users interested in collaborating using their space.
Solution proposal: I set out to work with the hubs team on an experiment to launch a hubs server using the new hubs community edition. “3dstreet.club” is this experiment.

## Project Strategy
Value of XR is instant spatial understanding. When collaborating on projects it can be time consuming to take 2d screen grabs, markup, and send via email. What if we could be in the same space at the same time?
We’d like to provide the users an option of exporting their 3dstreet scene to have a live conversation with other users they invite. They may not have VR headsets, so cross platform is key.
Consider a few options for this. One option is to pay for a hosted pro plan, the other is to use CE. For this trial we are helping Mozilla test out their new workflow and chose to use the CE. (disclosure re paid content here?)

## Hubs Community Edition Setup and Deployment
Overview of what we’re doing - Streamlined setup for GCP, just what you need; see (other links) for more detailed explanation of setting up server
Include DNS and Email setup
Other GCP specifics such as “project” structure
Billing considerations
## Hubs Client Customization
Using glTF as an intermediary
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

Quick start:
