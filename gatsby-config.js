module.exports = {
    siteMetadata: {
        title: `test`
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
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`
    ]
};
