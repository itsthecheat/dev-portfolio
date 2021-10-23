import React from "react"
import { Form, Button } from "react-bootstrap"
import {formCustom, btnCustom} from "./Form.module.css"


const FormCustom = () => (

  <Form action="https://formspree.io/xrgydype" method="POST">
    <Form.Group controlId="formBasicEmail">
      <Form.Control className={formCustom} type="text" name="name" placeholder="Name" />
    </Form.Group>
    <Form.Group controlId="formBasicName">
      <Form.Control className={formCustom} type="email" name=
        "email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="ControlTextarea1">
      <Form.Control className={formCustom} as="textarea" rows="3" type="text" name="message" placeholder="Your Message"/>
    </Form.Group>
    <Button className={btnCustom} type="submit">
      Submit
    </Button>
  </Form>

)

export default FormCustom