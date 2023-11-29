import React, { useState,useEffect } from 'react';
import styled from "styled-components";
import ProjectCard from '../components/ProjectCard';
import StyledSlide from '../style/StyledSlide';
import Select from "react-select";
import {
  levelOptionState,
  positionOptionState,
  techOptionState,
} from "../components/atom";
import { useRecoilValue } from "recoil";
import { useQuery } from 'react-query';
import { getRecommendProject } from '../api';

const RecommendProject = () => {
    const positionOption = useRecoilValue(positionOptionState);
    const techOption = useRecoilValue(techOptionState);
    const levelOption = useRecoilValue(levelOptionState);

    const [positions, setPositions] = useState([]);
    const [techs, setTechs] = useState([]);
    const [level, setLevel] = useState([]);

    const settings = {
        slide: <ProjectCard />,
        dots: true,
        infinite: false,
        speed: 950,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 3,
        variableWidth: true,
        centerPadding: '10px',
      };
    const { isLoading, data:recproject } = useQuery({
        queryKey: ["recproject"],
        queryFn: ()=>getRecommendProject(),
        onSuccess: (recproject) =>{console.log(recproject)},
        refetchOnWindowFocus: false,
    });

    useEffect(()=>{},[])
    if(isLoading){
        return(
            <div>로딩중..</div>
        )
    }
  return (
    <Wrapper>
        <Filter>추천 검색 필터</Filter>
        <SelectArea>
            <CategorySelect
                onChange={(selectOptions) => 
                    setPositions(selectOptions.map((option) => option.value))}
                options={positionOption}
                placeholder="모집 분야"
                isMulti/>
            <CategorySelect
                onChange={(selectOptions) => 
                    setTechs(selectOptions.map((option) => option.value))}
                options={techOption}
                placeholder="기술 스택"
                isMulti/>
            <CategorySelect
                onChange={(selectOptions) => 
                    setLevel(selectOptions.map((option) => option.value))}
                options={levelOption}
                placeholder="숙련도"
                isMulti/>
        </SelectArea>

        
        <ProjectWrapper>
        <Text>추천 프로젝트</Text>
            <CardWrapper>
                <StyledSlide {...settings}>
                    {recproject&&recproject.map((option)=>{
                        return(
                            <ProjectCard option={option}/>
                        )
                    })}
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
const CategorySelect = styled(Select)`
    width: 260px;
    margin-right: 50px;
`;
const SelectArea = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50px;
    left: 140px;
`;
const Text = styled.div`
    position: absolute;
    top: 60px;
    font-size: 22px;
    font-weight: bold;
`;
const ProjectWrapper = styled.div`
    position: absolute;
    top: 180px;
    left: 140px;
`;
const CardWrapper = styled.div`
    margin-bottom: 40px;
`;
export default RecommendProject