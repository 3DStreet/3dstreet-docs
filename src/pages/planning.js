import React from 'react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Button } from '../components';
import NavigationMenu from '../components/NavigationMenu';

export default function PlanningPage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Urban Planning - 3DStreet</title>
      <meta
        name="description"
        content="Urban planning solutions using 3DStreet's powerful 3D visualization tools for stakeholder engagement and community consensus"
      />

      {/* Open Graph and Twitter Meta Tags */}
      <meta property="og:url" content="https://3dstreet.org/planning" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Urban Planning - 3DStreet" />
      <meta
        property="og:description"
        content="Urban planning solutions using 3DStreet's powerful 3D visualization tools for stakeholder engagement and community consensus"
      />
      <meta property="og:image" content="/img/website/social-website-preview.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="3dstreet.org" />
      <meta property="twitter:url" content="https://3dstreet.org/planning" />
      <meta name="twitter:title" content="Urban Planning - 3DStreet" />
      <meta
        name="twitter:description"
        content="Urban planning solutions using 3DStreet's powerful 3D visualization tools for stakeholder engagement and community consensus"
      />
      <meta name="twitter:image" content="/img/website/social-website-preview.jpg" />

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
        <header className="st_header_container"></header>
        {/* MAIN SECTION */}
        <main className="st_main">
          <div className="st_main_wrapper">
            <div className="st_main_container">
              <h1>Solutions for Urban Planning</h1>
              <p className="st_hero_paragraph">
                Create compelling 3D visualizations of street redesigns to engage stakeholders 
                and build consensus for transformative projects.
              </p>
              <br />
              <div className="st_hero_cta">
                <Button
                  variant="blue"
                  label="Try 3DStreet Today"
                  trailingIcon={<ExternalLinkIcon />}
                  onClick={() => {
                    window.open("https://3dstreet.app", "_blank", "noopener,noreferrer");
                  }}
                />
                <Button
                  variant="transparent"
                  label="Request Demo"
                  onClick={() => {
                    window.open("https://3dstreet.org/contact", "_blank", "noopener,noreferrer");
                  }}
                />
              </div>


        {/* TRUSTED BY SECTION */}
        <section className="st_trusted_by">
          <h2>TRUSTED BY</h2>
          <div className="st_trusted_by_companies">
            <div className="st_trusted_by_company">
              LA Metro
            </div>
            <div className="st_trusted_by_company">
              Town of Manchester, CT
            </div>
            <div className="st_trusted_by_company">
              City of Silverton, OR
            </div>
            <div className="st_trusted_by_company">
              World Bank Group
            </div>
            <div className="st_trusted_by_company">
              Delaware Valley Regional Planning Commission
            </div>
          </div>
        </section>

              {/* Features Section within Main */}
              <section className="st_statistics">
                <div className="st_statistics_posts">
                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-stakeholder.jpg" alt="Rapid Visualization" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Rapid Visualization</h3>
                      
                      <p>Create compelling street designs in minutes instead of days. What previously required expensive CAD software and specialized training can now be accomplished in a single afternoon.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-community.jpg" alt="Accessible Urban Design" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Accessible Urban Design</h3>
                      <p>Professional-grade street design capabilities without the steep learning curve of traditional engineering software. Enable planners, advocates, and community members to create meaningful design alternatives.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-iteration.jpg" alt="Stakeholder Engagement" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Stakeholder Engagement</h3>
                      <p>Show, don't just tell. Transform abstract planning concepts into interactive 3D visuals that community members can understand and provide meaningful feedback on.</p>
                    </div>
                  </div>
                  
                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-stakeholder.jpg" alt="Budget-Friendly Planning" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Budget-Friendly Planning</h3>
                      <p>Professional-quality visualizations without expensive in-house design resources or consultants. Democratize access to quality planning tools regardless of budget constraints.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-community.jpg" alt="From Concept to Engineering" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">From Concept to Engineering</h3>
                      <p>Start with quick concepts that can later be refined and exported to professional design software. Create a seamless pipeline from ideation to detailed engineering.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-iteration.jpg" alt="Decision Acceleration" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Decision Acceleration</h3>
                      <p>Quickly visualize and evaluate multiple design scenarios to identify the most promising alternatives. Make data-informed decisions faster and avoid costly detours.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="st_main_grid" />
        </main>

        {/* SOLUTIONS SECTION - Planning Tools */}
        <section className="st_solutions">
          <div className="st_solutions_inner">
            <h2>Powerful Tools for Planning Professionals</h2>
            <div className="st_solutions_grid">
              <div className="st_solution_item">
                <h3>Geospatial Integration</h3>
                <p>Ground your designs in real-world context with support for Google 3D Tiles, OpenStreetMap data, and Mapbox satellite imagery. Perfect for creating location-specific visualizations for any city or neighborhood.</p>
                <Button
                  variant="blue"
                  label="Learn more"
                  onClick={() => {
                    window.open("https://3dstreet.org/docs/geospatial-integration", "_blank", "noopener,noreferrer");
                  }}
                />
              </div>
              <div className="st_solution_item">
                <h3>AR-Ready Exports</h3>
                <p>Export your designs as AR-ready 3D models for on-site visualization with popular platforms like Adobe Aero and inCitu. Allow stakeholders to experience your designs in context, right at the project location.</p>
                <Button
                  variant="blue"
                  label="Learn more"
                  onClick={() => {
                    window.open("https://3dstreet.org/docs/ar-exports", "_blank", "noopener,noreferrer");
                  }}
                />
              </div>
              <div className="st_solution_item">
                <h3>Comprehensive 3D Library</h3>
                <p>Access a growing library of street elements including traffic safety features, street furniture, pedestrian amenities, transit infrastructure, and more. Easily customize your scenes with just a few clicks.</p>
                <Button
                  variant="blue"
                  label="Learn more"
                  onClick={() => {
                    window.open("https://3dstreet.org/docs/3d-library", "_blank", "noopener,noreferrer");
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT FEATURES SECTION - Use Cases */}
        <section className="st_product_features">
          <div className="st_product_features_inner">
            <h2>How Planning Professionals Use 3DStreet</h2>
            <div className="st_product_features_grid">
              <div className="st_product_feature_item">
                <h3>Transportation Agencies</h3>
                <p>Visualize complete streets transformations, communicate safety improvements, build consensus for controversial projects, and generate compelling visuals for grant applications.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Urban Planning Departments</h3>
                <p>Create interactive visualizations for community workshops, evaluate multiple design scenarios quickly, integrate with existing GIS data, and develop compelling materials for public hearings.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Engineering Consultants</h3>
                <p>Enhance client presentations with interactive 3D models, differentiate proposals, facilitate more productive client feedback sessions, and export designs to AR for on-site stakeholder reviews.</p>
              </div>
            </div>
            <div className="st_testimonial">
              <blockquote>
                "3DStreet allows us to bring technical street designs to life, helping community members visualize and understand proposed changes. It's been transformative for building consensus on projects that might otherwise face resistance due to misunderstanding."
              </blockquote>
              <cite>- Transportation Planning Professional</cite>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION - Case Studies */}
        <section className="st_features">
          <div className="st_features_inner">
            <h2>Case Studies</h2>

            <div className="st_features_posts">
              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Climate-Resilient Infrastructure for Kiritimati Island</p>
                    <p>
                      The World Bank collaborated with 3DStreet to visualize sustainable transportation infrastructure for Kiritimati Island, the world's largest coral atoll. This project helped imagine climate-resilient solutions that could accommodate both current and future residents in the context of rising sea levels.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Read Case Study"
                    trailingIcon={<ExternalLinkIcon />}
                    onClick={() => {
                      window.open("https://www.3dstreet.org/blog/2024/12/15/visualizing-climate-resilient-infrastructure-kiritimati-sustainable-streets", "_blank", "noopener,noreferrer");
                    }}
                  />
                </div>
                <img
                  src="/img/placeholder-kiritimati.jpg"
                  alt="Visualization of infrastructure on Kiritimati Island"
                  width="386"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <p>Trenton Bike Plan Visualization</p>
                    <p>
                      The Delaware Valley Regional Planning Commission utilized 3DStreet to create compelling visualizations for the "Trenton Bike Plan for All." These 3D models helped stakeholders understand proposed safety improvements and bicycle infrastructure designs.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="View Project"
                    trailingIcon={<ExternalLinkIcon />}
                    onClick={() => {
                      window.open("https://www.dvrpc.org/webmaps/trenton-bike-plan/", "_blank", "noopener,noreferrer");
                    }}
                  />
                </div>
                <img
                  src="/img/placeholder-trenton.jpg"
                  alt="Trenton bike plan visualization"
                  width="386"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GRID SECTION for Getting Started */}
        <section className="st_grid_3_wrapper">
          <section className="st_mission">
            <h2>GETTING STARTED IS EASY</h2>
            <p>Start with a simple 2D design, transform into interactive 3D, then share and collaborate with stakeholders.</p>
            <div className="st_steps">
              <div className="st_step">
                <div className="st_step_number">1</div>
                <h3>Design Your Street</h3>
                <p>Start with a simple 2D design using Streetmix or import your existing street plans.</p>
              </div>

              <div className="st_step">
                <div className="st_step_number">2</div>
                <h3>Visualize in 3D</h3>
                <p>Transform your design into an interactive 3D model with just a few clicks. Add details with our comprehensive object library.</p>
              </div>

              <div className="st_step">
                <div className="st_step_number">3</div>
                <h3>Share and Collaborate</h3>
                <p>Present your vision to stakeholders with shareable links, exports for AR, or embed in your project website.</p>
              </div>
            </div>
          </section>
        </section>
        
        {/* BLOG-STYLE CTA SECTION */}
        <section className="st_blog">
          <div className="st_blog_left_dot" />
          <div className="st_blog_right_dot" />
          <div className="st_blog_inner">
            <div className="st_blog_title_description">
              <h2>Ready to Transform Your Planning Process?</h2>
              <p>Join the growing community of planning professionals using 3DStreet to build understanding and consensus for transformative street projects.</p>
            </div>
            <div className="st_cta_buttons">
              <Button
                variant="blue"
                label="Start Creating Now"
                trailingIcon={<ExternalLinkIcon />}
                onClick={() => {
                  window.open("https://3dstreet.app", "_blank", "noopener,noreferrer");
                }}
              />
              <Button
                variant="outline"
                label="Schedule a Demo"
                onClick={() => {
                  window.open("https://3dstreet.org/contact", "_blank", "noopener,noreferrer");
                }}
              />
            </div>
          </div>
        </section>


        {/* FOOTER SECTION */}
        <footer className="st_footer">
          <div className="st_footer_links">
            <div className="st_footer_col">
              <p>Products</p>
              <ul>
                <li><a href="https://3dstreet.app" target="_blank">3DStreet Editor</a></li>
                <li><a href="/planning" target="_blank">Urban Planning</a></li>
                <li><a href="/education" target="_blank">Education</a></li>
              </ul>
            </div>
            <div className="st_footer_col">
              <p>Resources</p>
              <ul>
                <li><a href="/docs" target="_blank">Documentation</a></li>
                <li><a href="/blog" target="_blank">Blog</a></li>
                <li><a href="/about" target="_blank">About Us</a></li>
              </ul>
            </div>
            <div className="st_footer_col">
              <p>Community</p>
              <ul>
                <li><a href="https://discord.com/invite/9DgKkFCetC" target="_blank">Discord</a></li>
                <li><a href="https://github.com/3DStreet" target="_blank">GitHub</a></li>
              </ul>
            </div>
            <div className="st_footer_col">
              <p>Legal</p>
              <ul>
                <li><a href="/privacy" target="_blank">Privacy Policy</a></li>
                <li><a href="/terms" target="_blank">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <p className="st_footer_copyright">
            <span />
            ©2025 3DStreet LLC. 3DStreet is a registered trademark of 3DStreet LLC.
          </p>
        </footer>
      </div>
    </>
  );
}