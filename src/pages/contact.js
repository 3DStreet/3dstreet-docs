import React from 'react';
import { ExternalLinkIcon, DiscordLogoIcon, CalendarIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { Button } from '../components';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Us - 3DStreet</title>
      <meta
        name="description"
        content="Contact 3DStreet for sales inquiries, support, or general questions"
      />

      {/* Open Graph and Twitter Meta Tags */}
      <meta property="og:url" content="https://3dstreet.org/contact" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Contact Us - 3DStreet" />
      <meta
        property="og:description"
        content="Contact 3DStreet for sales inquiries, support, or general questions"
      />
      <meta property="og:image" content="/img/website/social-website-preview.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="3dstreet.org" />
      <meta property="twitter:url" content="https://3dstreet.org/contact" />
      <meta name="twitter:title" content="Contact Us - 3DStreet" />
      <meta
        name="twitter:description"
        content="Contact 3DStreet for sales inquiries, support, or general questions"
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

        {/* MAIN SECTION */}
        <main className="st_main">
          <div className="st_main_wrapper">
            <div className="st_main_container">
              <h1>Get in Touch</h1>
              <p className="st_hero_paragraph">
                Have questions about 3DStreet? We're here to help! Choose the best way to reach us below.
              </p>
            </div>
          </div>
        </main>

        {/* CONTACT SECTION */}
        <section className="st_contact_section">
          <div className="st_contact_inner">
            <div className="st_contact_grid">
              {/* Sales Contact */}
              <div className="st_contact_item">
                <h2>Sales Inquiries</h2>
                <p>Interested in 3DStreet for your organization? Schedule a demo or reach out directly.</p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginTop: '1.5rem',
                  alignItems: 'center'
                }}>
                  <Button
                    variant="blue"
                    label="Schedule a Demo"
                    trailingIcon={<CalendarIcon style={{ width: '1.33em', height: '1.33em' }} />}
                    onClick={() => {
                      window.open("https://calendar.app.google/ohjYMBPuLjGupHov5", "_blank", "noopener,noreferrer");
                    }}
                  />
                  <p style={{ margin: '0.5rem 0', color: 'rgba(255, 255, 255, 0.7)' }}>or</p>
                  <Button
                    variant="transparent"
                    label="Email team@3dstreet.com"
                    trailingIcon={<EnvelopeClosedIcon style={{ width: '1.33em', height: '1.33em' }} />}
                    onClick={() => {
                      window.location.href = "mailto:team@3dstreet.com";
                    }}
                  />
                </div>
              </div>
              
              {/* Support Contact */}
              <div className="st_contact_item" style={{ marginTop: '2rem' }}>
                <h2>Support</h2>
                <p>Need help with 3DStreet? Join our Discord community for the fastest support and to connect with other users.</p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Button
                    variant="blue"
                    label="Join Our Discord"
                    trailingIcon={<DiscordLogoIcon style={{ width: '1.33em', height: '1.33em' }} />}
                    onClick={() => {
                      window.open("https://discord.gg/zNFMhTwKSd", "_blank", "noopener,noreferrer");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </>
  );
}