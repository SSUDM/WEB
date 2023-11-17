import React from 'react';
import styled from "styled-components";
import ProjectCard from '../component/ProjectCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StyledSlide from '../style/StyledSlide';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MyProject = () => {
    const settings = {
        slide: <ProjectCard />,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll:2,
        centerMode: false,
        variableWidth: true,
        centerPadding: '0px',
      };
      
    const [list, setLists] = useState(null);
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzU4NGY3YjE4OWY5MjVhYjY5NGE1MzlmZTRkNDMwZSIsInN1YiI6IjY1M2U2NWNlYmMyY2IzMDEyYzMxZTE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JyDM2iO9E69yWIAYeUUAIzce6UO51diikGX-SHKHxKM'
        }
      };
    useEffect(() => {
        const fetchData = async() =>{
            await axios
            .request(options)
            .then(function (response) {
                console.log(response.data.results);
                setLists(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
        }
        fetchData();
    }, []);
  return (
    <>
        <AD/>
        <Container>
            <ProjectWrapper>
                <h3>내 프로젝트</h3>
                <CardWrapper>
                    <StyledSlide {...settings}>
                      {list&&list.map((data)=>(
                        <ProjectCard key={data.id} data={data}/>
                      ))}
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
        </Container>
    </>

  )
}

const AD = styled.div`
    width: 100%;
    height: 300px;
    background-color: #b4b4b4;
    margin-bottom: 100px;
`;
const Container = styled.div`
    margin-bottom: 100px;
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
const Separator = styled.div`
    width: 70%;
    text-align: center;
    margin: auto;
    border-bottom: 1px solid gray;
`;

export default MyProject