import React from "react"

import { graphql } from "gatsby"
import {Row, Col, Container} from "react-bootstrap"
import Img from "gatsby-image"

export default ({data}) => {
  const project = data.projectsYaml
  return (
  <Container>

    <Row>
      <Col lg={8} className="text-paragraph">
      <h1>{project.title}</h1>
        <p>{project.description}</p>
        <Img fluid = {project.img.childImageSharp.fluid } />
      </Col>

    </Row>
  </Container>
  )

}

export const query = graphql`
  query($slug: String!) {
    projectsYaml(slug: { eq: $slug } ) {
      title
      description
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
