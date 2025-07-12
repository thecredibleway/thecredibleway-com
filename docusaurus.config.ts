import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// https://docusaurus.io/docs/api/themes/configuration

const config: Config = {
  title: 'The Credible Way',
  tagline: 'Truth That Transforms. Life That Lasts.',
  favicon: 'img/favicon.ico',
  url: 'https://thecredibleway.com',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    // this plugin is needed because TimelineJs3 compiles with less
    [
      'docusaurus-plugin-less',
      {
        // outputDir: 'css', 
        // globalLessFile: './src/global.less'
      },
    ],
    [
      // Google Analytics adds a tracking code (gtag) that is used for tracking user interactions (page views, events, etc)
      // and sending data directly to Google Analytics Google Ads, and Google Marketing Platform.
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-S6BLTN7B4M",
        anonymizeIP: true,
      },
    ],
    [
      // Google Tag Manager (GTM) is a tag management system (TMS) that allows you to easily add and update tracking code
      // and other snippets on your website without having to modify the code directly. 
      // GTM can manage a wide range of tags including analytics scripts, marketing pixels, and other third-party services.
      // Inside GTM, you can configure various tags, triggers, and variables that can be used for different purposes, like setting up Google Analytics, Facebook pixels, or other third-party marketing tools.
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-KZ6WD8F9",
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: "/",
        hashed: true,
        indexBlog: false,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    metadata: [{name: 'twitter:card', content: 'summary'}],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'The Credible Way',
      logo: {
        alt: 'The Credible Way',
        src: 'img/logo.png',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'jesusSidebar',
          position: 'left',
          label: 'Jesus',
        },
        {
          type: 'docSidebar',
          sidebarId: 'bibleSidebar',
          position: 'left',
          label: 'Bible',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'faqSidebar',
        //   position: 'left',
        //   label: 'FAQ',
        // },
      ],
    },
    sidebarCollapsed: false,

    docs: {
       sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Jesus Christ",
          items: [
            {
              label: "Why did Jesus Christ come?",
              to: "/docs/jesus/crediblilty/the-crucifixion#why-did-jesus-die-at-the-cross",
            },
            {
              label: "Was the resurrection real?",
              to: "/docs/jesus/crediblilty/is-jesus-alive",
            },
          ],
        },
        {
          title: "The Bible",
          items: [
            {
              label: "Isn't it a relic?",
              to: "docs/bible/credibility/prophecies-fulfilled",
            },
            {
              label: "How is it applicable today?",
              to: "docs/bible/why-the-bible-still-matters",
            },
          ],
        },
        {
          title: "So how does this affect me",
          items: [
            {
              label: "Do I have purpose?",
              to: "docs/jesus/because-he-lives/i-can-face-tomorrow",
            },
            {
              label: "Can I talk to God directly?",
              to: "docs/jesus/because-he-lives/new-identity-in-christ",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Terms of Service",
              to: "docs/terms-of-service",
            },
            {
              label: "Privacy",
              to: "docs/privacy-policy",
            },
            {
              label: "Cookies",
              to: "docs/cookie-policy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Credible Way. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
