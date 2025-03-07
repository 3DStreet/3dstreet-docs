import React from "react";

import { Button, Input } from "..";
import NavigationMenu from "../NavigationMenu";
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
  const {
    siteConfig: {
      themeConfig: {
        footer: { links: footerLinks },
      },
    },
  } = useDocusaurusContext();

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

        {/* HEADER SECTION */}
        <header className="st_header_container">

          <div className="st_header">
            <div className="st_header_left">

              <a href="/">
                <img src="/img/logo.svg" alt="logo" />
              </a>
              <NavigationMenu />
            </div>
            <div className="st_header_right ">

              <Button
                variant="blue"
                label="Launch app"
                onClick={() => {
                  location.href = "https://3dstreet.app";
                }}
              />
            </div>

          </div>

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
              <h1 className="h1">Bring your street design ideas to life.</h1>
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
                {/* <video className="st_overview_video" controls preload="metadata">
                  <source src="/video/3d-streets-overview.mp4" type="video/mp4" />
                </video> */}
              </section>
              <Input />
            </div>
          </div>
          <div className="st_main_grid" />
        </main>

        {/* OVERVIEW SECTION */}

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
        <footer className="st_footer">
          <div className="st_footer_links">
            {footerLinks.map(({ title, items }, idx) => (
              <div key={idx} className="st_footer_col">
                <p>{title}</p>
                <ul>
                  {items.map(({ label, to, href }, idx) => (
                    <li key={idx}>
                      <a href={to ?? href} target="_blank">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="st_footer_copyright">
            <span />
            ©2025 3DStreet LLC. 3DStreet is a registered trademark of 3DStreet
            LLC.
          </p>
        </footer>
      </div>
    </>
  );
}
