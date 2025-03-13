import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { Button, Input } from "..";
import NavigationMenu from "../NavigationMenu";
import Footer from "../Footer";
import {
  ArrowIcon,
  DiscordIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon
} from "../../icons";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MuxPlayer from "@mux/mux-player-react";

export default function Home({ recentPosts }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>3DStreet - Open-source 3D street editor</title>

      <meta
        name="description"
        content="Effortlessly bring your street design ideas to life. With intuitive features and a straightforward interface, you can easily create stunning and impactful street designs that contribute to a safer and greener world."
      />

      <meta property="og:url" content="https://3dstreet.org" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="3DStreet - Open-source 3D street editor"
      />
      <meta
        property="og:description"
        content="Effortlessly bring your street design ideas to life. With intuitive features and a straightforward interface, you can easily create stunning and impactful street designs that contribute to a safer and greener world."
      />
      <meta
        property="og:image"
        content="/img/website/social-website-preview.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="3dstreet.org" />
      <meta property="twitter:url" content="https://3dstreet.org" />
      <meta
        name="twitter:title"
        content="3DStreet - Open-source 3D street editor"
      />
      <meta
        name="twitter:description"
        content="Effortlessly bring your street design ideas to life. With intuitive features and a straightforward interface, you can easily create stunning and impactful street designs that contribute to a safer and greener world."
      />
      <meta
        name="twitter:image"
        content="/img/website/social-website-preview.jpg"
      />

      {/* SITEMAP */}
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="/sitemap.xml"
      />

      {/* HTML */}
      <div className="wrapper">
        <img
          className="st_header_ellipse"
          src="/img/website/header_ellipse.png"
        />
        <div className="st_main_grid_bg" />
          <div className="newHeader">
            <div className="logo">
            <a href="/">
              <img src="/img/3dstreet-logo.svg" alt="logo" />
            </a>
            </div>
            <NavigationMenu />
            <Button
                variant="blue"
                label="Open 3DStreet"
                trailingIcon={<ExternalLinkIcon />}
                onClick={() => {
                  window.open("https://3dstreet.app", "_blank", "noopener,noreferrer");
                }}
              />
          </div>
        {/* HEADER SECTION */}
        <header className="st_header_container">

          <div className="relative_wrapper">
            <aside className="socials">
              <a
                href="https://www.linkedin.com/company/3dstreet/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://youtube.com/@3dstreetapp" target="_blank">
                <YouTubeIcon />
              </a>
              <a href="https://instagram.com/3dstreetapp" target="_blank">
                <InstagramIcon />
              </a>
              <a href="https://discord.com/invite/9DgKkFCetC" target="_blank">
                <DiscordIcon />
              </a>
            </aside>

            <div className="down_icon">
              <ArrowIcon />
            </div>
          </div>
        </header>

        {/* MAIN SECTION */}
        <main className="st_main">
          <div className="st_main_wrapper">
            <div className="st_main_container">
              <h1 className="h1">Design the future.</h1>
              <MuxPlayer
                streamType="on-demand"
                playbackId="TSxTjFBKoeTnspoQo02BFBPZXel6Pqtoo"
                metadataVideoTitle="Placeholder (optional)"
                metadataViewerUserId="Placeholder (optional)"
                primaryColor="#FFFFFF"
                secondaryColor="#000000"
                accentColor="#653CB0"
              />
              <section className="st_overview">
              </section>
              <Input />
            </div>
          </div>
          <div className="st_main_grid" />
        </main>

        {/* SOLUTIONS SECTION */}
        <section className="st_solutions">
          <div className="st_solutions_inner">
            <h2>Solutions</h2>
            <div className="st_solutions_grid">
              <div className="st_solution_item">
                <h3>Urban Planning</h3>
                <p>For urban planners and economic development agencies. Create compelling 3D visualizations of street redesigns to engage stakeholders and build consensus for transformative projects.</p>
                <Button
                  variant="blue"
                  label="Learn More"
                  href="/planning"
                />
              </div>
              <div className="st_solution_item">
                <h3>Education</h3>
                <p>For students and educators from Pre-K to Post-Doc. Empower learners to understand urban design principles through hands-on 3D modeling and visualization of street environments.</p>
                <Button
                  variant="blue"
                  label="Learn More"
                  href="/education"
                />
              </div>
              <div className="st_solution_item">
                <h3>Transportation and Land Use Advocacy</h3>
                <p>For volunteers and staff from neighborhood associations to global NGOs. Create powerful visual stories that communicate your vision for safer, more sustainable streets.</p>
                <Button
                  variant="blue"
                  label="Learn More"
                  href="/advocacy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT FEATURES SECTION */}
        <section className="st_product_features">
          <div className="st_product_features_inner">
            <h2>Product Features</h2>
            <div className="st_product_features_grid">
              <div className="st_product_feature_item">
                <h3>Instant Street Design</h3>
                <p>Drag-and-drop to place linear 3D streets and 90º intersections with modifiable components.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>One-Click Import</h3>
                <p>Convert Streetmix and StreetPlan typical cross-sections from 2D to 3D with automatic procedural extrusion.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Combine with 3D Maps</h3>
                <p>Blend 3D street models with 3D map tiles to visualize projects in real world context.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Batteries Included</h3>
                <p>Built-in library of over 200 unique and accurately scaled urban 3D models.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Export for AR, VR and 3D post-processing</h3>
                <p>Export to glTF, JSON, and other formats for use in XR and advanced 3D rendering.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Share and Remix</h3>
                <p>Create with friends, share with neighbors, and remix with the community.</p>
              </div>
            </div>
            <Button
              variant={"blue"}
              label={"Try it now"}
              onClick={() => {
                window.open("https://3dstreet.app", "_blank", "noopener,noreferrer");
              }}
            />
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="st_features">
          <div className="st_features_inner">
            <h2>How are we different?</h2>

            <div className="st_features_posts">
              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>One unique simple tool</p>
                    <p>
                      Our powerful yet user-friendly 3DStreet Editor tool allows
                      you to effortlessly bring your street design ideas to
                      life. With intuitive features and a straightforward
                      interface, you can easily create stunning and impactful
                      street designs that contribute to a safer and greener
                      world.
                    </p>
                  </div>
                  <Button
                    variant={"blue"}
                    label={"Get started"}
                    onClick={() => {
                      location.href = "https://3dstreet.app";
                    }}
                  />
                </div>
                <img
                  src="/img/website/feature-simple-tool.jpg"
                  alt="feature-preview"
                  width="386"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Infinitely collaborative software</p>
                    <p>
                      Collaboration is at the heart of our 3DStreet tool.
                      Connect and work with others, whether it's fellow
                      designers, community members, or city planners. Share
                      ideas, gather feedback, find inspiration, and collectively
                      create street designs that truly reflect the needs and
                      aspirations of your community.
                    </p>
                  </div>
                  <Button
                    variant={"blue"}
                    label={"Get started"}
                    onClick={() => {
                      location.href = "https://3dstreet.app";
                    }}
                  />
                </div>
                <img
                  src="/img/website/feature-collab.jpg"
                  alt="feature-preview"
                  width="386"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Batteries included</p>
                    <p>
                      Kickstart your original designs with 3DStreet's built-in
                      library of over 200 unique and accurately scaled urban 3D
                      models such as pedestrians, vehicles, buildings, street
                      objects, and more. Automated smart Layers accelerate the
                      creation of street elements by combining pre-made segments
                      for sidewalks, parking stalls, bike lanes, railways, BRT
                      corridors, and more.
                    </p>
                  </div>
                  <Button
                    variant={"blue"}
                    label={"Get started"}
                    onClick={() => {
                      location.href = "https://3dstreet.app";
                    }}
                  />
                </div>
                <img
                  src="/img/website/feature-model-library.jpg"
                  alt="feature-preview"
                  width="386"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description b-gap">
                  <div className="st_feature_description_top">
                    <p>Open and transparent</p>
                    <p>
                      Unlike most geospatial and civil engineering design
                      software, 3DStreet is open-source and user-created.
                      Instead of locking you into proprietary formats, 3DStreet
                      plays nicely with others to allow importing and exporting
                      standards-compliant formats such as glTF, SVG, JSON, JPEG,
                      PNG, Streetmix, and more.
                    </p>
                  </div>
                  <Button
                    variant={"blue"}
                    label={"Get started"}
                    onClick={() => {
                      location.href = "https://3dstreet.app";
                    }}
                  />
                </div>
                <img
                  src="/img/website/feature-open.jpg"
                  alt="feature-preview"
                  width="386"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section className="st_blog">
          <div className="st_blog_left_dot" />
          <div className="st_blog_right_dot" />
          <div className="st_blog_inner">
            <h2>Latest blog posts</h2>
            <p className="st_blog_title_description">
              {/* Latest blog posts associated with 3DStreet */}
            </p>

            <div className="st_blog_cards">
              {recentPosts.length &&
                recentPosts.map(
                  ({ title, description, authors, imageURL, blogURL }, idx) => (
                    <a
                      key={idx}
                      className="st_blog_item"
                      href={blogURL}
                      target="_blank"
                    >
                      <img src={imageURL} alt="blog-preview" />
                      <div className="st_blog_item_description">
                        <div className="st_blog_item_header">
                          <div className="st_blog_item_authors">
                            <p
                              className="st_blog_item_authors_p"
                              title={`${authors[0].name}, ${authors[0].title}`}
                            >
                              <img
                                src={authors[0].imageURL}
                                alt="author-avatar"
                              />
                              {`${authors[0].name} ${authors.length > 1 ? "and others" : ""
                                }`}
                            </p>
                          </div>
                          <p className="st_blog_item_header_title">{title}</p>
                        </div>
                        <hr className="divider" />
                        <p className="st_blog_item_footer">{description}</p>
                      </div>
                    </a>
                  ),
                )}
            </div>
            <Button
              variant={"blue"}
              label={"View more posts"}
              onClick={() => {
                location.href = "/blog/";
              }}
            />
          </div>
        </section>

        {/* TRUSTED BY SECTION */}
        <section className="st_trusted_by">
          <h2>USED BY</h2>
          <div className="st_trusted_by_companies">
            <div className="st_trusted_by_company">
              {/* <img
                src="/img/website/trusted-comp1.png"
                alt="University of Oregon"
              /> */}
              University of Oregon
            </div>
            <div className="st_trusted_by_company">
              <img
                src="/img/website/trusted-comp2.png"
                alt="Town of Manchester"
              />
            </div>
            <div className="st_trusted_by_company">
              <img
                src="/img/website/trusted-comp3.png"
                alt="Bicycle Coalition of Greater Philadelphia"
              />
            </div>
            <div className="st_trusted_by_company">
              World Bank Group
            </div>
            <div className="st_trusted_by_company">
              City of Silverton, Oregon
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </>
  );
}
