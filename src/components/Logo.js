import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo_slash" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
  )
}

export default Logo
