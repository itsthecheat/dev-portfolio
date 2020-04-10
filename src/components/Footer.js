import React from "react"

import styles from "./Footer.module.css"
import "typeface-dm-serif-display"

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
          &copy; Leslie Behum {this.state.date}
      </footer>


  )
}
}
export default Footer
