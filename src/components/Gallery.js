import React from "react"
import Masonry from "react-masonry-component"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./Gallery.module.css"
import { Col } from "react-bootstrap"
import { IoMdOpen } from "react-icons/io"

const Gallery = () => {
  const data = useStaticQuery(graphql`{
  allProjectsYaml {
    edges {
      node {
        title
        id
        slug
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`)
  return (
  
      <Masonry>
        {data.allProjectsYaml.edges.map( ({node: image}) => (
          <Col lg={6} md={4} sm={12} key={image.id} className={styles.imageItem}>
            <h3 className={styles.projectHeading}>{image.title}</h3>
            <Link to={image.slug}>
            <div id={styles.image} className={styles.overlayContainer}>
                <GatsbyImage image={image.thumbnail.childImageSharp.gatsbyImageData} />
                <div className={styles.overlay} ><IoMdOpen/></div>
            </div>
            </Link>
          </Col>
          ))}
    </Masonry>
    
  );
}

export default Gallery
