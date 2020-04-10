import React from "react";

import Masonry from "react-masonry-component"
import {Container, Row, Col} from "react-bootstrap"
import Gallery from "../components/Gallery"

export default () => (

<Container>
    <Row>
      <Col lg={8}>
        <Gallery />
      </Col>
    </Row>
</Container>
)
