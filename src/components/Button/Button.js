import React, { Component } from "react"
import { Button } from "reactstrap"
import "./button.scss"
const defaultValue = {
  type: "primary",
  style: {
    margin: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "18px",
    paddingRight: "18px",
  },
  title: "missing title",
  onClick: () => {},
}
export default class StyledButton extends Component {
  render() {
    return (
      <Button
        color={this.props.type || defaultValue.type}
        style={this.props.style || defaultValue.style}
        onClick={this.props.onClick || defaultValue.onClick}
      >
        {this.props.title || defaultValue.title}
      </Button>
    )
  }
}
