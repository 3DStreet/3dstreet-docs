import React from 'react';
import { ExternalLinkIcon, CubeIcon, HandIcon, HeartFilledIcon, BookmarkIcon, LightningBoltIcon } from '@radix-ui/react-icons';
import { Button } from '../components';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

export default function EducationPage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Education - 3DStreet</title>
      <meta
        name="description"
        content="Educational solutions using 3DStreet's interactive 3D visualization tools for engaging students from Pre-K to Post-Doc"
      />

      {/* Open Graph and Twitter Meta Tags */}
      <meta property="og:url" content="https://3dstreet.org/education" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Education - 3DStreet" />
      <meta
        property="og:description"
        content="Educational solutions using 3DStreet's interactive 3D visualization tools for engaging students from Pre-K to Post-Doc"
      />
      <meta property="og:image" content="/img/website/social-website-preview.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="3dstreet.org" />
      <meta property="twitter:url" content="https://3dstreet.org/education" />
      <meta name="twitter:title" content="Education - 3DStreet" />
      <meta
        name="twitter:description"
        content="Educational solutions using 3DStreet's interactive 3D visualization tools for engaging students from Pre-K to Post-Doc"
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
              <h1>Solutions for Education</h1>
              <p className="st_hero_paragraph">
                Empower students with interactive 3D visualization tools that make learning about urban design, 
                sustainability, and spatial thinking engaging and accessible for all ages.
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
              University of Oregon
            </div>
            <div className="st_trusted_by_company">
              Universidad Nacional Autónoma de México
            </div>
            <div className="st_trusted_by_company">
              Instituto Federal de São Paulo
            </div>
            <div className="st_trusted_by_company">
              Universidade Federal de Mato Grosso do Sul
            </div>
            <div className="st_trusted_by_company">
              Universidad de los Andes
            </div>
          </div>
        </section>

              {/* Features Section within Main */}
              <section className="st_statistics">
                <div className="st_statistics_posts">
                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <CubeIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Interactive Learning</h3>
                      
                      <p>Transform abstract concepts into interactive 3D visualizations that students can explore and manipulate. Boost engagement and comprehension through hands-on digital experiences.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <HandIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Accessible STEAM Education</h3>
                      <p>Introduce complex concepts in science, technology, engineering, art, and mathematics through an intuitive platform that requires no coding or technical expertise to use.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <HeartFilledIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Student Engagement</h3>
                      <p>Captivate digital natives with immersive 3D experiences that make learning about urban planning, sustainability, and civic engagement exciting and memorable.</p>
                    </div>
                  </div>
                  
                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <BookmarkIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Enhance Lesson Plans</h3>
                      <p>Elevate your curriculum with ready-to-use activities that integrate visual learning, spatial thinking, and creative problem-solving across multiple subjects.</p>
                      </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <LightningBoltIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">From Concept to Creation</h3>
                      <p>Guide students through the entire design thinking process, from ideation to visualization, fostering critical thinking and creative problem-solving skills.</p>
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
              "3DStreet has empowered our students to re-think the right of way. They're not just learning about sustainable transportation, missing middle housing, and more livable place-making —they're visualizing, creating, problem-solving, and communicating their bold ideas in ways that weren't possible before. It's made street design prototyping accessible to students of all learning styles and helps develop both hard and soft skills as students are better able to communicate street redesign ideas to a broad set of public stakeholders."
              </blockquote>
              <cite>- Marc Schlossberg, Professor, City & Regional Planning, University of Oregon</cite>
            </div>
            <br/>
        {/* SOLUTIONS SECTION - Education Tools */}
        <section className="st_solutions">
          <div className="st_solutions_inner">
            <h2>Powerful Tools for Educators</h2>
            <div className="st_solutions_grid">
              <div className="st_solution_item">
                <h3>No-Code 3D Creation</h3>
                <p>Empower students of all technical abilities to create and share complex 3D environments without coding skills. Perfect for project-based learning that builds digital literacy alongside subject knowledge.</p>
                <Button
                  variant="blue"
                  label="Learn More"
                  href="/docs/key-features/model-library"
                />
              </div>
              <div className="st_solution_item">
                <h3>Cross-Disciplinary Applications</h3>
                <p>From geography and civics to mathematics and environmental science, 3DStreet provides versatile visualization tools that can be integrated into diverse subjects and aligned with curriculum standards.</p>
                {/* <Button
                  variant="blue"
                  label="Learn More"
                  href="/docs/key-features/model-library"
                /> */}
              </div>
              <div className="st_solution_item">
                <h3>Easy Sharing & Collaboration</h3>
                <p>Enable students to collaborate on projects in real-time, present their work to peers, and share interactive 3D models with the broader community—all through browser-based technology with no downloads required.</p>
                {/* <Button
                  variant="blue"
                  label="Learn More"
                  href="/docs/key-features/model-library"
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT FEATURES SECTION - Use Cases */}
        <section className="st_product_features">
          <div className="st_product_features_inner">
            <h2>How Educators Use 3DStreet</h2>
            <div className="st_product_features_grid">
              <div className="st_product_feature_item">
                <h3>K-12 Schools</h3>
                <p>Integrate 3D visualization into geography, mathematics, and social studies curriculum. Create engaging project-based learning activities that connect classroom concepts to students' lived environments and communities.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>Universities</h3>
                <p>Enhance urban planning, architecture, and civil engineering courses with powerful visualization tools. Enable students to create and test design hypotheses in a risk-free digital environment before moving to physical models.</p>
              </div>
              <div className="st_product_feature_item">
                <h3>STEAM Programs</h3>
                <p>Support after-school and enrichment programs with engaging technology that builds digital literacy, spatial thinking, and creative problem-solving skills while introducing students to urban design principles.</p>
              </div>
            </div>

          </div>
        </section>

        <div className="st_testimonial">
              <blockquote>
              "Our University partnership with 3DStreet is uniquely collaborative due to their willingness to go beyond other software vendors to ensure our lab has the resources to succeed. They are responsive to our feedback, and work directly with industry researchers like me through open-source collaborations to enable modification and upgrade of 3DStreet features and urban models."              </blockquote>
              <cite>- Luke Walker, Research Assistant, Oregon Reality (OR) Lab</cite>
            </div>
        {/* FEATURES SECTION - Case Studies */}
        <section className="st_features">
          <div className="st_features_inner">
            <h2>Case Studies</h2>

            <div className="st_features_posts">
              <div className="st_features_item">
                <div className="st_feature_description">
                  <div className="st_feature_description_top">
                    <h1>Open Sourcing 3D Traffic Safety Objects with University of Oregon I3 Program</h1>
                    <p>
                      Students in the University of Oregon's Immersive Media Communications program used 3DStreet to create augmented reality visualizations of safer street designs. This project combined digital media skills with urban planning concepts, culminating in AR experiences that could be viewed on-location with mobile devices.
                    </p>
                  </div>
                  <Button
                    variant="blue"
                    label="Read Case Study"
                    href="/blog/2024/07/15/open-sourcing-3d-traffic-safety-objects-with-university-of-oregon-i3-program"
                    target="_blank"
                  />
                </div>
                <img
                  src="/assets/images/ped-median-refuge-island-a10629e3d5e88268a7e79a3fe29d3b91.jpeg"
                  alt="Students creating AR street visualizations"
                  width="386"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* VIDEO DEMO SECTION */}
        <section id="see-3dstreet-in-action" className="st_video_demo" style={{ padding: '60px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ marginBottom: '40px' }}>See 3DStreet in Action</h2>
            <div style={{padding:'65.53% 0 0 0',position:'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1093919012?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
                title="3DStreet Demo for Education with Streetmix Flow">
              </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </section>
        
        {/* BLOG-STYLE CTA SECTION */}
        <section className="st_blog">
          <div className="st_blog_left_dot" />
          <div className="st_blog_right_dot" />
          <div className="st_blog_inner">
            <div className="st_blog_title_description">
              <h2>Ready to Transform Your Classroom?</h2>
              <p>Join the growing community of educators using 3DStreet to create interactive, engaging learning experiences that prepare students for the future.</p>
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
                label="Request Educational Access"
                variant="transparent"
                onClick={() => {
                  window.open("/contact");
                }}
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