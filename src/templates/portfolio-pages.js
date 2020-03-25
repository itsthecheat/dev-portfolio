import React from "react"

import { graphql } from "gatsby"
import {Row, Col, Container} from "react-bootstrap"

export default ({data}) => {
  const post = data.markdownRemark
  return (
  <Container>

    <Row>

      <Col lg={8} className="text-paragraph">
          <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />

      </Col>

    </Row>
  </Container>

  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
