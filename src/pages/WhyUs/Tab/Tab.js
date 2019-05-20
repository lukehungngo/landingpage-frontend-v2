import React, { Component } from "react";
import { TabPane, Media } from "reactstrap";
const defaultValue = {
  title: "",
  description: "",
  tab: "",
  imgSrc: "",
  alt: ""
};
export default class Tab extends Component {
  render() {
    return(
      <TabPane tabId={this.props.tab || defaultValue.tab}>
        <Media>
          <div className="col-5">
            <img
              src={this.props.imgSrc || defaultValue.imgSrc}
              height="100%"
              width="100%"
              className="img-responsive"
              alt={this.props.alt || defaultValue.alt}
            />
          </div>
          <div className="col-7">
            <div className="media-body">
              <h5 className="mt-0">{this.props.title || defaultValue.title}</h5>
              {this.props.description || defaultValue.description}
            </div>
          </div>
        </Media>
      </TabPane>
    )
  }
}
