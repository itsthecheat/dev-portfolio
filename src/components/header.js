import React from "react"

import {Navbar, Nav} from "react-bootstrap/"
import { Link } from "gatsby"
import styles from "./Header.module.css"
import { HamburgerElastic } from "react-animated-burgers"
import { AiOutlineLinkedin, AiFillGithub, AiOutlineInstagram } from "react-icons/ai"

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

        <Navbar collapseOnSelect expand="lg" variant="">
          <Navbar.Brand id={styles.brand} as={Link} to="/">Leslie Behum</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <HamburgerElastic
                 buttonWidth={30}
                 isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="" barColor="black" />
            </Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link onSelect={this.toggleButton} eventKey="2" as={Link} to="/portfolio/">What I've Made</Nav.Link>
                    <Nav.Link onSelect={this.toggleButton}  eventKey="3" as={Link} to="/contact/">Say Hello</Nav.Link>
                    <div id={styles.iconRow}>
                    <a href="https://www.linkedin.com/in/leslielaurenbehum"><AiOutlineLinkedin id={styles.icon}/></a>
                      <a href="https://www.github.com/itsthecheat"><AiFillGithub id={styles.icon}/></a>
                      <a href="https://www.instagram.com/leslielaurenb"><AiOutlineInstagram id={styles.icon}/></a>
                    </div>
                  </Nav>
              </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}

export default Header
