import React, { useState } from 'react';
import { ExternalLinkIcon, CheckIcon } from '@radix-ui/react-icons';
import { Button } from '../components';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // 'monthly' | 'annual'

  const freePlan = {
    name: 'Free',
    price: 'Free',
    description: 'Perfect for personal projects and exploration',
    privacy: 'public',
    features: [
      'Store unlimited scenes',
      'Prototype street configurations',
      'Access hundreds of 3D models',
      'Import from Streetmix and StreetPlan',
      'Download JPEG snapshots (with watermark)',
      <><img src="/img/token-geo.png" alt="Geo Token" style={{width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle', marginRight: '4px'}} /><strong>3x</strong> Geospatial tokens</>,
      <><img src="/img/token-image.png" alt="AI Token" style={{width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle', marginRight: '4px'}} /><strong>5x</strong> AI generation tokens</>,
      'Community support via Discord'
    ],
    buttonLabel: 'Start Now',
    buttonHref: 'https://3dstreet.app',
    buttonVariant: 'blue'
  };

  const proPlan = {
    name: 'Pro',
    description: 'For individual professionals creating street designs',
    privacy: 'public',
    monthly: {
      price: '$14',
      subtitle: 'per month',
      tokens: '140',
      tokenLabel: 'tokens/mo',
    },
    annual: {
      price: '$11.67',
      subtitle: 'per month',
      totalPrice: '$140/yr',
      tokens: '1,400',
      tokenLabel: 'tokens upfront',
      topUp: '+140',
      topUpLabel: 'tokens/mo top-up',
    },
    features: [
      'Everything in Free, plus:',
      'Snapshots without watermark',
      'Unlimited Geospatial 3D Maps',
      <><img src="/img/token-image.png" alt="AI Token" style={{width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle', marginRight: '4px'}} /><strong>{billingPeriod === 'monthly' ? '140' : '1,400'}</strong> AI generation tokens {billingPeriod === 'monthly' ? 'per month' : 'upfront'}</>,
      'Import custom 3D models',
      'AI image generation',
      'Export "AR Ready" glTF for Augmented Reality apps',
    ],
    buttonLabel: 'Activate Pro',
    buttonHref: billingPeriod === 'monthly' ? 'https://3dstreet.app/#payment-modal' : 'https://3dstreet.app/#payment-modal-annual',
    buttonVariant: 'blue'
  };

  const maxPlan = {
    name: 'Max',
    description: 'For power users who need more AI generation',
    privacy: 'public',
    monthly: {
      price: '$50',
      subtitle: 'per month',
      tokens: '500',
      tokenLabel: 'tokens/mo',
    },
    annual: {
      price: '$41.67',
      subtitle: 'per month',
      totalPrice: '$500/yr',
      tokens: '5,000',
      tokenLabel: 'tokens upfront',
      topUp: '+500',
      topUpLabel: 'tokens/mo top-up',
    },
    features: [
      'Everything in Pro, plus:',
      <><img src="/img/token-image.png" alt="AI Token" style={{width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle', marginRight: '4px'}} /><strong>{billingPeriod === 'monthly' ? '500' : '5,000'}</strong> AI generation tokens {billingPeriod === 'monthly' ? 'per month' : 'upfront'}</>,
      '3.5x more AI generation tokens vs Pro',
    ],
    buttonLabel: 'Activate Max',
    buttonHref: billingPeriod === 'monthly' ? 'https://3dstreet.app/#payment-modal' : 'https://3dstreet.app/#payment-modal-annual',
    buttonVariant: 'blue'
  };

  const orgPlans = [
    {
      name: 'Pro Team',
      price: '$5,000',
      subtitle: 'per year for up to 50 users',
      description: 'Perfect for organizations and universities',
      privacy: 'public',
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
    },
    {
      name: 'Pro Agency',
      price: 'Contact Us',
      subtitle: 'custom pricing',
      description: 'For government and organizations requiring private data',
      privacy: 'private',
      features: [
        'Everything in Pro Team, plus:',
        'Private scenes and assets (not publicly visible)',
        'Custom user limits',
        'Priority support',
        'Custom onboarding and training',
        'Dedicated account management'
      ],
      buttonLabel: 'Contact Sales',
      buttonHref: '/contact',
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

  const renderPaidCard = (plan) => {
    const billing = plan[billingPeriod];
    return (
      <div className="st_pricing_card">
        <h3 className="st_plan_name">{plan.name}</h3>
        <div className="st_plan_price">
          <span className="st_price_amount">{billing.price}</span>
          <span className="st_price_period">
            {billing.subtitle}
            {billingPeriod === 'annual' && (
              <span className="st_price_total"> ({billing.totalPrice})</span>
            )}
          </span>
        </div>
        <div className="st_token_badge">
          <img src="/img/token-image.png" alt="Token" style={{width: '16px', height: '16px'}} />
          <span className="st_token_amount">{billing.tokens}</span>
          <span className="st_token_label">{billing.tokenLabel}</span>
        </div>
        {billingPeriod === 'annual' && billing.topUp && (
          <div className="st_token_badge st_token_topup">
            <img src="/img/token-image.png" alt="Token" style={{width: '14px', height: '14px'}} />
            <span className="st_topup_amount">{billing.topUp}</span>
            <span className="st_token_label">{billing.topUpLabel}</span>
          </div>
        )}
        <p className="st_plan_description">{plan.description}</p>
        {plan.privacy && (
          <span
            className={`st_privacy_badge st_privacy_${plan.privacy}`}
            title={plan.privacy === 'public' ? 'All user generated scenes are public and remixable.' : 'Scenes and assets are private to your organization.'}
          >
            {plan.privacy.toUpperCase()}
          </span>
        )}
        <Button
          variant={plan.buttonVariant}
          label={plan.buttonLabel}
          href={plan.buttonHref}
          target={plan.buttonHref.startsWith('http') ? '_blank' : undefined}
        />
        <ul className="st_plan_features">
          {plan.features.map((feature, idx) => {
            const isString = typeof feature === 'string';
            const isEverythingIn = isString && feature.startsWith('Everything in');
            return (
              <li key={idx} className={isEverythingIn ? 'no-check' : ''}>
                {!isEverythingIn && <CheckIcon className="st_check_icon" />}
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

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

              {/* Billing Toggle */}
              <div className="st_billing_toggle">
                <button
                  className={`st_toggle_btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
                  onClick={() => setBillingPeriod('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`st_toggle_btn ${billingPeriod === 'annual' ? 'active' : ''}`}
                  onClick={() => setBillingPeriod('annual')}
                >
                  Annual
                  <span className="st_save_badge">Save 17%</span>
                </button>
              </div>

              {/* Pricing Cards */}
              <div className="st_pricing_cards">
                {/* Free Card */}
                <div className="st_pricing_card">
                  <h3 className="st_plan_name">{freePlan.name}</h3>
                  <div className="st_plan_price">
                    <span className="st_price_amount">{freePlan.price}</span>
                  </div>
                  <p className="st_plan_description">{freePlan.description}</p>
                  {freePlan.privacy && (
                    <span
                      className={`st_privacy_badge st_privacy_${freePlan.privacy}`}
                      title="All user generated scenes are public and remixable."
                    >
                      {freePlan.privacy.toUpperCase()}
                    </span>
                  )}
                  <Button
                    variant={freePlan.buttonVariant}
                    label={freePlan.buttonLabel}
                    href={freePlan.buttonHref}
                    target="_blank"
                  />
                  <ul className="st_plan_features">
                    {freePlan.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckIcon className="st_check_icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pro Card */}
                {renderPaidCard(proPlan)}

                {/* Max Card */}
                {renderPaidCard(maxPlan)}
              </div>

              {/* Organizations Section - Pro Team and Pro Agency */}
              <div className="st_org_section">
                <h2 className="st_org_heading">For Organizations</h2>
                <div className="st_org_cards">
                  {/* Pro Team Card */}
                  <div className="st_pricing_card st_org_card">
                    <h3 className="st_plan_name">{orgPlans[0].name}</h3>
                    <div className="st_plan_price">
                      <span className="st_price_amount">{orgPlans[0].price}</span>
                      <span className="st_price_period">{orgPlans[0].subtitle}</span>
                    </div>
                    <p className="st_plan_description">{orgPlans[0].description}</p>
                    {orgPlans[0].privacy && (
                      <span
                        className={`st_privacy_badge st_privacy_${orgPlans[0].privacy}`}
                        title={orgPlans[0].privacy === 'public' ? 'All user generated scenes are public and remixable.' : 'Scenes and assets are private to your organization.'}
                      >
                        {orgPlans[0].privacy.toUpperCase()}
                      </span>
                    )}
                    <Button
                      variant={orgPlans[0].buttonVariant}
                      label={orgPlans[0].buttonLabel}
                      href={orgPlans[0].buttonHref}
                      target={orgPlans[0].buttonHref.startsWith('http') ? '_blank' : undefined}
                    />
                    <ul className="st_plan_features">
                      {orgPlans[0].features.map((feature, idx) => {
                        const isString = typeof feature === 'string';
                        const isEverythingIn = isString && feature.startsWith('Everything in');
                        return (
                          <li key={idx} className={isEverythingIn ? 'no-check' : ''}>
                            {!isEverythingIn && <CheckIcon className="st_check_icon" />}
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="st_org_card_footer">
                      <Button
                        variant="transparent"
                        label="Schedule a Demo"
                        href="https://calendar.app.google/ohjYMBPuLjGupHov5"
                        target="_blank"
                        className="purple-outline-button"
                      />
                      <a
                        href="/blog/2025/10/24/introducing-pro-team-plan-for-organizations-and-universities"
                        className="st_team_learn_more"
                      >
                        Learn more about Pro Team →
                      </a>
                    </div>
                  </div>

                  {/* Pro Agency Card */}
                  <div className="st_pricing_card st_org_card st_agency_card">
                    <h3 className="st_plan_name">{orgPlans[1].name}</h3>
                    <div className="st_plan_price">
                      <span className="st_price_amount">{orgPlans[1].price}</span>
                      <span className="st_price_period">{orgPlans[1].subtitle}</span>
                    </div>
                    <p className="st_plan_description">{orgPlans[1].description}</p>
                    {orgPlans[1].privacy && (
                      <span
                        className={`st_privacy_badge st_privacy_${orgPlans[1].privacy}`}
                        title={orgPlans[1].privacy === 'public' ? 'All user generated scenes are public and remixable.' : 'Scenes and assets are private to your organization.'}
                      >
                        {orgPlans[1].privacy.toUpperCase()}
                      </span>
                    )}
                    <Button
                      variant={orgPlans[1].buttonVariant}
                      label={orgPlans[1].buttonLabel}
                      href={orgPlans[1].buttonHref}
                    />
                    <ul className="st_plan_features">
                      {orgPlans[1].features.map((feature, idx) => {
                        const isString = typeof feature === 'string';
                        const isEverythingIn = isString && feature.startsWith('Everything in');
                        return (
                          <li key={idx} className={isEverythingIn ? 'no-check' : ''}>
                            {!isEverythingIn && <CheckIcon className="st_check_icon" />}
                            <span>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="st_org_card_footer">
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
              <section id="faq" className="st_faq_section">
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
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          width: 100%;
          max-width: 800px;
        }

        /* Billing Toggle */
        .st_billing_toggle {
          display: inline-flex;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 4px;
          margin-bottom: 2.5rem;
        }

        .st_toggle_btn {
          padding: 8px 24px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.95rem;
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .st_toggle_btn.active {
          background: #fff;
          color: #1a1a1a;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .st_save_badge {
          font-size: 0.75rem;
          color: #0eaf00;
          font-weight: 600;
        }

        .st_toggle_btn.active .st_save_badge {
          color: #0eaf00;
        }

        .st_pricing_cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto 2rem;
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

        .st_plan_name {
          font-size: 2rem;
          margin-bottom: 0.35rem;
          text-align: center;
          color: #1a1a1a;
          font-weight: 400;
        }

        /* Token Badge */
        .st_token_badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: #1a1a1a;
          border-radius: 6px;
          margin-bottom: 8px;
        }

        .st_token_amount {
          font-weight: 600;
          color: #fff;
          font-size: 0.95rem;
        }

        .st_token_label {
          color: #9ca3af;
          font-size: 0.8rem;
        }

        .st_token_topup {
          padding: 6px 12px;
        }

        .st_topup_amount {
          font-weight: 600;
          color: #0eaf00;
          font-size: 0.85rem;
        }

        /* Privacy Badge Styles */
        .st_privacy_badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          margin: 0 auto 0.75rem;
          text-transform: uppercase;
          cursor: help;
        }

        .st_privacy_public {
          color: #6b7280;
          border: 1.5px solid #d1d5db;
          background: transparent;
        }

        .st_privacy_private {
          color: #059669;
          border: 1.5px solid #10b981;
          background: rgba(16, 185, 129, 0.1);
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

        .st_price_total {
          color: #6b7280;
          font-size: 0.8rem;
        }

        .st_plan_description {
          color: #4a4a4a;
          margin-bottom: 0.5rem;
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

        /* Organizations Section */
        .st_org_section {
          width: 100%;
          max-width: 1000px;
          margin: 3rem auto 4rem;
        }

        .st_org_heading {
          text-align: center;
          font-size: 2rem;
          color: #fff;
          font-family: "Kanit";
          font-weight: normal;
          margin-bottom: 2rem;
        }

        .st_org_cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .st_org_card {
          min-height: auto;
          display: flex;
          flex-direction: column;
        }

        .st_org_card .st_plan_features {
          flex-grow: 1;
        }

        .st_org_card_footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e5e5;
        }

        .st_agency_card {
          border-color: #10b981;
        }

        .st_team_learn_more {
          text-align: center;
          color: #764ba2;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          margin-top: 0.5rem;
          transition: color 0.2s ease;
        }

        .st_team_learn_more:hover {
          color: #5a3780;
          text-decoration: underline;
        }

        /* Force purple text color for Schedule a Demo button */
        .purple-outline-button {
          background: transparent !important;
          border: 2px solid #764ba2 !important;
          color: #764ba2 !important;
        }

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

        a.purple-outline-button:hover,
        .purple-outline-button[href]:hover,
        .purple-outline-button:hover[href] {
          color: white !important;
        }

        .purple-outline-button:hover *,
        .purple-outline-button:hover span {
          color: white !important;
        }

        /* FAQ Section */
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

        /* CTA Section */
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
        }

        .st_cta_buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1.5rem;
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
            margin: 0 auto 2rem;
          }

          .st_org_cards {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }

          .st_org_section {
            padding: 0 1rem;
          }
        }

        @media (max-width: 768px) {
          .st_pricing_card {
            min-height: auto;
          }

          .st_faq_grid {
            grid-template-columns: 1fr;
          }

          .st_cta_buttons {
            flex-direction: column;
            align-items: center;
            padding: 0 1rem;
            width: 100%;
          }

          .st_cta_section .st_cta_buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
          }

          .st_cta_buttons a {
            display: flex !important;
            justify-content: center !important;
            margin: 0 auto !important;
            width: auto !important;
          }
        }

      `}</style>
    </>
  );
}
