import React from 'react';
import styled from "styled-components";
import ProjectCard from '../components/ProjectCard';
import Slider from "react-slick";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Main = () => {
    const settings = {
        slide: <ProjectCard />,
        dots: true,
        infinite: false,
        speed: 700,
        slidesToScroll: 3,
        slidesToShow: 3,
        rows: 2,
        variableWidth: true,
        centerPadding: '10px',
      };
    const [loading, setLoading] = useState(true);
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
        // localStorage.removeItem("accessToken");
        const fetchData = async() =>{
            await axios
            .request(options)
            .then(function (response) {
                // console.log(response.data.results);
                setLists(response.data.results);
                setLoading(false);
            })
            .catch(function (error) {
                console.error(error);
            });
        }
        fetchData();
    }, []);

    if(loading) {
        return (
            <>
                <AD/>
                <Load>로딩중..</Load>
            </>
        )
    }
  return (
    <>
        <AD/>
        <Container>
            <ProjectWrapper>
                <h3>인기 프로젝트</h3>
                <CardWrapper>
                    <PopularSlide {...settings}>
                      {list&&list.map((data)=>(
                        <ProjectCard key={data.id} data={data}/>
                      ))}
                    </PopularSlide>
                </CardWrapper>
            </ProjectWrapper>
        </Container>
    </>

  )
}
const PopularSlide = styled(Slider)`
    width: 880px;
    .slick-list {
    margin: 0;
    overflow: hidden;
    top: -10px;
    }

    .slick-arrow {
        transform: translate(0px, -25px);
        background-color: #aaaaaa;
        border-radius: 3px;
        cursor: pointer;
    }

`;
const AD = styled.div`
    width: 100%;
    height: 300px;
    background-color: #b4b4b4;
    margin-bottom: 100px;
`;
const Load = styled.div`
    color: red;
    font-size: 30px;
`;
const Container = styled.div`
    margin-bottom: 300px;
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

export default Main