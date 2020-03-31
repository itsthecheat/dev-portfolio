import React from 'react'

import Section from "../components/Section"
import Img from 'gatsby-image'

export default ({data}) => (

    <Section>

      <p>
        Hard-working professional with 3+ years of experience and a proven knowledge of web page content, web platform development, and programming. Aiming to leverage my skills to successfully fill a web developer role.
        <Img fluid={data.imageOne.childImageSharp.fluid} />

      </p>
    </Section>

)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "smd.png" }) {
      ...fluidImage
    }
  }
`;
