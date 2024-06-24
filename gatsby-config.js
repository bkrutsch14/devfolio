module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://krutschb.netlify.app/`,
    // Your Name
    name: 'Brooke Krutsch',
    // Main Site Title
    title: `Brooke Krutsch | Creative Director`,
    // Description that goes under your name in main bio
    description: `Creative Director in Long Beach, CA`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: ``,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/krutschbrooke/`,
    // Content of the About Me section
    about: `Creative problem-solver with a passion for interactive design and a strong background in branding and front-end web development. Thrives on being challenged and challenging team members on a daily basis. Experience leading teams on design and development for cross device and cross-platform environments.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Bull Oak Capital',
        description:
          'Custom WordPress theme design & development | Design and development of an email template customized to be compatible with dark-mode settings as well as cross-device programs and sizes',
        link: 'https://bulloakcapital.com/',
      },
      {
        name: 'Goldune',
        description:
          'Improve customer experience through Shopify theme development and app integration',
        link: 'https://www.goldune.com/',
      },
      {
        name: 'Dunskey Estate',
        description:
          'Create automated lead funnels and integrate booking system within custom WordPress theme',
        link: 'https://www.dunskey.com/',
      },
      {
        name: 'Bank of Southern California',
        description:
          'Increase annual website traffic over 200 times from previous year through the development of a custom WordPress theme, optimized for ADA compliance and Search Engine performance.',
        link: 'https://www.banksocal.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'CACHE',
        description: 'Founder & Creative Director, February 2018 - Present',
        link: 'https://cacheinteractive.com/',
      },
      {
        name: 'SD Creative Media',
        description: 'Director of Web Development,  November 2014 - January 2018',
        link: '',
      },
      {
        name: 'Blik',
        description: 'Multimedia Designer, February 2014 - October 2014',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Design',
        description:
          'Photoshop, Illustrator, InDesign, XD, Figma, Sketch, AfterEffects, MailChimp, ConvertKit',
      },
      {
        name: 'Development',
        description:
          'HTML, CSS, PHP, Javascript, Liquid, MySQL, cPanel, Wordpress, Shopify, Bootstrap, GIT, MAMP',
      },
      {
        name: 'Project Management',
        description: 'InfusionSoft, Monday.com, Asana, Trello, Freshbooks',
      },
      {
        name: 'Industry',
        description:
          'Product Design, Interaction Design, Design Systems, UI Design, User Experience, Wireframing, Prototyping, Mobile-first Development',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-49961389-1`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
