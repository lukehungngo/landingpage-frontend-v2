import React, { Component } from "react"
import Button from "../../../components/Button/Button"
import introductionImage from "../../../assets/Images/illu-solution-2.png"
import "../Introduction.scss"
class IntroductionMobile extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-xs-6">
          <img
            src={introductionImage}
            alt="banner"
            height="100%"
            width="100%"
            className="img-responsive"
          />
        </div>
        <div className="col-xs-6">
          <div className="col justify-content-center">
            <div className="row justify-content-center">
              <span className="introduction-mobile-text">
                {this.props.slogan.slice(0, 3).join(" ")}
              </span>
              <br />
              <span className="introduction-mobile-text">
                {this.props.slogan.slice(3).join(" ")}
              </span>
              <br />
            </div>
            <div className="row justify-content-center">
              <Button title={"Explore Us"} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default IntroductionMobile
