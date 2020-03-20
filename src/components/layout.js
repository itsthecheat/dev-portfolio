import React from "react"

import layoutStyles from "./layout.module.css"
import Header from "../components/header"
import "typeface-raleway"
import Container from "react-bootstrap/Container"


export default ({ children }) => (
  <Container fluid>
    <div className={layoutStyles.sun}></div>
    <Header></Header>
      <div className={layoutStyles.container}>{children}</div>

          <div className={layoutStyles.water}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M385.44,-25.37 C474.60,69.37 395.03,16.08 338.03,211.47 L500.00,150.00 L500.00,0.00 Z"></path></svg>
        </div>
          
  </Container>

)
