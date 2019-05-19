import React, { Component } from "react"
import "./Card.scss"
import { Card } from "reactstrap"
const defaultValue = {
  image: "",
  alt: "",
  title: "",
  description: "",
  onClick: () => {},
}
export default class StyledCard extends Component {
  render() {
    return (
      <Card className="card-service col align-items-center">
        <div className="row justify-content-center">
          <img
            className="card-img"
            src={this.props.image || defaultValue.image}
            alt={this.props.alt || defaultValue.alt}
          />
        </div>
        <div className="row justify-content-center">
          <span className="card-text-title">
            {this.props.title || defaultValue.title}
          </span>
          <span className="card-text-content">
            {this.props.description || defaultValue.description}
          </span>
        </div>
      </Card>
    )
  }
}
