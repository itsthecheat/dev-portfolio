import React from "react"

import Masonry from "react-masonry-component"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./Gallery.module.css"
import { Col } from "react-bootstrap"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsYaml {
        edges {
          node {
            title
            id
            slug
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (

<Masonry className="text-paragraph">
    {data.allProjectsYaml.edges.map( ({node: image}) => (
      <Col lg={6} md={4} sm={12} key={image.id} className={styles.imageItem}>
          <Link to={image.slug}>
          <Img className={styles.shadow}         fluid={image.thumbnail.childImageSharp.fluid} />
          </Link>
      </Col>
      ))}
</Masonry>

  )
}

export default Gallery
