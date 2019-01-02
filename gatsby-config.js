module.exports = {
    siteMetadata: {
        title: `Test thingy`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-styled-components`
    ]
};
