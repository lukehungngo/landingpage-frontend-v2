import React from "react";
import './WhyUs.scss'
import _ from "lodash";
import { TabContent} from "reactstrap";
import { Introduction, Content } from "./constant";
import Slider from "react-slick";
import SliderContent from "./SliderContent/SliderContent";
import Tab from "./Tab/Tab";
function NextArrow(props) {
  const { className, style, onClick } = props;
  console.log(style);
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class WhyUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActiveTab: Content[0].tab,
      activeTab: {
        analysis: true,
        design: false,
        development: false,
        release: false,
        maintain: false
      }
    };
  }
  componentDidMount(){
    window.addEventListener("resize", this.updateDimensions);
  }
  toggleTab = tab => {
    let newActiveTab = this.state.activeTab;
    _.forIn(newActiveTab, (value, key) => {
      if (newActiveTab.hasOwnProperty(key)) {
        if (key === tab) {
          newActiveTab[key] = true;
        } else {
          newActiveTab[key] = false;
        }
      }
    });
    this.setState({
      activeTab: newActiveTab,
      currentActiveTab: tab
    });
  };
  renderSliderContent = () =>
    Content.map(item => {
      return(
        <SliderContent
          key={item.title}
          title={item.title}
          tab={item.tab}
          activeTab={this.state.activeTab}
          onClick={() => this.toggleTab(item.tab)}
        />
      )
    });
  renderTab = () => 
    Content.map(item => {
      return (
        <Tab
          key={item.title}
          title={item.title.slice(2)}
          description={item.description}
          tab={item.tab}
          imgSrc={item.imgSrc}
          alt={item.alt}
        />
      )
  });
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1025,
          settings: {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container whyus-container">
        <div
          className="col whyus-intro-container">
          <p className="whyus-intro-title">{Introduction.title}</p>
          <h1 className="whyus-big-text">{Introduction.description}</h1>
        </div>
        <Slider {...settings}>
          {this.renderSliderContent()}
        </Slider>
        <hr />
        <TabContent activeTab={this.state.currentActiveTab}>
          {this.renderTab()}
        </TabContent>
      </div>
    );
  }
}
