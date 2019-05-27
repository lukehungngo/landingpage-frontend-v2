import React, { Component } from "react";
import "./Home.scss";
import Footer from "../Landing/Footer/Footer";
import Header from "../Landing/Header/Header";
import Introduction from '../Landing/Introduction/Introduction'
import Service from "../Landing/Service/Service";
import WhyUs from "../Landing/WhyUs/WhyUs";
import FollowUs from "../Landing/FollowUs/FollowUs";
import Email from '../Landing/Email/Email';
const sections = {
  introduction:
      {
        id: "introduction",
        title: "Introduction",
      },
  service:
      {
        id: "service",
        title: "Service",
      },
  whyus:
      {
        id: "whyus",
        title: "Why Us?",
      },
  followus:       
  {
    id: "followus",
    title: "Follow Us",
  },
};
export default class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="header-container">
          <Header sections={sections} />
          <div className="white-container" id={sections.introduction.id}>
            <Introduction />
          </div>
          <div className="lightgrey-container" id={sections.service.id}>
            <Service />
          </div>
          <div className="white-container" id={sections.whyus.id}>
            <WhyUs />
          </div>
          <div className="white-container" id={sections.followus.id}>
            <FollowUs />
          </div>
        </div>
        <div className="white-lightgrey-container ">
          <Email />
        </div>
        <div className="lightgrey-container">
          <Footer />
        </div>
      </div>
    );
  }
}
