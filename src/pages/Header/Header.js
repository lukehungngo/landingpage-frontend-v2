import React, { Component } from "react"
import _ from "lodash"
import "./Header.scss"
import { Navbar, NavbarBrand, Nav, Collapse } from "reactstrap"
import NavItem from "./NavItem/NavItem"
import logo from "../../assets/Images/tsf-logo.png"
import { animateScroll as scroll } from "react-scroll"
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
      nav: "nav top",
      isActiveLink: {
        introduction: true,
        service: false,
        whyus: false,
        blog: false,
        footer: false,
      },
    }
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }
  toggleActiveLink = section => {
    let newIsActiveLink = this.state.isActiveLink
    _.forIn(this.state.isActiveLink, (value, key) => {
      if (this.state.isActiveLink.hasOwnProperty(key)) {
        if (key === section) {
          newIsActiveLink[key] = true
        } else {
          newIsActiveLink[key] = false
        }
      }
    })
    this.setState({
      isActiveLink: newIsActiveLink,
    })
  }
  scrollToTop = () => {
    scroll.scrollToTop()
  }
  componentDidMount() {
    window.onscroll = () => {
      this.scrollToggleNavbar()
    }
  }
  scrollToggleNavbar = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      this.setState({ nav: "nav scroll" })
    } else {
      this.setState({ nav: "nav top" })
      this.toggleActiveLink(this.props.sections.introduction)
    }
  }
  renderNavItem = () => {
    let navItems = []
    _.forIn(this.props.sections, (value, key) => {
      if (this.props.sections.hasOwnProperty(key)) {
        const navItem = (
          <NavItem
            key={value}
            onSetActive={() => this.toggleActiveLink(value)}
            scrollTo={value}
            onClick={this.toggleNav}
            title={value.charAt(0).toUpperCase() + value.slice(1)}
            isActiveLink={this.state.isActiveLink[value]}
          />
        )
        navItems.push(navItem)
      }
    })
    return navItems
  }
  render() {
    const collapseIcon = this.state.isNavOpen
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right"
    return (
      <Navbar expand="md" className={this.state.nav}>
        <div className="container">
          <NavbarBrand className="mr-auto" href="/" onClick={this.scrollToTop}>
            <img
              src={logo}
              height="40"
              width="226"
              alt="TSF"
              onClick={this.scrollToTop}
            />
          </NavbarBrand>
          <button
            onClick={this.toggleNav}
            id="toggleButton"
            className={`${collapseIcon}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-align-justify" />
          </button>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="row ml-auto">
              {this.renderNavItem()}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}
