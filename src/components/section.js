import React from "react"

import {Row, Col, Container} from "react-bootstrap"

export default ({children}) => (
  <Container>
    <Row>

      <Col lg={8} className="text-paragraph">
        {children}
      </Col>

    </Row>
  </Container>


)
