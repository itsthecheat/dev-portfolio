import React from 'react'
import { graphql } from 'gatsby'
import Section from '../components/Section'


const BlogPostPages = ({data}) => {
    console.log (data)
    
    return (
        <Section>

        </Section>
    )
}
export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
export default BlogPostPages