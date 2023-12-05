import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { useQuery } from "react-query";
import { getPopProject } from "../api";

const Main = () => {
  const [pop, setPop] = useState("인기");
  const settings = {
    slide: <ProjectCard />,
    dots: true,
    infinite: false,
    speed: 950,
    slidesToScroll: 3,
    slidesToShow: 3,
    slidesPerRow: 2,
    centerPadding: "0px",
  };
  const { isLoading, data: popproject } = useQuery({
    queryKey: ["popproject"],
    queryFn: () => getPopProject(),
    refetchOnWindowFocus: false,
  });
  useEffect(() => {}, []);

  if (isLoading) {
    return (
      <>
        <Load>
            <div>로딩 중..</div>
          <FadeLoader />
        </Load>
      </>
    );
  }
  return (
    <Container>
      <Title>인기 프로젝트</Title>
      <ProjectWrapper>
        <CardWrapper>
          <PopularSlide {...settings}>
            {popproject &&
              popproject.map((option) => {
                return <ProjectCard option={option} pop={pop} />;
              })}
          </PopularSlide>
        </CardWrapper>
      </ProjectWrapper>
    </Container>
  );
};
const PopularSlide = styled(Slider)`
    width: 870px;
    .slick-list {
        margin: 0;
        overflow: hidden;
        top: -10px;
    }
    .slick-prev{
        position: absolute;
        top: 300px;
        left: -70px;
    }
    .slick-next{
        position: absolute;
        top: 300px;
        right: -60px;
    }
    .slick-prev:before, .slick-next:before{
        cursor: pointer;
        font-size: 40px;
        line-height: 1;
        opacity: .75;
        color: #4754A3;
    }
`;

const Load = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 550px;
`;
const Container = styled.div`
    margin-top: 100px;
`;
const ProjectWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: "Pretendard-Regular";
`;
const Title = styled.div`
    width: 850px;
    margin: 0 auto;
    font-size: 22px;
    font-weight: bold;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export default Main;
