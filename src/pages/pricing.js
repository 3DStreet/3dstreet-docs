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
        'Store unlimited custom street scenes on 3DStreet Cloud',
        'Prototype street configurations',
        'Access hundreds of 3D models',
        'Import from Streetmix.net and other sources',
        'Render JPEG and PNG image outputs'
      ],
      buttonLabel: 'Get Started',
      buttonHref: 'https://3dstreet.app',
      buttonVariant: 'transparent'
    },
    {
      name: 'Pro',
      price: '$10',
      subtitle: 'per month',
      description: 'For professionals creating street designs',
      features: [
        'Everything in Free, plus:',
        'Community support via Discord',
        'Geospatial 3D Maps',
        'Reference custom SVG and glTF files',
        'Export "AR Ready" glTF for Augmented Reality apps',
        'Multiple street section support'
      ],
      buttonLabel: 'Start Pro Trial',
      buttonHref: 'https://3dstreet.app',
      buttonVariant: 'blue',
      recommended: true
    },
    {
      name: 'Pro Annual',
      price: '$84',
      subtitle: 'per year',
      savings: '(save 30%)',
      description: 'Best value for professionals',
      features: [
        'Everything in Pro, plus:',
        'Save 30% with annual billing',
        'Priority community support',
        'Early access to new features',
        'Annual billing convenience'
      ],
      buttonLabel: 'Get Pro Annual',
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
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. All payments are processed securely through our payment provider.'
    },
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged a prorated amount for the remainder of your billing period. When downgrading, credits will be applied to future billing.'
    },
    {
      question: 'Do you offer educational discounts?',
      answer: 'Yes, we offer special pricing for educational institutions and students. Please contact us for more information about our education program.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your scenes and data remain accessible in read-only mode if you downgrade to the Free plan. You can export your data at any time before cancellation.'
    },
    {
      question: 'Is there a limit on Premium 3D Map Tiles?',
      answer: 'Paid plans include up to 10,000 Premium 3D Map Tiles sessions per month. Most users will not hit these limits unless projects are featured in widespread social media.'
    },
    {
      question: 'Can I use 3DStreet for commercial projects?',
      answer: '3DStreet is free for personal and non-commercial use. If you\'re using 3DStreet for professional work, please support us with a Pro plan or higher.'
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

        {/* HEADER SECTION */}
        <header className="st_header_container"></header>
        
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
                    {plan.recommended && (
                      <div className="st_recommended_badge">Most Popular</div>
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
                      trailingIcon={plan.buttonHref.startsWith('http') ? <ExternalLinkIcon /> : null}
                    />
                    <ul className="st_plan_features">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <CheckIcon className="st_check_icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Pro Team Plan Card */}
              <div className="st_custom_plan_wrapper">
                <div className="st_pricing_card st_custom_card">
                  <h3 className="st_plan_name">{plans[3].name}</h3>
                  <div className="st_plan_price">
                    <span className="st_price_amount">{plans[3].price}</span>
                    <span className="st_price_period">{plans[3].subtitle}</span>
                  </div>
                  <p className="st_plan_description">{plans[3].description}</p>
                  <Button
                    variant={plans[3].buttonVariant}
                    label={plans[3].buttonLabel}
                    href={plans[3].buttonHref}
                    target={plans[3].buttonHref.startsWith('http') ? '_blank' : undefined}
                    trailingIcon={plans[3].buttonHref.startsWith('http') ? <ExternalLinkIcon /> : null}
                  />
                  <ul className="st_plan_features">
                    {plans[3].features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckIcon className="st_check_icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Terms Section */}
              <section className="st_terms_section">
                <h2 style={{color: '#1a1a1a'}}>Terms of Use</h2>
                <ul className="st_terms_list">
                  <li>
                    The source code for 3DStreet is made available on the{' '}
                    <a href="https://github.com/3DStreet/3dstreet/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                      AGPL 3.0 license which also limits our liability
                    </a>
                  </li>
                  <li>
                    Original 3D models and other assets from 3DStreet are made available on a{' '}
                    <a href="https://github.com/3DStreet/3dstreet-assets-source/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                      Creative Commons Attribution Non-Commercial Share Alike license
                    </a>
                  </li>
                  <li>
                    Some 3DStreet models are provided by third-parties with{' '}
                    <a href="https://github.com/3DStreet/3dstreet#list-of-supported-segment-types" target="_blank" rel="noopener noreferrer">
                      varying licenses
                    </a>
                  </li>
                </ul>
              </section>

              {/* FAQ Section */}
              <section className="st_faq_section">
                <h2 style={{color: '#1a1a1a'}}>Frequently Asked Questions</h2>
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
                <h2>Ready to transform your street designs?</h2>
                <p>Start with our free plan and upgrade anytime.</p>
                <div className="st_cta_buttons">
                  <Button
                    variant="blue"
                    label="Start Free"
                    trailingIcon={<ExternalLinkIcon />}
                    href="https://3dstreet.app"
                    target="_blank"
                  />
                  <Button
                    variant="transparent"
                    label="Contact Sales"
                    href="/contact"
                  />
                </div>
                <p style={{marginTop: '2rem', fontSize: '0.95rem', opacity: 0.9}}>
                  Need more than 50 users or custom features? <a href="/contact" style={{color: 'white', textDecoration: 'underline'}}>Contact us for enterprise solutions</a>
                </p>
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
          padding: 3rem 1rem;
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
          gap: 2rem;
          width: 100%;
          max-width: 1100px;
          margin: 2rem auto;
        }

        .st_custom_plan_wrapper {
          display: flex;
          justify-content: center;
          margin: 0 auto 4rem;
          max-width: 1200px;
          width: 100%;
        }

        .st_pricing_card {
          position: relative;
          padding: 2.5rem 2rem;
          background: white;
          border: 2px solid #e5e5e5;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          min-height: 600px;
        }

        .st_custom_card {
          max-width: 460px;
          width: 100%;
        }

        .st_pricing_card.recommended {
          border-color: var(--primary-color, #0066ff);
          transform: scale(1.05);
          transform-origin: center center;
          box-shadow: 0 10px 40px rgba(0, 102, 255, 0.15);
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
          font-size: 2.5rem;
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
          font-size: 2rem;
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
          margin-bottom: 1rem;
        }

        .st_plan_features {
          list-style: none;
          padding: 0;
          margin: 0;
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

        .st_check_icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 0.125rem;
          width: 16px;
          height: 16px;
        }

        .st_terms_section {
          margin: 5rem 0;
          padding: 3rem;
          background: #f7f7f7;
          border-radius: 12px;
        }

        .st_terms_section h2 {
          margin-bottom: 1.5rem;
        }

        .st_terms_list {
          list-style-position: inside;
          color: #3a3a3a;
        }

        .st_terms_list li {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .st_terms_list a {
          color: var(--primary-color, #0066ff);
          text-decoration: underline;
        }

        .st_faq_section {
          margin: 5rem 0;
        }

        .st_faq_section h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2rem;
        }

        .st_faq_grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .st_faq_item {
          padding: 1.5rem;
          background: white;
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

        .st_cta_section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .st_cta_section p {
          font-size: 1.125rem;
          margin-bottom: 2rem;
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