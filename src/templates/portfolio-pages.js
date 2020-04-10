import React from "react"

import styles from "./portfolio-pages.module.css"
import { graphql } from "gatsby"
import Section from "../components/Section"
import Img from "gatsby-image"
import { FaGithub,FaLink } from "react-icons/fa"

export default ({data}) => {
  const project = data.projectsYaml
  return (

    <Section>
      <h3>{project.title}
          <span>
            <a href={project.links.web}><FaLink  id={styles.icon}/></a>
            <a href={project.links.github}><FaGithub  id={styles.icon}/></a>
          </span>
      </h3>
        <p>{project.description}</p>
        {project.img.map(image =>
            <p><Img fluid = {image.childImageSharp.fluid} /></p>
        )}
    </Section>

  )
}


export const query = graphql`
  query($slug: String!) {
    projectsYaml(slug: { eq: $slug } ) {
      title
      description
      links {
        github
        web
      }
      img {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
    }
  }
}
    }
  }
`
