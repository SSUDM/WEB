import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledSlide = styled(Slider)`
    width: 880px;
    .slick-list {
    margin: 0;
    overflow: hidden;
    top: -10px;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    position: absolute;
    top: 200px;
    /* display: none !important; */
  }

  .slick-arrow {
    transform: translate(-80px, 130px);
    background-color: #aaaaaa;
    border-radius: 3px;
    cursor: pointer;
  }

  .slick-prev {
    position: absolute;
    top: -70px;
    left: 50px;
    /* margin-right: 100px; */
    padding: 1px;
    cursor: pointer;
    /* background-color: red; */
    z-index: 100;
  }

  .slick-next {
    position: absolute;
    top: -70px;
    right: -110px;
    padding-top: 1px;
    padding-right: 1px;
    cursor: pointer;
  }
`;

export default StyledSlide;