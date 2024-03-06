import React from "react";

import { Button, Input } from "..";
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
} from "../../icons";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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
      <title>3DStreet - open-source 3d street editor for safer streets</title>

      {/* SITEMAP */}
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="/sitemap.xml"
      />

      {/* FONTS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Kanit:wght@600;700&display=swap"
        rel="stylesheet"
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
          <div className="st_header_left">
            <div className="st_header_logo">
              <a href="/">
                <img src="/img/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="st_header_nav --noMobile">
              <ul>
                <li>
                  <Button
                    variant="ghost"
                    label="Home"
                    isActive
                    onClick={() => {
                      location.href = "";
                    }}
                  />
                </li>
                <li>
                  <Button
                    variant="ghost"
                    label="Blog"
                    onClick={() => {
                      location.href = "/blog/";
                    }}
                  />
                </li>
                <li>
                  <Button
                    variant="ghost"
                    label="Documentation"
                    onClick={() => {
                      location.href = "/docs/";
                    }}
                  />
                </li>
              </ul>
            </div>

            <Button
              className="--mobile"
              variant="blue"
              label="Launch app"
              onClick={() => {
                location.href = "https://3dstreet.app";
              }}
            />
          </div>
          <Button
            className="--noMobile"
            variant="blue"
            label="Launch app"
            onClick={() => {
              location.href = "https://3dstreet.app";
            }}
          />

          <div className="st_header_nav --mobile">
            <ul>
              <li>
                <Button
                  variant="ghost"
                  label="Home"
                  isActive
                  onClick={() => {
                    location.href = "";
                  }}
                />
              </li>
              <li>
                <Button
                  variant="ghost"
                  label="Blog"
                  onClick={() => {
                    location.href = "/docs/";
                  }}
                />
              </li>
              <li>
                <Button
                  variant="ghost"
                  label="Documentation"
                  onClick={() => {
                    location.href = "/docs/";
                  }}
                />
              </li>
            </ul>
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
              <h1 className="h1">
                Design and envision safer, greener streets, together.
              </h1>
              <p className="description">
                3DStreet is a revolutionary tool that enables you to unleash
                your creativity and design unique streets that not only stand
                out visually but also make a tangible impact on creating a safer
                and greener world.
              </p>
              <Input />
            </div>
          </div>
          <div className="st_main_grid" />
        </main>

        {/* OVERVIEW SECTION */}
        {/* <section className="st_overview">
          <h2>3DSTREET OVERVIEW</h2>
          <video className="st_overview_video" controls preload="metadata">
            <source src="/video/3d-streets-overview.mp4" type="video/mp4" />
          </video>
        </section> */}

        <div className="st_grid_3_wrapper">
          {/* VISION SECTION */}
          <section className="st_vision">
            <h2>VISION</h2>
            <p>
              We can change our world for the better through safer, greener
              streets.
            </p>
          </section>

          {/* STATISTICS SECTION */}
          <section className="st_statistics">
            <h2>STATISTICS</h2>
            <div className="st_statistics_posts">
              <div className="st_statistics_item">
                <PiechartIcon className="st_statistics_icon" />
                <div className="st_statistics_post_description">
                  <p>52%</p>
                  <p>
                    Over half of all car trips in the US are less than 3 miles -
                    an ideal distance for green alternatives such as walking,
                    biking, and transit.
                  </p>
                  <a
                    href="https://www.energy.gov/eere/vehicles/articles/fotw-1230-march-21-2022-more-half-all-daily-trips-were-less-three-miles-2021"
                    target="_blank"
                  >
                    US Bureau of Transportation Statistics, 2022 Report
                  </a>
                </div>
              </div>
              <div className="st_statistics_item">
                <PiechartIcon className="st_statistics_icon" />
                <div className="st_statistics_post_description">
                  <p>80%</p>
                  <p>
                    From the number of people interested in, but not using,
                    active mobility, 80% would be willing to bike on streets
                    with a protected or completely separated bike lane.
                  </p>
                  <a
                    href="https://nacto.org/2016/07/20/high-quality-bike-facilities-increase-ridership-make-biking-safer"
                    target="_blank"
                  >
                    NACTO Report, 2016
                  </a>
                </div>
              </div>
              <div className="st_statistics_item">
                <PiechartIcon className="st_statistics_icon" />
                <div className="st_statistics_post_description">
                  <p>32%</p>
                  <p>
                    Nearly one-third of the population (32%) is dissatisfied
                    with their community designs for making biking safe.
                  </p>
                  <a
                    href="https://www.bts.gov/archive/publications/special_reports_and_issue_briefs/issue_briefs/number_11/entire"
                    target="_blank"
                  >
                    US Bureau of Transportation Statistics, 2012 Report
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* MISSION SECTION */}
          <section className="st_mission">
            <h2>mission</h2>
            <p>
              Our goal is to empower the world with simple tools that enable
              anyone to create a safer and greener future, one street at a time.
            </p>
          </section>
        </div>

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
                      Our powerful yet user-friendly 3DStreet tool allows you to
                      effortlessly bring your street design ideas to life. With
                      intuitive features and a straightforward interface, you
                      can easily create stunning and impactful street designs
                      that contribute to a safer and greener world.
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
                  src="/img/website/feature-preview.png"
                  alt="feature-preview"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Infinitely collaborative software</p>
                    <p>
                      Collaboration is at the heart of our 3D Street tool.
                      Connect and work with others, whether it's fellow
                      designers, community members, or city planners. Share
                      ideas, gather feedback, and collectively create street
                      designs that truly reflect the needs and aspirations of
                      your community.
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
                  src="/img/website/feature-preview.png"
                  alt="feature-preview"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Endlessly inspiring</p>
                    <p>
                      With the 3D Street tool, you have the opportunity to lead
                      the way in creating innovative and sustainable street
                      designs. Inspire others and showcase your creativity by
                      designing streets that prioritize safety, accessibility,
                      and environmental consciousness. Be a catalyst for
                      positive change in your community.
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
                  src="/img/website/feature-preview.png"
                  alt="feature-preview"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description b-gap">
                  <div className="st_feature_description_top">
                    <p>Open source</p>
                    <p>
                      Cred by the users and the community of users that
                      contribute to the code base. Github
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
                  src="/img/website/feature-preview.png"
                  alt="feature-preview"
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
            <h2>Featured blogs</h2>
            <p className="st_blog_title_description">
              Latest blog posts associated with 3DStreet
            </p>

            <div className="st_blog_cards">
              {recentPosts.length &&
                recentPosts.map(({ title, description, authors }, idx) => (
                  <div key={idx} className="st_blog_item">
                    <img
                      src="/img/website/blog-preview.png"
                      alt="blog-preview"
                    />
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
                              authors.length > 1 ? "and others" : ""
                            }`}
                          </p>
                        </div>
                        <p className="st_blog_item_header_title">{title}</p>
                      </div>
                      <hr className="divider" />
                      <p className="st_blog_item_footer">{description}</p>
                    </div>
                  </div>
                ))}
            </div>
            <Button
              variant={"blue"}
              label={"View more blogs"}
              onClick={() => {
                location.href = "";
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
                      See the 3D Street core viewer source code and help make it
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

        {/* START SECTION */}
        <section className="st_start">
          <h2>Ready to reimagine a safer greener world?</h2>
          <Button variant={"white"} label={"Let's do this"} />
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
