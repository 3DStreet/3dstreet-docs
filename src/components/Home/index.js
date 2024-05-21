import React from 'react';

import { Button, Input } from '..';
import {
  ArrowIcon,
  DiscordIcon,
  DiscordIcon2,
  GithubIcon,
  LinkedInIcon,
  MastodonIcon,
  PiechartIcon,
  XIcon,
  XIcon2,
} from '../../icons';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MuxPlayer from '@mux/mux-player-react';

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
          <div className="st_header --noTablet">
            <div className="st_header_left">
              <div className="st_header_logo">
                <a href="/">
                  <img src="/img/logo.svg" alt="logo" />
                </a>
              </div>
              <div className="st_header_right ">
                <div className="st_header_nav ">
                  <ul>
                    <li>
                      <Button
                        variant="ghost"
                        label="Home"
                        isActive
                        onClick={() => {
                          location.href = '';
                        }}
                      />
                    </li>
                    <li>
                      <Button
                        variant="ghost"
                        label="Blog"
                        onClick={() => {
                          location.href = '/blog/';
                        }}
                      />
                    </li>
                    <li>
                      <Button
                        variant="ghost"
                        label="Documentation"
                        onClick={() => {
                          location.href = '/docs/';
                        }}
                      />
                    </li>
                  </ul>
                </div>
                <Button
                  variant="blue"
                  label="Launch app"
                  onClick={() => {
                    location.href = 'https://3dstreet.app';
                  }}
                />
              </div>
            </div>
          </div>

          <div className="st_header --tablet">
            <div className="st_header_left">
              <div className="st_header_logo">
                <a href="/">
                  <img src="/img/logo.svg" alt="logo" />
                </a>
              </div>
              <Button
                variant="blue"
                label="Launch app"
                onClick={() => {
                  location.href = 'https://3dstreet.app';
                }}
              />
            </div>
            <div className="st_header_right ">
              <div className="st_header_nav ">
                <ul>
                  <li>
                    <Button
                      variant="ghost"
                      label="Home"
                      isActive
                      onClick={() => {
                        location.href = '';
                      }}
                    />
                  </li>
                  <li>
                    <Button
                      variant="ghost"
                      label="Blog"
                      onClick={() => {
                        location.href = '/blog/';
                      }}
                    />
                  </li>
                  <li>
                    <Button
                      variant="ghost"
                      label="Documentation"
                      onClick={() => {
                        location.href = '/docs/';
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative_wrapper">
            <aside className="socials">
              <a href="https://discord.com/invite/9DgKkFCetC" target="_blank">
                <DiscordIcon />
              </a>
              <a href="https://twitter.com/3dstreetapp" target="_blank">
                <XIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/3dstreet/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://urbanists.social/@3dstreet" target="_blank">
                <MastodonIcon />
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
              <h1 className="h1">Bring your street redesign to life.</h1>
              <p className="description">
                3DStreet alleviates the pain of street projects by helping
                stakeholders better understand changes and by reducing the risk
                of cancellation and delays
              </p>
              <Input />
            </div>
          </div>
          <div className="st_main_grid" />
        </main>

        {/* OVERVIEW SECTION */}
        <section className="st_overview">
          <h2>3DSTREET IN 2 MINUTES</h2>
          <MuxPlayer
            streamType="on-demand"
            playbackId="lXImH9p0000L4fsSSEHgz6RudBQv02CgqQh"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            accentColor="#653CB0"
          />
          {/* <video className="st_overview_video" controls preload="metadata">
            <source src="/video/3d-streets-overview.mp4" type="video/mp4" />
          </video> */}
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
                    variant={'blue'}
                    label={'Get started'}
                    onClick={() => {
                      location.href = 'https://3dstreet.app';
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
                    variant={'blue'}
                    label={'Get started'}
                    onClick={() => {
                      location.href = 'https://3dstreet.app';
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
                    variant={'blue'}
                    label={'Get started'}
                    onClick={() => {
                      location.href = 'https://3dstreet.app';
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
                    variant={'blue'}
                    label={'Get started'}
                    onClick={() => {
                      location.href = 'https://3dstreet.app';
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
                              {`${authors[0].name} ${
                                authors.length > 1 ? 'and others' : ''
                              }`}
                            </p>
                          </div>
                          <p className="st_blog_item_header_title">{title}</p>
                        </div>
                        <hr className="divider" />
                        <p className="st_blog_item_footer">{description}</p>
                      </div>
                    </a>
                  )
                )}
            </div>
            <Button
              variant={'blue'}
              label={'View more posts'}
              onClick={() => {
                location.href = '/blog/';
              }}
            />
          </div>
        </section>

        {/* SOCIALS SECTION */}
        <section className="st_socials">
          {/* bg items */}
          <div className="st_socials_icon2" />
          <div className="st_socials_icon3 --noMobile" />
          <div className="st_socials_icon4 --noMobile" />
          <div className="st_socials_icon5 --noMobile" />
          <div className="st_socials_icon6 --noMobile" />
          <div className="st_socials_icon7 --noMobile" />
          <div className="st_socials_icon8 --noMobile" />
          <div className="st_socials_icon9 --noMobile" />

          <div className="st_socials_icon10" />
          {/* bg items */}

          <div className="st_socials_title">
            <h2>How to get involved</h2>
            <p>
              <b>A safer greener world begins with you.</b> Join our thriving,
              growing community to get involved. Partner with other like minded
              individuals or blaze your own trail. The only limit is your
              imagination.
            </p>
          </div>

          <div className="st_socials_cards">
            <div className="st_socials_item">
              <div className="st_socials_inner">
                <div className="st_socials_header">
                  <p className="st_socials_type">COMMUNITY</p>
                  <div className="st_socials_icon">
                    <DiscordIcon2 />
                  </div>
                </div>
                <div className="st_socials_item_footer">
                  <div className="st_socials_item_description">
                    <p>Connect with our community on Discord</p>
                    <p>
                      Be part of the community. Take a look at how we work on
                      projects. We share ideas and would love to hear yours.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://discord.com/invite/9DgKkFCetC"
                target="_blank"
                className="st_socials_item_link"
              >
                Join 3DStreet Discord
              </a>
            </div>
            <div className="st_socials_item">
              <div className="st_socials_inner">
                <div className="st_socials_header">
                  <p className="st_socials_type">collab</p>
                  <div className="st_socials_icon">
                    <GithubIcon />
                  </div>
                </div>
                <div className="st_socials_item_footer">
                  <div className="st_socials_item_description">
                    <p>Contribute together on GitHub</p>
                    <p>
                      See 3DStreet Core and Editor source code and help make it
                      better.
                    </p>
                  </div>
                </div>
              </div>
              <a href="https://github.com/3dstreet/3dstreet" target="_blank">
                3DStreet GitHub Repo
              </a>
            </div>
            <div className="st_socials_item">
              <div className="st_socials_inner">
                <div className="st_socials_header">
                  <p className="st_socials_type">conversation</p>
                  <div className="st_socials_icon">
                    <XIcon2 />
                  </div>
                </div>
                <div className="st_socials_item_footer">
                  <div className="st_socials_item_description">
                    <p>Follow us on X and stay up to date</p>
                    <p>
                      Follow us on twitter and stay in the know on all things 3D
                      Street.
                    </p>
                  </div>
                </div>
              </div>
              <a href="https://twitter.com/3dstreetapp" target="_blank">
                Connect on X
              </a>
            </div>
          </div>
        </section>

        {/* TRUSTED BY SECTION */}
        <section className="st_trusted_by">
          <h2>TRUSTED BY</h2>
          <div className="st_trusted_by_companies">
            <div className="st_trusted_by_company">
              <img
                src="/img/website/trusted-comp1.png"
                alt="University of Oregon"
              />
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
                alt="Bicycle coalition"
              />
            </div>
            <div className="st_trusted_by_company">
              <img src="/img/website/trusted-comp4.png" alt="Streetmix" />
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
            ©2024 3DStreet LLC. 3DStreet is a registered trademark of 3DStreet
            LLC.
          </p>
        </footer>
      </div>
    </>
  );
}
