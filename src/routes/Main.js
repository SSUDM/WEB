import React from 'react';
import styled from "styled-components";
import ProjectCard from '../components/ProjectCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPopProject } from '../api';
// import { useNavigate } from 'react-router-dom';


const Main = () => {
    const settings = {
        slide: <ProjectCard />,
        dots: true,
        infinite: false,
        speed: 950,
        slidesToScroll: 3,
        slidesToShow: 3,
        rows: 2,
        centerPadding: '10px',
      };
    const { isLoading, data:popproject } = useQuery({
        queryKey: ["popproject"],
        queryFn: ()=> getPopProject(),
        // onSuccess: (popproject) =>{console.log(popproject)},
        refetchOnWindowFocus: 'always',
    });
    useEffect(()=>{
        
    },[])

    if(isLoading) {
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
                            {popproject&&popproject.map((option)=>{
                                return(
                                    <ProjectCard option={option}/>
                                )
                            })}                     
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
    width: 100vw;
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

export default Main