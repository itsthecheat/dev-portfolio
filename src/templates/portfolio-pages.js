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
      <h3 className={styles.highlight}>{project.title}
          <span>
            <a href={project.links.web}><FaLink  id={styles.icon}/></a>
            <a href={project.links.github}><FaGithub  id={styles.icon}/></a>
          </span>
      </h3>
        <p>{project.description}</p>
        <h3 className={styles.highlight}>Techstack</h3>
        <ul className={styles.techstack}>
        {project.techstack.map(tech =>
          <li>{tech}</li>)}
        </ul>
        {project.img.map(image =>
            <p><Img className={styles.image} fluid = {image.childImageSharp.fluid} /></p>
        )}
    </Section>

  )
}


export const query = graphql`
  query($slug: String!) {
    projectsYaml(slug: { eq: $slug } ) {
      title
      techstack
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
