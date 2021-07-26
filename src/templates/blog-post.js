import React from 'react'
import { graphql } from 'gatsby'
import Section from '../components/Section'


const BlogPostPages = ({data}) => {
    const post = data.markdownRemark
    
    return (
        <Section>
            <h1>{post.frontmatter.title}</h1>
            <p>hello blog</p>
        </Section>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default BlogPostPages