import React, { Component } from 'react'
import './SliderContent.scss'
const defaultValue = {
    title: '',
    tab: '',
    className: 'whyus-slider-text',
    onClick: () => {},
}
export default class SliderContent extends Component {
  render() {
    const sliderContentClass = this.props.activeTab[this.props.tab] ? 'whyus-slider-text active-tab' : 'whyus-slider-text'
    return(
      <div
        className={sliderContentClass} 
        onClick={this.props.onClick || defaultValue.onClick}>
        {this.props.title || defaultValue.title}
      </div>
    )
  }
}
