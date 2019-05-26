import React, { Component } from "react";
import "./Home.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Service from "../Service/Service";
import WhyUs from "../WhyUs/WhyUs";
import FollowUs from "../FollowUs/FollowUs";
import Email from '../Email/Email';
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
