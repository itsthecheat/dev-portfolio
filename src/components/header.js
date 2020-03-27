import React from "react"

import {Navbar, Nav} from "react-bootstrap/"
import { Link } from "gatsby"
import  "./Header.css"
import "typeface-raleway"
import "typeface-dm-serif-display"
import { HamburgerElastic } from "react-animated-burgers"

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

        <Navbar collapseOnSelect id="nav-color" expand="lg" variant="">
          <Navbar.Brand as={Link} to="/">Leslie Behum</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <HamburgerElastic
                 buttonWidth={30}
                 isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="" barColor="black" />
            </Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">

                    <Nav.Link onSelect={this.toggleButton} eventKey="1" as={Link} to="/about/">Who I Am</Nav.Link>
                    <Nav.Link onSelect={this.toggleButton} eventKey="2" as={Link} to="/portfolio/">What I've Made</Nav.Link>
                    <Nav.Link onSelect={this.toggleButton}  eventKey="3" as={Link} to="/contact/">Say Hello</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}

export default Header
