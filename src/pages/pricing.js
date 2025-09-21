import React, { useState } from 'react';
import { ExternalLinkIcon, CheckIcon } from '@radix-ui/react-icons';
import { Button } from '../components';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

export default function PricingPage() {
  const plans = [
    {
      name: 'Community Edition',
      price: 'Free',
      description: 'Perfect for personal projects and exploration',
      features: [
        'Store unlimited scenes',
        'Prototype street configurations',
        'Access hundreds of 3D models',
        'Import from Streetmix and StreetPlan',
        'Download unlimited JPEG snapshots (with watermark)',
        '🪙 Trial geospatial tokens',
        'Community support via Discord'
      ],
      buttonLabel: 'Start Now',
      buttonHref: 'https://3dstreet.app',
      buttonVariant: 'blue'
    },
    {
      name: 'Pro',
      price: '$10',
      subtitle: 'per month',
      description: 'For professionals creating street designs',
      features: [
        'Everything in Free, plus:',
        'Download JPEG snapshots without watermark',
        'Unlimited Geospatial 3D Maps',
        '🪙 100 AI generation tokens per month',
        'Import custom 3D models',
        'Reference custom SVG and glTF files',
        'Export "AR Ready" glTF for Augmented Reality apps',
        'Multiple street section support'
      ],
      buttonLabel: 'Activate Pro Edition',
      buttonHref: 'https://3dstreet.app',
      buttonVariant: 'blue'
    },
    {
      name: 'Pro Annual',
      price: '$84',
      subtitle: 'per year',
      savings: '(save 30%)',
      description: 'Best value for professionals',
      features: [
        'Everything in Pro, plus:',
        '🪙 840 bonus AI generation tokens on first purchase',
        'Save 30% with annual billing'
      ],
      buttonLabel: 'Save with Pro Annual',
      buttonHref: 'https://3dstreet.app',
      buttonVariant: 'blue'
    },
    {
      name: 'Pro Team',
      price: '$5,000',
      subtitle: 'per year for up to 50 users',
      description: 'Perfect for organizations and universities',
      features: [
        'Everything in Pro, for teams up to 50 users',
        'Domain-based access (organization/university email)',
        'Monthly refilled AI Rendering tokens for each user',
        'Unlimited geospatial feature tokens',
        'One year license (non-renewing)',
        'Setup support within 2 weeks'
      ],
      buttonLabel: 'Purchase Pro Team',
      buttonHref: 'https://buy.stripe.com/4gM9AS6QJeqa5p3dwK1oI02',
      buttonVariant: 'blue'
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express). Invoice or custom payment options are available for Pro Team plans.'
    },
    {
      question: 'Do you offer educational discounts?',
      answer: <>Yes, for qualifying K-12 institutions. <a href="/docs/classroom-sponsorship#school-eligibility" style={{color: 'var(--primary-color, #0066ff)', textDecoration: 'underline'}}>Learn more about our school program</a>.</>
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your scenes and data remain accessible. You can export your data at any time. When you cancel a Pro plan you may not be able to perform certain actions in the platform such as setting new geolocations for scenes, but your scenes and data will remain.'
    },
    {
      question: 'Is there a limit on Premium 3D Map Tiles?',
      answer: 'Paid plans include up to 10,000 Premium 3D Map Tiles sessions per month. Most users will not hit these limits.'
    },
    {
      question: 'Can I use 3DStreet for commercial projects?',
      answer: '3DStreet is free for personal and non-commercial use. If you\'re using 3DStreet for professional work, please support us with a Pro plan or higher.'
    },
    {
      question: 'Can I download 3D assets generated in 3DStreet and use them in other applications?',
      answer: 'Yes, Pro plans can export and download glTF versions of assets, and you can also access our entire asset repository on GitHub. If you use downloaded assets from 3DStreet for commercial projects, please maintain a paid Pro plan for the duration of the product, project, or service that makes use of these assets.'
    }
  ];

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pricing - 3DStreet</title>
      <meta
        name="description"
        content="Choose the perfect 3DStreet plan for your street design needs. From free personal use to custom enterprise solutions."
      />

      {/* Open Graph and Twitter Meta Tags */}
      <meta property="og:url" content="https://3dstreet.org/pricing" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pricing - 3DStreet" />
      <meta
        property="og:description"
        content="Choose the perfect 3DStreet plan for your street design needs. From free personal use to custom enterprise solutions."
      />
      <meta property="og:image" content="/img/website/social-website-preview.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="3dstreet.org" />
      <meta property="twitter:url" content="https://3dstreet.org/pricing" />
      <meta name="twitter:title" content="Pricing - 3DStreet" />
      <meta
        name="twitter:description"
        content="Choose the perfect 3DStreet plan for your street design needs. From free personal use to custom enterprise solutions."
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

        {/* MAIN SECTION */}
        <main className="st_main">
          <div className="st_main_wrapper">
            <div className="st_pricing_page">
              <h1>Choose Your Plan</h1>
              <p className="st_hero_paragraph">
                Start free and scale as you grow. All plans include core 3D street design features.
              </p>

              {/* Pricing Cards */}
              <div className="st_pricing_cards">
                {plans.slice(0, 3).map((plan, index) => (
                  <div key={index} className={`st_pricing_card ${plan.recommended ? 'recommended' : ''}`}>
                    {/* Hiding badge for now */
                      false && plan.recommended && (
                      <div className="st_recommended_badge">Best Value</div>
                    )}
                    <h3 className="st_plan_name">{plan.name}</h3>
                    <div className="st_plan_price">
                      <span className="st_price_amount">{plan.price}</span>
                      <span className="st_price_period">{plan.subtitle} <span className="st_price_savings">{plan.savings}</span></span>
                      

                    </div>
                    <p className="st_plan_description">{plan.description}</p>
                    <Button
                      variant={plan.buttonVariant}
                      label={plan.buttonLabel}
                      href={plan.buttonHref}
                      target={plan.buttonHref.startsWith('http') ? '_blank' : undefined}
                    />
                    <ul className="st_plan_features">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className={feature.startsWith('Everything in') ? 'no-check' : ''}>
                          {!feature.startsWith('Everything in') && <CheckIcon className="st_check_icon" />}
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Pro Team Plan Card */}
              <div className="st_team_plan_wrapper">
                <div className="st_pricing_card st_team_card">
                  <div className="st_team_card_content">
                    <div className="st_team_info">
                      <h3 className="st_plan_name">{plans[3].name}</h3>
                      <div className="st_plan_price">
                        <span className="st_price_amount">{plans[3].price}</span>
                        <span className="st_price_period">{plans[3].subtitle}</span>
                      </div>
                      <p className="st_plan_description">{plans[3].description}</p>
                    </div>
                    <ul className="st_plan_features st_team_features">
                      {plans[3].features.map((feature, idx) => (
                        <li key={idx}>
                          <CheckIcon className="st_check_icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="st_team_buttons">
                      <Button
                        variant={plans[3].buttonVariant}
                        label={plans[3].buttonLabel}
                        href={plans[3].buttonHref}
                        target={plans[3].buttonHref.startsWith('http') ? '_blank' : undefined}
                      />
                      <Button
                        variant="transparent"
                        label="Schedule a Demo"
                        href="https://calendar.app.google/ohjYMBPuLjGupHov5"
                        target="_blank"
                        className="purple-outline-button"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <section className="st_faq_section">
                <h2>Frequently Asked Questions</h2>
                <div className="st_faq_grid">
                  {faqs.map((faq, index) => (
                    <div key={index} className="st_faq_item">
                      <h3 className="st_faq_question">{faq.question}</h3>
                      <p className="st_faq_answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="st_cta_section">
                <h2 className="st_cta_heading">Ready to transform your street designs?</h2>
                <p>Start with our free plan and upgrade anytime.</p>
                <div className="st_cta_buttons">
                  <Button
                    variant="blue"
                    label="Start Free"
                    href="https://3dstreet.app"
                    target="_blank"
                  />
                  <Button
                    variant="transparent"
                    label="Contact Sales"
                    href="/contact"
                  />
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        /* Override inherited styles and create clean pricing page layout */
        .st_pricing_page {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .st_pricing_page h1 {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #fff;
          font-family: "Kanit";
          width: 100%;
        }

        .st_pricing_page .st_hero_paragraph {
          text-align: center;
          font-size: 1.25rem;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.9);
          width: 100%;
          max-width: 800px;
        }

        .st_pricing_cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 1000px;
          margin: 2rem auto;
        }

        .st_custom_plan_wrapper {
          display: flex;
          justify-content: center;
          margin: 0 auto 4rem;
          max-width: 1200px;
          width: 100%;
        }

        .st_team_plan_wrapper {
          display: flex;
          justify-content: center;
          margin: 3rem auto 4rem;
          max-width: 1000px;
          width: 100%;
        }

        .st_pricing_card {
          position: relative;
          padding: 1.75rem 1.5rem;
          background: #f8f8f8;
          border: 2px solid #e5e5e5;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          min-height: 480px;
        }

        .st_custom_card {
          max-width: 420px;
          width: 100%;
        }

        .st_team_card {
          width: 100%;
          min-height: auto;
          padding: 2rem;
        }

        .st_team_card_content {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .st_team_info {
          text-align: left;
        }

        .st_team_features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .st_team_buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .st_team_buttons button {
          margin: 0;
        }

        /* Force purple text color for Schedule a Demo button */
        .purple-outline-button {
          background: transparent !important;
          border: 2px solid #764ba2 !important;
          color: #764ba2 !important;
        }

        /* Target the anchor tag and all nested elements more specifically */
        a.purple-outline-button,
        a.purple-outline-button:link,
        a.purple-outline-button:visited,
        .purple-outline-button[href] {
          color: #764ba2 !important;
        }

        .purple-outline-button *,
        .purple-outline-button span {
          color: inherit !important;
        }

        .purple-outline-button:hover {
          background: #764ba2 !important;
        }

        /* Override the button module's .wrapper[href] color on hover */
        a.purple-outline-button:hover,
        .purple-outline-button[href]:hover,
        .purple-outline-button:hover[href] {
          color: white !important;
        }

        .purple-outline-button:hover *,
        .purple-outline-button:hover span {
          color: white !important;
        }

        /* Disable highlighting and scaling for recommended card */
        .st_pricing_card.recommended {
          border-color: #e5e5e5;
          transform: none;
          box-shadow: none;
        }

        .st_recommended_badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-color, #0066ff);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .st_plan_name {
          font-size: 2rem;
          margin-bottom: 0.35rem;
          text-align: center;
          color: #1a1a1a;
          font-weight: 400;
        }

        .st_plan_price {
          margin-bottom: 1rem;
          text-align: center;
        }

        .st_price_amount {
          font-size: 1.75rem;
          font-weight: bold;
          color: #1a1a1a;
        }

        .st_price_period {
          display: block;
          font-size: 0.875rem;
          color: #4a4a4a;
          margin-top: -0.5rem;
        }

        .st_price_savings {
          font-size: 0.875rem;
          color: #10b981;
        }

        .st_plan_description {
          color: #4a4a4a;
          margin-bottom: 1.5rem;
          text-align: center;
          min-height: 48px;
          font-size: 0.95rem;
        }

        .st_pricing_card button {
          width: 100%;
          margin: 0 auto 1rem auto;
          display: block;
        }

        .st_pricing_card a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .st_plan_features {
          list-style: none;
          padding: 0;
          margin: 0;
          padding-top: 1rem;
          flex-grow: 1;
        }

        .st_plan_features li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #2a2a2a;
        }

        .st_plan_features li.no-check {
          padding-left: 0;
          font-style: italic;
          color: #4a4a4a;
        }

        .st_check_icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 0.125rem;
          width: 16px;
          height: 16px;
        }

        .st_faq_section {
          margin: 5rem 0;
        }

        .st_faq_section h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 3rem;
          color: #fff;
          font-family: "Kanit";
          font-weight: normal;
          text-transform: none;
        }

        .st_faq_grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .st_faq_item {
          padding: 1.5rem;
          background: #f8f8f8;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
        }

        .st_faq_question {
          font-size: 1.125rem;
          margin-bottom: 1rem;
          color: #1a1a1a;
          font-weight: 600;
        }

        .st_faq_answer {
          color: #3a3a3a;
          line-height: 1.6;
        }

        .st_cta_section {
          text-align: center;
          padding: 4rem 0;
          margin: 5rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          color: white;
        }

        .st_cta_heading {
          font-size: 3rem !important;
          margin-bottom: 1rem;
          color: #fff;
          font-family: "Kanit";
          font-weight: normal;
          text-transform: none;
        }

        .st_cta_section p {
          font-size: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .st_cta_buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 992px) {
          .st_pricing_page {
            padding: 2rem 1rem;
          }

          .st_pricing_page h1 {
            font-size: 2.5rem;
          }

          .st_pricing_cards {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 2rem auto;
          }

          .st_custom_plan_wrapper {
            padding: 0 1rem;
          }

          .st_custom_card {
            max-width: 500px;
          }

          .st_team_card_content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .st_team_info {
            text-align: center;
          }

          .st_team_buttons {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .st_pricing_card.recommended {
            transform: none;
          }

          .st_pricing_card {
            min-height: auto;
          }

          .st_faq_grid {
            grid-template-columns: 1fr;
          }

          .st_cta_buttons {
            flex-direction: column;
            align-items: center;
          }
        }

      `}</style>
    </>
  );
}