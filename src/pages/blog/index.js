import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

export default ({ data }) => (
    <Layout>
        <div>
            <h1>Posts</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <h3>
                        {node.frontmatter.title}{" "}
                        <span>{node.frontmatter.date}</span>
                    </h3>
                    <p>{node.excerpt}</p>
                    <Link to={node.fields.slug}>go to page</Link>
                </div>
            ))}
        </div>
    </Layout>
);

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MM YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
