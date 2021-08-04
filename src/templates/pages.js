import React from 'react'
import { graphql } from 'gatsby'
import Section from '../components/Section'
import * as styles from './pages.module.css'

const Pages = ({data}) => {
  const content = data.allMarkdownRemark.edges[0].node

    return (
      
      <Section>
        <div className={styles.bio} dangerouslySetInnerHTML={{ __html: content.html }} ></div>
      </Section>
    )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`
export default Pages