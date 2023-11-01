import React from 'react';
import styled from "styled-components";
import ProjectCard from '../component/ProjectCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AD = styled.div`
    width: 100%;
    height: 300px;
    background-color:gray;
    margin-top: 10px;
    margin-bottom: 100px;
`;
const ProjectWrapper = styled.div`
    width: 70%;
    height: 300px;
    margin: 10px auto;
    font-family: "Pretendard-Regular";
`;
const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const Separator = styled.div`
    width: 70%;
    margin: 0 auto 50px auto;
    border-bottom: 1px solid gray;
`;

const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 30px;
  width: 100%;
  margin-left: 30px;
  
  .slick-list {
    position: absolute;
    width: 1030px;
    height: 370px;
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
    transform: translate(20px, 130px);
    background-color: #c8c8c8;
    border-radius: 3px;
    cursor: pointer;
  }

  .slick-prev {
    position: absolute;
    top: -60px;
    
    margin-right: 100px;
    padding: 1px;
    cursor: pointer;
    z-index: 100;
  }

  .slick-next {
    position: absolute;
    top: -60px;
    left: 1010px;
    cursor: pointer;
  }
`;

const MyProject = () => {
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
    <>
        <AD/>
        <ProjectWrapper>
            <h3>내 프로젝트</h3>
            <CardWrapper>
                <StyledSlide {...settings}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </StyledSlide>
            </CardWrapper>
        </ProjectWrapper>
        <Separator/>
        <ProjectWrapper>
            <h3>인기 프로젝트</h3>
            <CardWrapper>
                <StyledSlide {...settings}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </StyledSlide>
            </CardWrapper>
        </ProjectWrapper>
    </>

  )
}

export default MyProject