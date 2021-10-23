import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"


const Logo = () => {
  const data = useStaticQuery(graphql`{
  file(name: {eq: "logo_slash_sm"}, extension: {eq: "png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
}
`)
  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="logo" />;
}

export default Logo
