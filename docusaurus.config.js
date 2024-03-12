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
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Documentation",
          },
          {
            href: "/#scenes",
            label: "Gallery",
            position: "left",
          },
          { to: "blog", label: "Blog", position: "left" }, // or position: 'right'
          {
            href: "https://3dstreet.app",
            label: "Launch 3DStreet App",
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
                label: "Contact Sales",
                href: "https://us6.list-manage.com/contact-form?u=01ce9902276fa6ad96be57ac6&form_id=3f024b297f2177befa87b5ca5e9d45cc",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/VN242sx9qu",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/3dstreetapp",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/3dstreet/",
              },
              {
                label: "Mastadon",
                href: "https://urbanists.social/@3dstreet",
              },
            ],
          },
          {
            title: "GitHub Repositories",
            items: [
              {
                label: "3DStreet Core (Parser and Viewer)",
                href: "https://github.com/3dstreet/3dstreet",
              },
              {
                label: "3DStreet Editor",
                href: "https://github.com/3dstreet/3dstreet-editor",
              },
              {
                label: "3DStreet Assets",
                href: "https://github.com/3dstreet/3dstreet-assets-source",
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
