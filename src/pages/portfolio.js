import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Gallery from "../components/Gallery"


const Portfolio = () => {
  return (

  <Container>
    <Row>
      <Col lg={12}>
        <Gallery />
      </Col>
    </Row>
  </Container>

  )
}

export default Portfolio