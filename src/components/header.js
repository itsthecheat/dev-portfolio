import React from "react"

import {Navbar, Nav} from "react-bootstrap/"
import 'typeface-roboto';
import { Link } from "gatsby"
import  "./header.css"

export default () => (
<div>

  <Navbar id="nav-color" expand="lg" variant="">
    <Link className="navbar-brand" to="/">Leslie Behum</Link>
    <Navbar.Toggle id="menu" className="ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/about/">Who I Am</Link>
            <Link className="nav-link" to="/portfolio/">What I've Made</Link>
            <Link className="nav-link" to="/contact/">Say Hello</Link>
          </Nav>
      </Navbar.Collapse>
  </Navbar>

</div>
)
