import React, { Component } from "react"
// import ReactDOM from 'react-dom';
import { Form, Input, FormGroup } from 'reactstrap'
import Button from '../../../components/Button/Button'
import './Email.scss'

export default class Email extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    this.props.sendEmail(this.email.value)
    event.preventDefault()
    this.form.reset()
  }
  render() {
    return (
      <div className="container aligns-items-center">
        <div className="row col-12 align-items-center mx-auto email-container" 
            // style={style1}
          >
          <div className="col-md-6  my-auto">
            <h5 style={{ color: "#ffffff" }}>
              Enter your email, we'll contact you
            </h5>
          </div>
          <div className="col-md-6">
            <Form
              id="emailForm"
              innerRef={emailForm => (this.form = emailForm)}
              onSubmit={values => this.handleSubmit(values)}
              className="row justify-content-center"
              >
              <FormGroup className="row col-md-8 align-items-center">
                <Input
                  type="text"
                  id="email"
                  name="email"
                  innerRef={input => (this.email = input)}
                  placeholder="Your Email Address"
                  />
              </FormGroup>
              <FormGroup className="col-md-4 ">
                <Button
                  title={"Send Us"} type={"secondary"} >
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
