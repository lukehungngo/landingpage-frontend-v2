import React from "react"
import "./footer.scss"
import SocialIcon from "../../components/Icon/SocialIcon"
const defaultValue = {
  mailto: "mailto:tsfsolution.contact@gmail.com",
  googleplus: "http://google.com/+",
  facebook: "http://www.facebook.com",
  linkedin: "http://www.linkedin",
  youtube: "http://youtube.com",
}
export default function Footer() {
  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col">
            <h5>So, do we work together?</h5>
            <br />
            <h1 className="text">Let's Talk</h1>
            <br />
          </div>
          <div className="col-12 col-md-6 align-self-center">
            <div>
              <h5>Our Address</h5>
              <address>
                <i className="fa fa-envelope fa-lg" />{" "}
                <a href="mailto:tsfsolution.contact@gmail.com">
                  tsfsolution.contact@gmail.com
                </a>
              </address>
            </div>
            <br />
            <h5>Find us on</h5>
            <div>
              <SocialIcon
                iconName="fa fa-google-plus"
                href={defaultValue.googleplus}
              />
              <SocialIcon
                iconName="fa fa-facebook"
                href={defaultValue.facebook}
              />
              <SocialIcon
                iconName="fa fa-linkedin"
                href={defaultValue.linkedin}
              />
              <SocialIcon
                iconName="fa fa-youtube"
                href={defaultValue.youtube}
              />
              <SocialIcon
                iconName="fa fa-envelope-o"
                href={defaultValue.mailto}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2019 The Super Foundation</p>
          </div>
        </div>
      </div>
  )
}
