import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ProjectCard from '../component/ProjectCard';

export default class SimpleSlider extends Component {
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 1
    // };
    const settings = {
        slide: <ProjectCard />,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: true,
        centerPadding: '0px',
      };
    return (
      <div>
        <h2> Single Item</h2>
        <Sliders {...settings}>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </Sliders>
      </div>
    );
  }
}
const Div = styled.div`
    width: 100%;
    height: 40px;
    background-color: blue;
`;
const Sliders = styled(Slider)`
    width: 870px;
`;