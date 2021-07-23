import React from "react"
import * as styles from "./portfolio-pages.module.css"
import { graphql } from "gatsby"
import Section from "../components/Section"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaGithub,FaLink } from "react-icons/fa"

const PortfolioPages = ({data}) => {
  const project = data.projectsYaml
  return (
    <Section>
      <h3 className={styles.highlight}>{project.title}
          <span>
            <a href={project.links.web}><FaLink aria-label="link" id={styles.icon}/></a>
            <a href={project.links.github}><FaGithub aria-label="github" id={styles.icon}/></a>
          </span>
      </h3>
        <p>{project.description}</p>
        <h3 className={styles.highlight}>Techstack</h3>
        <ul className={styles.techstack}>
        {project.techstack.map(tech =>
          <li>{tech}</li>)}
        </ul>
        {project.img.map(image =>
            <p><GatsbyImage image={image.childImageSharp.gatsbyImageData} className={styles.image} /></p>
        )}
    </Section>
  );
}

export const query = graphql`query ($slug: String!) {
  projectsYaml(slug: {eq: $slug}) {
    title
    techstack
    description
    links {
      github
      web
    }
    img {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
}
`
export default PortfolioPages