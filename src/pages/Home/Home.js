import React, { Component } from "react";
import "./Home.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Service from "../Service/Service";
import WhyUs from "../WhyUs/WhyUs";
import Blog from "../Blog/Blog";
const sections = {
  introduction: "introduction",
  service: "service",
  whyus: "whyus"
};
export default class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="header-container">
          <Header sections={sections} />
          <div className="white-container" id={sections.introduction}>
            <Introduction />
          </div>
          <div className="lightgrey-container" id={sections.service}>
            <Service />
          </div>
          <div className="white-container" id={sections.whyus}>
            <WhyUs />
          </div>
          <div className="white-container" id={sections.whyus}>
            <Blog />
          </div>
          <div className="lightgrey-container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
