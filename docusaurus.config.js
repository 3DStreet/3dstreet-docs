// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "3DStreet",
  staticDirectories: ["static", "blog"],
  tagline: "Safer street visualization tools",
  url: "https://3dstreet.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "3dstreet", // Usually your GitHub org/user name.
  projectName: "3dstreet-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  customFields: {
    mailchimpUrl: process.env.MAILCHIMP_URL,
  },
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // blog: {
        //   path: "blog",
        //   routeBasePath: "blog",
        // },
        blog: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/3dstreet/3dstreet-docs/tree/main/",
        },
        theme: {
          customCss: [
            require.resolve("./static/fonts/fonts.css"),
            require.resolve("./src/css/styles.css"),
          ],
        },
        gtag: {
          trackingID: 'G-T65XPDLZ3F',
        },
      }),
    ],
  ],
  plugins: [
    // Use custom blog plugin
    [
      "./src/plugins/blog-plugin.js",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/docs/pricing",
            to: "/pricing",
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Home",
        logo: {
          alt: "3DStreet Logo",
          src: "img/logo-black.svg",
          srcDark: "img/logo.svg",
          width: 140,
        },
        items: [
          { to: "blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://3dstreet.app",
            label: "Launch App",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "3DStreet",
            items: [
              {
                label: "About 3DStreet",
                to: "/docs/category/about-3dstreet/",
              },
              {
                label: "Documentation",
                href: "/docs/",
              },
              {
                label: "Blog",
                href: "/blog/",
              },
              {
                label: "Pricing",
                href: "/pricing",
              },
              {
                label: "Contact Us",
                href: "/contact",
              },
            ],
          },
          {
            title: "Solutions",
            items: [
              {
                label: "Urban Planning",
                href: "/planning/",
              },
              {
                label: "Education",
                href: "/education/",
              },
              {
                label: "Transportation and Land Use Advocacy",
                href: "/advocacy/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/zNFMhTwKSd",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/3dstreetapp",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@3DStreetapp",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/3dstreet/",
              },
              {
                label: "GitHub",
                href: "https://github.com/3dstreet/3dstreet",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 3DStreet LLC. 3DStreet is a trademark of 3DStreet LLC.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
