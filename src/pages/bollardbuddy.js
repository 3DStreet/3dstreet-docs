import React from 'react';
import { ExternalLinkIcon, ImageIcon, CubeIcon, Share1Icon } from '@radix-ui/react-icons';
import { Button } from '../components';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

const APP_STORE_URL = 'https://apps.apple.com/us/app/bollard-buddy/id6756771127';

export default function BollardBuddyPage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bollard Buddy for iOS: Place Bollards in AR | 3DStreet</title>
      <meta
        name="description"
        content="Visualize safer streets in augmented reality. Place bollards, planters, and traffic-calming elements on real surfaces, then capture and share your street designs."
      />

      {/* Open Graph and Twitter Meta Tags */}
      <meta property="og:url" content="https://www.3dstreet.com/bollardbuddy" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bollard Buddy for iOS: Place Bollards in AR" />
      <meta
        property="og:description"
        content="Visualize safer streets in augmented reality. Place bollards, planters, and traffic-calming elements on real surfaces, then capture and share your street designs."
      />
      <meta property="og:image" content="/img/bollardbuddy/screenshot-1.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="3dstreet.com" />
      <meta property="twitter:url" content="https://www.3dstreet.com/bollardbuddy" />
      <meta name="twitter:title" content="Bollard Buddy for iOS: Place Bollards in AR" />
      <meta
        name="twitter:description"
        content="Visualize safer streets in augmented reality. Place bollards, planters, and traffic-calming elements on real surfaces, then capture and share your street designs."
      />
      <meta name="twitter:image" content="/img/bollardbuddy/screenshot-1.png" />

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
            label="Open in App Store"
            trailingIcon={<ExternalLinkIcon />}
            href={APP_STORE_URL}
            target="_blank"
          />
        </div>

        {/* HEADER SECTION */}
        <header className="st_header_container"></header>
        {/* MAIN SECTION */}
        <main className="st_main">
          <div className="st_main_wrapper">
            <div className="st_main_container" style={{ maxWidth: '1160px' }}>
              <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
                <div style={{ flex: '2 1 480px', minWidth: 0 }}>
                  <h1>Bollard Buddy for iOS</h1>
                  <p style={{ fontSize: '1.5rem', fontWeight: 600, opacity: 0.85, margin: '0 0 1.25rem' }}>
                    Place Bollards in AR
                  </p>
                  <p className="st_hero_paragraph" style={{ maxWidth: '100%' }}>
                    Visualize safer streets in augmented reality. Point your iPhone at a sidewalk, curb, or
                    any space, and place virtual bollards, traffic cones, planters, benches, and more on
                    real surfaces.
                  </p>
                  <div className="st_hero_cta" style={{ marginBottom: '40px' }}>
                    <Button
                      variant="blue"
                      label="Download on the App Store"
                      trailingIcon={<ExternalLinkIcon />}
                      href={APP_STORE_URL}
                      target="_blank"
                    />
                    <Button
                      variant="transparent"
                      label="Explore 3DStreet"
                      href="https://3dstreet.app"
                      target="_blank"
                    />
                  </div>
                  <p className="st_hero_paragraph" style={{ maxWidth: '100%', marginBottom: 0 }}>
                    Capture photos of your designs and share them with neighbors, city officials, or
                    community groups working toward safer streets. Then take your field captures into the
                    3DStreet Editor, where you can refine the design, check measurements, and build
                    presentation-ready visualizations that win over decision makers.
                  </p>
                </div>
                <div style={{ flex: '1 1 260px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/img/bollardbuddy/screenshot-1.webp"
                    alt="Placing a bollard in AR on a real street with Bollard Buddy"
                    style={{
                      width: '100%',
                      maxWidth: '320px',
                      borderRadius: '24px',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35)',
                    }}
                  />
                </div>
              </div>

              {/* FEATURES SECTION */}
              <section className="st_statistics">
                <div className="st_statistics_posts">
                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <ImageIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Place in Real-World Context</h3>
                      <p>Use AR plane detection to drop street design elements directly onto the
                      sidewalk or roadway in front of you, exactly where they'd go.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <CubeIcon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Built-in Model Library</h3>
                      <p>Bollards are just the start. Place planters, trees, benches, traffic cones, and
                      other green infrastructure and traffic-safety models.</p>
                    </div>
                  </div>

                  <div className="st_statistics_item">
                    <div className="st_statistics_icon">
                      <Share1Icon width={96} height={96} />
                    </div>
                    <div className="st_statistics_post_description">
                      <h3 className="st_statistics_post_title">Capture &amp; Share</h3>
                      <p>Save snapshots to your device, share them on social media, or upload to your
                      private cloud gallery to revisit across devices.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="st_main_grid" />
        </main>

        {/* SCREENSHOTS SECTION */}
        <section className="st_solutions">
          <div className="st_solutions_inner">
            <div className="st_solutions_grid">
              <div className="st_solution_item">
                <img
                  src="/img/bollardbuddy/screenshot-1.webp"
                  alt="Placing a bollard in AR on a real street"
                  style={{ width: '100%', borderRadius: '12px' }}
                />
              </div>
              <div className="st_solution_item">
                <img
                  src="/img/bollardbuddy/screenshot-2.webp"
                  alt="Bollard Buddy built-in model library"
                  style={{ width: '100%', borderRadius: '12px' }}
                />
              </div>
              <div className="st_solution_item">
                <img
                  src="/img/bollardbuddy/screenshot-3.webp"
                  alt="Sharing and saving an AR street design snapshot"
                  style={{ width: '100%', borderRadius: '12px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="st_blog">
          <div className="st_blog_left_dot" />
          <div className="st_blog_right_dot" />
          <div className="st_blog_inner">
            <div className="st_blog_title_description">
              <h2>Step Outside and Transform Your Street</h2>
              <p>Grab your iPhone and head out the door. The streets you walk every day are waiting to
              be reimagined, and safer, greener blocks start with one person willing to picture them
              first.</p>
            </div>
            <div className="st_cta_buttons">
              <Button
                variant="blue"
                label="Download on the App Store"
                trailingIcon={<ExternalLinkIcon />}
                href={APP_STORE_URL}
                target="_blank"
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
