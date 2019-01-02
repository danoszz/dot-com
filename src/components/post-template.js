import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
    return (
        <div>
            <h1>{data.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.html }} />
        </div>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
