import React from 'react';
import { ExternalLinkIcon, ImageIcon, HandIcon, ChatBubbleIcon, SpeakerLoudIcon, UpdateIcon } from '@radix-ui/react-icons';
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
                      <ImageIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Compelling Visualizations</h3>
                      
                      <p>Create powerful before-and-after street transformations that clearly communicate your vision to community members and decision makers in minutes, not days.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <HandIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">No Technical Skills Required</h3>
                      <p>Empower volunteers and staff members to create professional-quality visuals without specialized design training or expensive software licenses.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <ChatBubbleIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Community Engagement</h3>
                      <p>Transform abstract plans into interactive 3D visuals that residents can understand and respond to, building stronger support for your initiatives.</p>
                    </div>
                  </div>
                  
                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <SpeakerLoudIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Influence Decision Makers</h3>
                      <p>Present compelling visuals at public meetings, on social media, and in presentations to help officials understand the positive impact of your proposals.</p>
                      </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <UpdateIcon width={96} height={96} />
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
          "3DStreet allows ordinary citizens to create realistic, high quality proposals, without requiring a background in urban planning or landscape architecture. For Hayes Promenade, I created an initial 2D design in Streetmix, imported it into 3DStreet, built it out in 3D space, and finally exported that into Adobe Aero. This resulted in a complete augmented reality demo, where users can walk down our street with their phones, experiencing our proposal in first-person."
          </blockquote>
          <cite>- Andrew Seigner, <a href="https://www.hayespromenade.org/">Hayes Promenade</a></cite>
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
                  label="Learn More"
                  href="/docs/key-features/geospatial"
                />
              </div>
              <div className="st_solution_item">
                <h3>Tactical Urbanism Features</h3>
                <p>Visualize quick-build solutions like parklets, planters, bollards, and traffic diverters that can be implemented at low cost while building support for permanent changes.</p>
                <Button
                  variant="blue"
                  label="Learn More"
                  href="/docs/key-features/model-library"
                />
              </div>
              <div className="st_solution_item">
                <h3>Shareable Formats</h3>
                <p>Export your designs as images, videos, or interactive AR experiences that can be shared on social media, embedded in websites, or presented at community meetings.</p>
                <Button
                  variant="blue"
                  label="Learn More"
                  href="/docs/3dstreet-editor/saving-and-loading-scenes#file-export-options"
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
            "As our neighborhood developed a vision for welcoming a new elementary school, 3DStreet has been a great gift to outreach and engagement with the community, elected officials, and agency staff. The multi-viewpoint visualization, especially the first-person animation of traffic circle usage at a child’s height and illustrating before/after conditions clearly conveys what is possible."
          </blockquote>
          <cite>- Sarah Bertram, Community Advocate</cite>
        </div>
        {/* FEATURES SECTION - Case Studies */}
        <section className="st_features">
          <div className="st_features_inner">
            <h2>Case Studies</h2>

            <div className="st_features_posts">
              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <h1>Community-Led Design of Safe School Streets</h1>
                    <p>
                      In San Francisco's Mission Bay neighborhood, community leaders used 3DStreet to create a 3D digital twin of proposed street safety improvements around a new elementary school. The visualization helped them effectively advocate for the project with city officials and stakeholders, transforming a vehicle-centric traffic circle into a safer space for students and families.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Read Case Study"
                    href="/blog/2024/05/24/community-led-design-of-safe-school-streets-for-mission-bay-elementary-school"
                    target="_blank"
                  />
                </div>
                <img
                  src="/images/2024-05-24/mission-bay-traffic-circle-rev4.jpg"
                  alt="Mission Bay Elementary School traffic circle visualization"
                  width="386"
                />
              </div>

              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <h1>Community-Led Planning Trends at Caltrans</h1>
                    <p>
                      At the Caltrans Equity Advisory Committee meeting, transportation professionals and community leaders discussed the global trend of community-led planning. 3DStreet's visualization tools were highlighted as a solution to bridge the gap between agencies and communities, helping residents better understand and participate in the planning process for their streets and public spaces.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Read Case Study"
                    href="/blog/2024/04/22/community-led-planning-trends-at-caltrans-equity-advisory-committee"
                    target="_blank"
                  />
                </div>
                <img
                  src="/images/2024-03-25/treat-fair-bollard-buddy-signage-960x0.webp"
                  alt="Community-led planning presentation slide"
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
