import React from "react"
import * as layoutStyles from "./Layout.module.css"
import Header from "../components/Header"
import Container from "react-bootstrap/Container"


const Layout = ({ children }) => {
  return (
  <Container fluid>
    <div className={`${layoutStyles.sun} ${layoutStyles.bounceInTop}`}></div>
    <Header />
      <div className={layoutStyles.container}>{children}
        <div className={layoutStyles.water}>
          <svg className={layoutStyles.slideLeft} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path fill= "rgba(135, 206, 235, .7)" d="M385.44,-25.37 C474.60,69.37 395.03,16.08 338.03,211.47 L500.00,150.00 L500.00,0.00 Z" />
          </svg>
        </div>
        </div>
  </Container>
  )
}

export default Layout