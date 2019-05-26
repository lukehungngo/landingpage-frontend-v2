import React, { Component } from "react"
import Slider from "react-slick"
import { Card, CardText, CardTitle, CardLink } from "reactstrap"
import { Blogs } from './constant'
import './FollowUs.scss'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesPerRow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
//   autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  useCSS: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesPerRow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesPerRow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
}
export default class WhyUs extends Component {

    renderBlog = () => {
        return (
        Blogs.map(item => {
            return (
              <div className="col-xl-3, col-md-4 col-sm-6">
                <Card className="blog-card">
                  <CardLink href={item.link}>
                    <img
                      src={item.src}
                      width="50%"
                      height="50%"
                      className="img-responsive blog-card-image"
                      alt={item.alt}
                    />
                    <br />
                  </CardLink>
                </Card>
                <CardText className="blog-card-date">{item.date}</CardText>
                <CardTitle className="blog-card-title">{item.title}</CardTitle>
              </div>
            )
          })
        )
    }
  render() {
    return (
      <div className="container">
        <div className="col">
          <h1 className="blog-intro-title">Follow us</h1>
        </div>
        <br />
        <br />
        <Slider {...settings}>
          {this.renderBlog()}
        </Slider>
      </div>
    )
  }
}
