import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CriticalFlaw',
  tagline: 'The Website',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://criticalflaw.ca',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CriticalFlaw', // Usually your GitHub org/user name.
  projectName: 'criticalflaw.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        pages: false,
        docs: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'CriticalFlaw',
      logo: {
          src: 'img/favicon.ico',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'TF2 Projects',
          position: 'left',
          items: [
            {
              to: 'https://criticalflaw.ca/TF2HUD.Editor/',
              label: 'TF2 HUD Editor'
            },
            {
              href: 'https://comfig.app/huds/page/flawhud/',
              label: 'FlawHUD'
            },
            {
              href: 'https://comfig.app/huds/page/rayshud/',
              label: 'rayshud'
            },
            {
              href: 'https://comfig.app/huds/page/essentialshud/',
              label: 'EssentialsHUD'
            },
            {
              href: 'https://comfig.app/huds/page/hud-fixes/',
              label: 'Community HUD Fixes'
            }
          ],
        },
        {
          type: 'dropdown',
          label: 'Misc.',
          position: 'left',
          items: [
            {
              to: 'https://criticalflaw.ca/FlawBOT/',
              label: 'FlawBOT'
            },
          ],
        },
        {href: 'https://twitter.com/CriticalFlaw_', html: '<img src="/img/x-twitter.svg" class="nav-icon">', position: 'right'},
        {href: 'https://github.com/CriticalFlaw?tab=repositories', html: '<img src="/img/github.svg" class="nav-icon">', position: 'right'},
        {href: 'https://discord.gg/hTdtK9vBhE', html: '<img src="/img/discord.svg" class="nav-icon">', position: 'right'},
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;