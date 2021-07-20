import React from "react";

import { Container, Row, Col } from "react-bootstrap"
import FormCustom from "../components/Form"


const Contact = () => {
  return (

<Container>
    <Row>
      <Col lg={8} md={8} sm={12}>
        <h1>Drop Me a Line.</h1>
<FormCustom />
      </Col>
    </Row>
</Container>
)}

export default Contact