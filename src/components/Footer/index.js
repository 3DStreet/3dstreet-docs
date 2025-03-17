import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Footer() {
  const {
    siteConfig: {
      themeConfig: {
        footer: { links: footerLinks },
      },
    },
  } = useDocusaurusContext();

  return (
    <footer className="st_footer">
      <div className="st_footer_links">
        {footerLinks.map(({ title, items }, idx) => (
          <div key={idx} className="st_footer_col">
            <p>{title}</p>
            <ul>
              {items.map(({ label, to, href }, idx) => (
                <li key={idx}>
                  <a href={to ?? href} target="_blank">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="st_footer_copyright">
        <span />
        ©{new Date().getFullYear()} 3DStreet LLC. 3DStreet is a registered trademark of 3DStreet LLC.
      </p>
    </footer>
  );
}
