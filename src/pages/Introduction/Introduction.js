import React, { Component } from "react"
import IntroductionWeb from "./Introduction/IntroductionWeb"
import IntroductionMobile from "./Introduction/IntroductionMobile"
import * as constant from './constant'
class Introduction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: true,
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.renderSection)
    this.renderSection()
  }
  renderSection = () => {
    if (window.innerWidth >= 768)
      this.setState({
        isMobile: false,
      })
    else
      this.setState({
        isMobile: true,
      })
  }
  render() {
    return (
      <div className="container">
        {this.state.isMobile ? <IntroductionMobile slogan={constant.Slogan}/> : <IntroductionWeb slogan={constant.Slogan}/>}
      </div>
    )
  }
}
export default Introduction
