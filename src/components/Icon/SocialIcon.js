import React, { Component } from "react"
import "./SocialIcon.scss"
const defaultValue = {
  // className: "btn btn-social-icon btn-google",
  iconName: "fa fa-google-plus",
  href: "http://google.com/+",
  style: {},
}
export default class SocialIcon extends Component {
  render() {
    return (
      <a
        // className={defaultValue.className || this.props.className}
        style={this.props.style || defaultValue.style}
        href={this.props.href || defaultValue.href}
      >
        <i className={this.props.iconName || defaultValue.iconName} />
      </a>
    )
  }
}
