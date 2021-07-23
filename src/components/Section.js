import React from "react"
import * as styles from "./Section.module.css"
import {Row, Col, Container} from "react-bootstrap"

const Section = ({ children }) => {
  
  return (
  <Container>
    <Row>
      <Col lg={8} className={styles.textParagraph}>
        {children}      
      </Col>
    </Row>
  </Container>
  )
}

export default Section