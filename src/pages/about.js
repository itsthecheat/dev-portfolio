import React from "react";
import { graphql } from "gatsby"
import Section from "../components/Section"
import styles from "./about.module.css"

export default ({data}) => {
  console.log(data.allMarkdownRemark)
  const content = data.allMarkdownRemark.edges[0].node

    return (
      <Section >
        <div className={styles.bio} dangerouslySetInnerHTML={{__html: content.html}} ></div>
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
