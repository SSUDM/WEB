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
          <FadeLoader />
        </Load>
      </>
    );
  }
  return (
    <Container>
      <ProjectWrapper>
        <h3>인기 프로젝트</h3>
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
  /* display: grid;
    grid-template-columns: 900px 800px 800px;
    grid-template-rows: 400px 400px; */
  width: 880px;
  .slick-list {
    margin: 0;
    overflow: hidden;
    top: -10px;
  }

  .slick-arrow {
    transform: translate(7px, -25px);
    background-color: #aaaaaa;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const Load = styled.div`
  margin-left: 750px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;
const ProjectWrapper = styled.div`
  width: 70%;
  height: 300px;
  margin: 10px 100px 0 auto;
  font-family: "Pretendard-Regular";
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export default Main;
