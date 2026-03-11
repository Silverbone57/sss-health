import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get a Quote', href: '/contact', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms and Conditions', href: '/terms' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'SSS Health Solutions LLC', href: '/' },
  ],
  socialLinks: [],
  footNote: `Proudly providing health coverage in: FL, TX, MD, MO, LA, NC, VA, TN, GA, MI, OH, KY. · All rights reserved.`,
};
