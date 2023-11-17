import React from 'react';
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import SelectBox from '../component/SelectBox';
import { selectData } from "../ProjectSearchData" ;
import ProjectCard from '../component/ProjectCard';
import StyledSlide from '../style/StyledSlide';

const RecommendProject = () => {
    const settings = {
        slide: <ProjectCard />,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 3,
        centerMode: false,
        variableWidth: true,
        centerPadding: '0px',
      };

  return (
    <Wrapper>
        {/* <SearchArea>
            <Input type='text'/>
            <SearchIcon><FaSearch/></SearchIcon>
        </SearchArea> */}
        <Filter>추천 검색 필터</Filter>
        <SelectArea>
            <SelectBox content={selectData.recruitment} title={"모집 분야"}/>
            <SelectBox content={selectData.technique} title={"기술 스택"}/>
            <SelectBox content={selectData.proficiency} title={"등급"}/>
        </SelectArea>
        <Text>추천 프로젝트</Text>
        <ProjectWrapper>
            <CardWrapper>
                <StyledSlide {...settings}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </StyledSlide>
            </CardWrapper>
        </ProjectWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 80%;
    text-align: center;
    margin: 50px auto 0 auto;
    font-family: "Pretendard-Regular";
`;
const Filter = styled.div`
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    top: 10px;
    left: 140px;
`;
const SearchArea = styled.div`

`;
const Input = styled.input`
    width: 600px;
    height: 20px;
    padding: 10px 0 10px 20px;
    border: none;
    border-radius: 30px;
    background-color: #c8c8c8;
    font-size: 18px;
`;
const SearchIcon = styled.span`
    position: absolute;
    top: 11px;
    right: 320px;
`;
const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 140px;
`;
const Text = styled.div`
    position: absolute;
    top: 270px;
    left: 140px;
    font-size: 20px;
    font-weight: bold;
`;
const ProjectWrapper = styled.div`
    position: absolute;
    top: 330px;
    left: 140px;
`;
const CardWrapper = styled.div`
    /* display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    gap: 35px; */
    margin-bottom: 40px;
`;
export default RecommendProject