import React, { Component } from "react"
import { NavItem } from "reactstrap"
import { Link } from "react-scroll"
import "./NavItem.scss"
const defaultValue = {
  navClassName: "",
  onSetActive: () => {},
  onClick: () => {},
  scrollTo: "introduction",
  offSet: -70,
  duration: 500,
  title: "missing title",
}
export default class StyledNavItem extends Component {
  render() {
    return (
      <NavItem>
        <Link
          className="text-color"
          onSetActive={this.props.onSetActive || defaultValue.onSetActive}
          onClick={this.props.onClick || defaultValue.onClick}
          activeClass="active"
          to={this.props.scrollTo || defaultValue.scrollTo}
          spy={true}
          smooth={true}
          offset={this.props.offset || defaultValue.offset}
          duration={this.props.duration || defaultValue.duration}
        >
          {this.props.title || defaultValue.title}
        </Link>
        {!this.props.isActiveLink ? <div /> : <div className="active-link" />}
      </NavItem>
    )
  }
}
