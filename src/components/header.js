import React from "react"

import {Navbar, Nav} from "react-bootstrap/"
import 'typeface-roboto';
import { Link } from "gatsby"
import  "./header.css"
import { HamburgerElastic } from 'react-animated-burgers'

class Header extends React.Component {
  state = {
    isActive: false
  }

toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
      <div>

        <Navbar id="nav-color" expand="lg" variant="">
          <Link className="navbar-brand" to="/">Leslie Behum</Link>
            <Navbar.Toggle>
              <HamburgerElastic
                 buttonWidth={30} 
                 isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="" barColor="black" />
            </Navbar.Toggle>
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
  }
}

export default Header
