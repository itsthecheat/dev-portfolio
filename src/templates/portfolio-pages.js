import React from "react"

import { graphql } from "gatsby"
import {Row, Col, Container} from "react-bootstrap"

export default ({data}) => {
  const project = data.projectsYaml
  return (
  <Container>

    <Row>
      <Col lg={8} className="text-paragraph">
      <h1>{project.title}</h1>
        {project.description}
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
    }
  }
`
