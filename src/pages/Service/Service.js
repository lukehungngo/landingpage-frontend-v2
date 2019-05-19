import React, { Component } from "react"
import Card from "../../components/Card/Card"
import * as constant from "./constant"
import "./Service.scss"
import mobileImage from "../../assets/Images/service-mobile-2.png"
import blockchainImage from "../../assets/Images/service-blockchain-3.png"
import webImage from "../../assets/Images/service-web-3.png"
const defaultValue = ["mobile", "web", "blockchain"]
export default class Service extends Component {
  getImage = item => {
    switch (item) {
      case "mobile": {
        return mobileImage
      }
      case "web": {
        return webImage
      }
      case "blockchain": {
        return blockchainImage
      }
      default:
        return webImage
    }
  }
  renderCardSection = content =>
    defaultValue.map(item => {
      return (
        <div className="col-12 col-md-4">
          <Card
            image={this.getImage(item)}
            alt={item}
            title={content[item].title}
            description={content[item].description}
          />
        </div>
      )
    })

  render() {
    return (
      <div className="container">
        <div className="col service-intro-container">
          <h3 className="service-intro-title">
            OUR SERVICES
          </h3>
          <h1 className="service-intro-description">
            Making Ideas Come to Life !
          </h1>
        </div>
        <div>
          <div className="row justify-content-center">
            {this.renderCardSection(constant.ServiceContent)}
          </div>
        </div>
      </div>
    )
  }
}
