import React from "react"

import {Navbar, Nav} from "react-bootstrap/"
import { Link } from "gatsby"
import styles from "./Header.module.css"
import Logo from "./Logo"
import SEO from "../components/SEO"

class Header extends React.Component {

  render() {
    return (
      <div>
        <SEO />
        <Navbar>
          <Navbar.Brand className={styles.logo} as={Link} to="/">
            <Logo/>
          </Navbar.Brand>
            <Nav.Link as={Link} to="/about/">Who I Am</Nav.Link>
            <Nav.Link as={Link} to="/portfolio/">What I've Made</Nav.Link>
            <Nav.Link as={Link} to="/contact/">Say Hello</Nav.Link>
        </Navbar>
      </div>
    )
  }
}

export default Header
