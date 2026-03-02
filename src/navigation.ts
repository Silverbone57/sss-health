import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      href: '/#features',
    },
    {
      text: 'About Us',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Get a Quote', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Individual Health Plans', href: '/#features' },
        { text: 'Family Health Coverage', href: '/#features' },
        { text: 'Private PPO Networks', href: '/#features' },
      ],
    },
    {
      title: 'Agency',
      links: [
        { text: 'About SSS Health Solutions', href: '/about' },
        { text: 'Contact Us', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    <strong>SSS Health Solutions LLC</strong><br />
    National Producer Number (NPN): 21430983<br />
    Licensed for Life & Health in FL, SC, VA, AR, MI, OH, TX, TN, MS, MD, KS, and IA.<br />
    <span class="text-sm text-gray-500 dark:text-gray-400">Not affiliated with the U.S. government or the federal Medicare program.</span>
  `,
};
