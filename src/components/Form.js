import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap"
import styles from "./Form.module.css"


export default () => (

  <Form action="https://getform.io/f/0fa9220a-1ce6-4188-a95a-44892775f5fc" method="POST">
    <Form.Group controlId="formBasicEmail">
      <Form.Control className={styles.formCustom} type="text" name="name" placeholder="Name" />
    </Form.Group>
    <Form.Group controlId="formBasicName">
      <Form.Control className={styles.formCustom} type="email" name=
        "email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="ControlTextarea1">
      <Form.Control className={styles.formCustom} as="textarea" rows="3" type="text" name="message" placeholder="Your Message"/>
    </Form.Group>
    <Button className={styles.btnCustom} type="submit">
      Submit
    </Button>
  </Form>

)
