// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '3DStreet',
  tagline: 'Safer street visualization tools',
  url: 'https://3dstreet.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '3dstreet', // Usually your GitHub org/user name.
  projectName: '3dstreet-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/3dstreet/3dstreet-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: '3DStreet Logo',
          src: 'img/logo-black.svg',
          srcDark: "img/logo.svg"
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: '/#scenes',
            label: 'Gallery',
            position: 'left',
          },
          {
            href: 'https://3dstreet.app',
            label: 'Launch App',
            position: 'left',
          },
          {
            href: 'https://github.com/3dstreet/3dstreet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Overview',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/VN242sx9qu',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/3dstreetapp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/3dstreet/3dstreet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 3DStreet LLC. Docs built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
