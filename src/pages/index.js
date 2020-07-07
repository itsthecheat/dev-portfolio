import React from "react";

import Section from "../components/Section"
import Footer from "../components/Footer"
import styles from "./index.module.css"
import { AiOutlineLinkedin, AiFillGithub, AiOutlineInstagram } from "react-icons/ai"

export default () => (
<div>
<Section>
  <h1>Leslie Behum</h1>
  <h2 className={styles.heading}>Full-Stack Web Developer.</h2>
  <hr className={styles.line}/>
    <div className={styles.iconRow}>
    <a href="https://www.linkedin.com/in/leslielaurenbehum"><AiOutlineLinkedin id={styles.icon}/></a>
      <a href="https://www.github.com/itsthecheat"><AiFillGithub id={styles.icon}/></a>
      <a href="https://www.instagram.com/leslielaurenb"><AiOutlineInstagram id={styles.icon}/></a>
    </div>
</Section>

<Footer />
</div>

)
