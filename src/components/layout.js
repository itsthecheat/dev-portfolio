import React from "react"

import layoutStyles from "./layout.module.css"
import Header from "../components/header"
import "typeface-raleway"
import Container from "react-bootstrap/Container"


export default ({ children }) => (
  <Container>
    <div className={layoutStyles.sun}></div>
    <Header></Header>
      <div className={layoutStyles.container}>{children}</div>
  </Container>

)
