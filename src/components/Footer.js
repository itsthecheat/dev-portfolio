import React from "react"

import styles from "./Footer.module.css"
import icon from "../static/icons/Gatsby_Monogram_Black.svg"
import { FiCoffee } from "react-icons/fi"
import { MdCopyright } from "react-icons/md"


class Footer extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    date: new Date().getFullYear()
  };
}

render() {
  return(
        <footer className={styles.footer}>
            <MdCopyright className={styles.coffee}/> {this.state.date} built with <a href="https://www.gatsbyjs.org"><img className={styles.logo} src={icon} alt="gatsby-logo"/></a> and
          <a href="https://en.wikipedia.org/wiki/Coffee"><FiCoffee className={styles.coffee}/></a>
        </footer>
  )
}
}
export default Footer
