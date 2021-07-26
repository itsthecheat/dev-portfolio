import React from 'react'
import { graphql } from 'gatsby'
import Section from '../components/Section'


const BlogPostPages = ({data}) => {
    const post = data.markdownRemark
    console.log(post)
    return (
        <Section>
            <h1>{post.frontmatter.title}</h1>
            <h4>{ post.frontmatter.date }</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Section>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
export default BlogPostPages