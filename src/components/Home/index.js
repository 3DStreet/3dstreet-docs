import React, { useState, useEffect } from "react";
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

  // Random announcement pill - picks one randomly on page load
  const announcements = [
    {
      icon: "📰",
      boldText: "Introducing Pro Team",
      lightText: "Built for organizations and universities",
      url: "/blog/2025/10/24/introducing-pro-team-plan-for-organizations-and-universities"
    },
    {
      icon: "✨",
      boldText: "More in Pro",
      lightText: "Enhanced AI generation and AR capabilities",
      url: "/blog/2025/09/20/more-in-pro-enhanced-ai-generation-and-ar-capabilities"
    },
    {
      icon: "🎉",
      boldText: "More for Free",
      lightText: "Expanded geospatial and intersection features",
      url: "/blog/2025/08/25/more-for-free-expanded-access-to-geospatial-and-intersection-features"
    }
  ];

  // Pick random announcement once on mount
  const [currentAnnouncement] = useState(() =>
    announcements[Math.floor(Math.random() * announcements.length)]
  );

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

        {/* Rotating Announcement Pill - Centered Container */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '12px', marginBottom: '12px' }}>
          <div
            className="pro-team-pill"
            onClick={() => window.open(currentAnnouncement.url, '_self')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(123, 70, 246, 0.2), rgba(123, 70, 246, 0.1))',
              border: '1px solid rgba(123, 70, 246, 0.5)',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(123, 70, 246, 0.3), rgba(123, 70, 246, 0.15))';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(123, 70, 246, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(123, 70, 246, 0.2), rgba(123, 70, 246, 0.1))';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontSize: '20px' }}>{currentAnnouncement.icon}</span>
            <span style={{ fontSize: '15px', fontWeight: 500, color: '#fff', letterSpacing: '0.2px' }}>
              <strong style={{ fontWeight: 700 }}>{currentAnnouncement.boldText}</strong> — {currentAnnouncement.lightText}
            </span>
            <span style={{ fontSize: '18px', color: '#9b87f5', marginLeft: '4px' }}>→</span>
          </div>
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
              <a href="https://discord.gg/zNFMhTwKSd" target="_blank">
                <DiscordIcon />
              </a>
            </aside>

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
                  label="Learn more"
                  href="/planning"
                />
              </div>
              <div className="st_solution_item">
                <h3>Education</h3>
                <p>For students and educators from Pre-K to Post-Doc. Empower learners to understand urban design principles through hands-on 3D modeling and visualization of street environments.</p>
                <Button
                  variant="blue"
                  label="Learn more"
                  href="/education"
                />
              </div>
              <div className="st_solution_item">
                <h3>Transportation and Land Use Advocacy</h3>
                <p>For volunteers and staff from neighborhood associations to global NGOs. Create powerful visual stories that communicate your vision for safer, more sustainable streets.</p>
                <Button
                  variant="blue"
                  label="Learn more"
                  href="/advocacy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="product-features" className="st_features">
          <div className="st_features_inner">
            <h2>Product Features</h2>

            <div className="st_features_posts">
              <div id="instant-street-design" className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Instant Street Design</p>
                    <p>
                    Drag-and-drop to place linear 3D streets and 90º intersections with modifiable components. Start with existing templates or create your own, then modify, duplicate or delete segments. Create before and after conditions with procedurally generated elements to illustrate the impact of changes.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Get started"
                    href = "https://3dstreet.app"
                    target="_blank"
                  />
                </div>
                <img
                  src="/img/website/feature-instant-street.webp"
                  alt="feature-preview"
                  width="386"
                />
              </div>

              <div id="combine-with-3d-maps" className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Combine with 3D Maps</p>
                    <p>
                    Blend 3D street models with 3D map tiles to visualize projects in real world context. Choose from a variety of map styles and providers to best illustrate your project. Inform street design to match actual conditions by making realtime changes to street layout and elements with the map layer serving as a reference.
                    </p>
                  </div>
                  <div className="st_cta_buttons">
                  <Button
                      variant="blue"
                      label="Get started"
                      href="https://3dstreet.app"
                      target="_blank"
                    />
                    <Button
                      variant="transparent-dark"
                      label="Learn more"
                      href="/docs/key-features/geospatial"
                    />
                  </div>
                </div>
                <img
                  src="/img/website/feature-3d-maps.webp"
                  alt="feature-preview"
                  width="386"
                />
              </div>

              <div id="batteries-included" className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Batteries Included</p>
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
                  <div className="st_cta_buttons">
                    <Button
                      variant="blue"
                      label="Get started"
                      href="https://3dstreet.app"
                      target="_blank"
                    />
                    <Button
                      variant="transparent-dark"
                      label="Learn more"
                      href="/docs/key-features/model-library"
                    />
                  </div>
                </div>
                <img
                  src="/img/website/feature-model-library.jpg"
                  alt="feature-preview"
                  width="386"
                />
              </div>

              <div id="one-click-import" className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>One-Click Import</p>
                    <p>
                    Convert Streetmix and StreetPlan typical cross-sections from 2D to 3D with automatic procedural extrusion. From either app you can click to Export to 3DStreet, or you can copy/paste the cross-section URL into the 3DStreet Editor. The cross-section is converted into a linear street model complete with street surfaces, relative curb elevations, and lane striping.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Get started"
                    href = "https://3dstreet.app"
                    target="_blank"
                  />
                </div>
                <img
                  src="/img/website/feature-import.webp"
                  alt="feature-preview"
                  width="386"
                />
              </div>

              <div id="export-for-ar-vr" className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Export for AR, VR and 3D post-processing</p>
                    <p>
                      Export 3DStreet scenes to glTF, JSON, and other formats for use in Augmented Reality, advanced 3D rendering, and detailed design reference. Our "AR Ready" export option creates an optimized GLB file to ensure compatibility with popular AR platforms like Adobe Aero and InCitu. Exported models can also be used with professional rendering tools such as Blender for photorealistic 3D rendering, or CAD tools to inform detailed designs.
                      </p>
  
                  </div>
                  <div className="st_cta_buttons">
                    <Button
                      variant="blue"
                      label="Get started"
                      href="https://3dstreet.app"
                      target="_blank"
                    />
                    <Button
                      variant="transparent-dark"
                      label="Learn more"
                      href="/docs/key-features/ar-ready-export"
                    />
                  </div>
                </div>
                <img
                  src="/img/website/feature-open.jpg"
                  alt="feature-preview"
                  width="386"
                />
              </div>
              <div id="share-and-remix" className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Share and Remix</p>
                    <p>
                      Create from any desktop browser, share with colleagues, and remix with the community. Generate images and record animations for use in social media and public materials. Share the actual 3DStreet scene link with your colleagues for them to remix and modify the scene. Browse other Community scenes for inspiration and remixing parts to include in your own projects.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Get started"
                    href = "https://3dstreet.app"
                    target="_blank"
                  />
                </div>
                <img
                  src="/img/website/feature-collab.jpg"
                  alt="feature-preview"
                  width="386"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OTHER USE CASES SECTION */}
        <section className="st_product_features">
          <div className="st_product_features_inner">
            <h2>More Than Transportation</h2>
            <div className="st_product_features_grid">
              <div className="st_product_feature_item">
                <h3>Construction Planning</h3>
                <p>Create detailed construction site plans with 3D visualization of traffic flow and temporary street modifications to minimize project disruption.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Event Planning</h3>
                <p>Visualize street closures, route diversions, and temporary installations for festivals, parades, and public gatherings with photorealistic 3D renderings.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Public Space Activation</h3>
                <p>Transform underutilized streets into vibrant community spaces with interactive 3D mockups showing parklets, outdoor dining, public art, and recreational areas.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Competitive Proposals</h3>
                <p>Stand out in RFPs with immersive 3D visualizations that clearly demonstrate your design's advantages over traditional 2D plans and elevations.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Property Development</h3>
                <p>Showcase potential development projects and their integration with existing streetscapes, highlighting improved pedestrian accessibility and enhanced neighborhood connectivity.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Landscape Architecture</h3>
                <p>Design complete streetscapes with integrated green infrastructure, showing realistic tree canopies, bioswales, and permeable surfaces to visualize both aesthetic and functional benefits.</p>
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
