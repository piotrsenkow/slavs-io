module.exports = {
  siteMetadata: {
    title: `Squatting Slavs of Solana`,
    description: `Squatting Slavs of Solana is an NFT collection on the Solana Blockchain in the form of 2,500, unique, randomly-generated, Squatting Slavs originating from 15 Slavic countries.`,
    author: `@slavicnfts`,
    siteUrl: `https://slavs.io`,
    keywords: `slav squat, squatting slavs, slavic, solana, nft, culture, meme, wojak, squat, slav`,
    image: `src/images/icon.png`,
  },
  flags: {
    THE_FLAG: false
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-212212122-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.slavs.io',
        sitemap: 'https://www.slavs.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-212212122-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
      resolve: "gatsby-plugin-react-svg",
      options: {
      rule: {
        include: /assets/ // See below to configure properly
      }
    }
    }
  ],
  
}
