module.exports = {
  siteMetadata: {
    title: 'OnDemand Linux HandsOn Training To Become Giant Linux Freelancer From Home',
    description: 'We Will Mentor You To Get Your Black Belt In Freelancing Earning. We Are On A Mission To Empower Linux Freelancing Training Around The Globe To Earn Money From Home.',
    author: '@AnythingLinux',
    siteUrl: 'http://www.schooloffreelancing.com/',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/sale/*'] },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#300A24',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
