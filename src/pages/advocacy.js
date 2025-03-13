import React from 'react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Button } from '../components';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

export default function AdvocacyPage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Transportation and Land Use Advocacy - 3DStreet</title>
      <meta
        name="description"
        content="Empower your advocacy efforts with 3DStreet's powerful 3D visualization tools to build community support and influence decision makers"
      />

      {/* Open Graph and Twitter Meta Tags */}
      <meta property="og:url" content="https://3dstreet.org/advocacy" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Transportation and Land Use Advocacy - 3DStreet" />
      <meta
        property="og:description"
        content="Empower your advocacy efforts with 3DStreet's powerful 3D visualization tools to build community support and influence decision makers"
      />
      <meta property="og:image" content="/img/website/social-website-preview.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="3dstreet.org" />
      <meta property="twitter:url" content="https://3dstreet.org/advocacy" />
      <meta name="twitter:title" content="Transportation and Land Use Advocacy - 3DStreet" />
      <meta
        name="twitter:description"
        content="Empower your advocacy efforts with 3DStreet's powerful 3D visualization tools to build community support and influence decision makers"
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
            href="https://3dstreet.app"
            target="_blank"
          />
        </div>

        {/* HEADER SECTION */}
        <header className="st_header_container"></header>
        {/* MAIN SECTION */}
        <main className="st_main">
          <div className="st_main_wrapper">
            <div className="st_main_container">
              <h1>Solutions for Land Use and Transportation Advocacy</h1>
              <p className="st_hero_paragraph">
                Visualize your community's future with powerful 3D tools that help build support for safer streets, 
                sustainable transportation, and vibrant public spaces.
              </p>
              <br />
              <div className="st_hero_cta">
                <Button
                  variant="blue"
                  label="Try 3DStreet Today"
                  trailingIcon={<ExternalLinkIcon />}
                  href="https://3dstreet.app"
                  target="_blank"
                />
                <Button
                  variant="transparent"
                  label="Request Demo"
                  href="/contact"
                />
              </div>


        {/* TRUSTED BY SECTION */}
        <section className="st_trusted_by">
          <h2>TRUSTED BY</h2>
          <div className="st_trusted_by_companies">
            <div className="st_trusted_by_company">
              Greater Philadelphia Bicycle Coalition
            </div>
            <div className="st_trusted_by_company">
              Hayes Street Promenade
            </div>
            <div className="st_trusted_by_company">
              Transport Oakland
            </div>
            <div className="st_trusted_by_company">
              BikeEastBay
            </div>
            <div className="st_trusted_by_company">
              Mission Bay Neighborhood Association
            </div>
          </div>
        </section>

              {/* Features Section within Main */}
              <section className="st_statistics">
                <div className="st_statistics_posts">
                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-stakeholder.jpg" alt="Compelling Visualizations" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Compelling Visualizations</h3>
                      
                      <p>Create powerful before-and-after street transformations that clearly communicate your vision to community members and decision makers in minutes, not days.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-community.jpg" alt="No Technical Skills Required" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">No Technical Skills Required</h3>
                      <p>Empower volunteers and staff members to create professional-quality visuals without specialized design training or expensive software licenses.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-iteration.jpg" alt="Community Engagement" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Community Engagement</h3>
                      <p>Transform abstract plans into interactive 3D visuals that residents can understand and respond to, building stronger support for your initiatives.</p>
                    </div>
                  </div>
                  
                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-stakeholder.jpg" alt="Influence Decision Makers" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Influence Decision Makers</h3>
                      <p>Present compelling visuals at public meetings, on social media, and in presentations to help officials understand the positive impact of your proposals.</p>
                      </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <img src="/img/placeholder-community.jpg" alt="Rapid Iteration" />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Rapid Iteration</h3>
                      <p>Quickly develop and test multiple design alternatives based on community feedback, allowing your vision to evolve through collaborative input.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="st_main_grid" />
        </main>
        <div className="st_testimonial">
              <blockquote>
                "3DStreet has completely transformed how we communicate our vision to both community members and city officials. Being able to show rather than just tell has significantly increased support for our safer streets initiatives."
              </blockquote>
              <cite>- Advocacy Director, Safe Streets Coalition</cite>
            </div>
            <br/>
        {/* SOLUTIONS SECTION - Advocacy Tools */}
        <section className="st_solutions">
          <div className="st_solutions_inner">
            <h2>Powerful Tools for Advocacy Organizations</h2>
            <div className="st_solutions_grid">
              <div className="st_solution_item">
                <h3>Real-World Context</h3>
                <p>Ground your proposals in familiar locations with Google 3D Tiles, OpenStreetMap data, and satellite imagery. Help your community visualize changes to their own streets and neighborhoods.</p>
                <Button
                  variant="blue"
                  label="Learn more"
                  href="https://3dstreet.org/docs/geospatial-integration"
                  target="_blank"
                />
              </div>
              <div className="st_solution_item">
                <h3>Tactical Urbanism Features</h3>
                <p>Visualize quick-build solutions like parklets, planters, bollards, and traffic diverters that can be implemented at low cost while building support for permanent changes.</p>
                <Button
                  variant="blue"
                  label="Learn more"
                  href="https://3dstreet.org/docs/tactical-urbanism"
                  target="_blank"
                />
              </div>
              <div className="st_solution_item">
                <h3>Shareable Formats</h3>
                <p>Export your designs as images, videos, or interactive AR experiences that can be shared on social media, embedded in websites, or presented at community meetings.</p>
                <Button
                  variant="blue"
                  label="Learn more"
                  href="https://3dstreet.org/docs/export-options"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT FEATURES SECTION - Use Cases */}
        <section className="st_product_features">
          <div className="st_product_features_inner">
            <h2>How Advocacy Organizations Use 3DStreet</h2>
            <div className="st_product_features_grid">
              <div className="st_product_feature_item">
                <h3>Neighborhood Associations</h3>
                <p>Visualize street improvements that enhance safety and livability, build resident support for traffic calming, and effectively communicate local priorities to city officials.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Transportation Advocacy Groups</h3>
                <p>Create compelling visuals of protected bike lanes, transit priorities, and pedestrian improvements to build public support and influence transportation plans and policies.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Community Development Organizations</h3>
                <p>Visualize how public space transformations can enhance neighborhood vitality, engage residents in participatory design processes, and build support for place-based investments.</p>
              </div>
            </div>

          </div>
        </section>

        <div className="st_testimonial">
              <blockquote>
                "What used to take us weeks of work with expensive consultants can now be accomplished in a workshop with community members using 3DStreet. Our visualization capacity has increased tenfold while our costs have decreased dramatically."
              </blockquote>
              <cite>- Executive Director, Neighborhood Transportation Alliance</cite>
            </div>
        {/* FEATURES SECTION - Case Studies */}
        <section className="st_features">
          <div className="st_features_inner">
            <h2>Case Studies</h2>

            <div className="st_features_posts">
              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <h1>Transport Oakland Volunteer Design Workshop</h1>
                    <p>
                      Transport Oakland equipped their volunteers with 3DStreet to visualize community-driven proposals for safer streets. The organization hosted virtual workshops where participants collaboratively designed and visualized street transformations that were later presented to city officials.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Watch Workshop Video"
                    trailingIcon={<ExternalLinkIcon />}
                    href="https://www.youtube.com/watch?v=m393-ZNeU68"
                    target="_blank"
                  />
                </div>
                <img
                  src="/img/pages/transport-oakland-workshop.webp"
                  alt="Transport Oakland volunteer workshop with 3DStreet"
                  width="386"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <h1>Treat Avenue Community-Led Design</h1>
                    <p>
                      Neighborhood advocates used 3DStreet to visualize the conversion of Treat Avenue in San Francisco into a community-focused greenway. Using AR visualization tools, residents could place street furniture, plantings, and amenities virtually to reimagine their street as a vibrant public space.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Read Case Study"
                    trailingIcon={<ExternalLinkIcon />}
                    href="https://www.sfchronicle.com/bayarea/article/treat-avenue-green-space-19362364.php"
                    target="_blank"
                  />
                </div>
                <img
                  src="/img/pages/treat-street-fair.webp"
                  alt="Treat Avenue community design visualization"
                  width="386"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* BLOG-STYLE CTA SECTION */}
        <section className="st_blog">
          <div className="st_blog_left_dot" />
          <div className="st_blog_right_dot" />
          <div className="st_blog_inner">
            <div className="st_blog_title_description">
              <h2>Ready to Amplify Your Advocacy Impact?</h2>
              <p>Join the growing community of advocacy organizations using 3DStreet to build public support and influence decision makers for safer, more sustainable, and more vibrant streets.</p>
            </div>
            <div className="st_cta_buttons">
              <Button
                variant="blue"
                label="Start Creating Now"
                trailingIcon={<ExternalLinkIcon />}
                href="https://3dstreet.app"
                target="_blank"
              />
              <Button
                label="Schedule a Demo"
                variant="transparent"
                href="/contact"
              />
          </div>
          </div>

        </section>


        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </>
  );
}
