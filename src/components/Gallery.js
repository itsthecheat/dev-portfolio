import React from "react"

import Masonry from "react-masonry-component"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import styles from "./Gallery.module.css"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsYaml {
        edges {
          node {
            id
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

<Masonry className={styles.galleryWrapper}>
    {data.allProjectsYaml.edges.map( element => (
      <div key={element.node.id} >
        <Img         fluid={element.node.thumbnail.childImageSharp.fluid} />
      </div>
      ))}

</Masonry>
  )
}

export default Gallery
