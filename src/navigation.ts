import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'Roll-Call-Hub',
          href: getPermalink('/homes/form'),
        },
        {
          text: 'Open-source',
          href: getPermalink('/homes/opensource'),
        },
        {
          text: 'OT Discussion',
          href: getPermalink('/homes/hub-offtopics'),
        },
        // {
        //   text: 'Mobile App',
        //   href: getPermalink('/homes/mobile-app'),
        // },
        // {
        //   text: 'Personal',
        //   href: getPermalink('/homes/personal'),
        // },
      ],
    },
    {
      text: 'Pages',
      links: [
        // {
        //   text: 'Features (Anchor Link)',
        //   href: getPermalink('/#features'),
        // },

          {
          text: 'Hackathon 2024',
          href: getPermalink('https://offtopics.in/Hackathon'),
        },

        {
          text: 'WhatsApp',
          href: getPermalink('https://offtopics.in/whatsapp'),
        },

        

        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    // {
    //   text: 'Coming Soon or Pre-Launch',
    //   href: getPermalink('/landing/pre-launch'),
    // },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    {
      text: 'More',
      links: [
        {
          text: 'Articles',
          href: getBlogPermalink(),
        },
        {
          text: 'Docs',
          href: getPermalink('docs', 'post'),
        },
        {
          text: 'License',
          href: getPermalink('/license'),
        },
         {
          text: 'Student-Hub Policy',
          href: getPermalink('/Student-Hub-Policy'),
        },
      ],
    },
    {
      text: '',
      href: '#',
    },
  ],
  actions: [{ text: 'Visit', href: 'https://github.com/awkwardpy', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Service',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Notice', href: '#' },
        { text: 'Finder', href: '#' },
        { text: 'Students', href: '#' },
        { text: 'Users stories', href: '#' },
        { text: 'Syllabus', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'IT Off-topics', href: '#' },
        { text: 'Open-source', href: '#' },
        { text: 'Inputs', href: '#' },
        { text: 'Off-topics Devs', href: '#' },
        { text: 'Blogs', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Blogs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Terms', href: '/terms' },
        { text: 'Release', href: '#' },
        { text: 'Updates', href: '#' },
        { text: 'Privacy', href: '/privacy' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.xom/awkwardpy_' },
  
  ],
};
