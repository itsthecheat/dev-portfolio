import React from "react"

import Masonry from "react-masonry-component"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
     allGalleryYaml {
       edges {
         node {
           img {
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
  console.log("================")
  console.log(data.allGalleryYaml.edges)
  console.log("================")
  return (
    <div>{data.allGalleryYaml.edges.map(node =>
        <p><Img fluid = {node.childImageSharp.fluid} /></p>
    )}</div>
  )
}

export default Gallery
