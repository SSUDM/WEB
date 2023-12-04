import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ProjectCard from '../components/ProjectCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Select from "react-select";
import {
  levelOptionState,
  positionOptionState,
  techOptionState,
  tokenState,
} from "../components/atom";
import { useRecoilValue } from "recoil";
import axios from 'axios';
import { useQuery } from 'react-query';
import { getRecommendProject } from '../api';
import { FadeLoader } from 'react-spinners';

const RecommendProject = () => {
    const positionOption = useRecoilValue(positionOptionState);
    const techOption = useRecoilValue(techOptionState);
    const levelOption = useRecoilValue(levelOptionState);
    const accessToken = useRecoilValue(tokenState);
    const [filterOptions, setFilterOptions] = useState({
        recPart: [],
        recTech: [],
        recLevel: [],
    });
    const [isSelect, setIsSelect] = useState(false);
    const [list ,setList] = useState('');
    const settings = {
        slide: <ProjectCard />,
        dots: true,
        infinite: false,
        focusOnChange: true,
        speed: 950,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        centerPadding: '10px',
      };

    const { isLoading, data:recproject } = useQuery({
        queryKey: ["recproject"],
        queryFn: ()=> getRecommendProject(),
        refetchOnWindowFocus: false,
    })

    useEffect(()=>{
    //   console.log(recproject);
      console.log(filterOptions);
      const sendData = async() =>{
        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/rec-project`,{
                recPart : filterOptions.recPart,
                recTech : filterOptions.recTech,
                recLevel : filterOptions.recLevel,
            },{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
            console.log(res.data);
            setList(res.data);
        }catch(err){
            console.log(err);
        }
      }
        const hasSelectedOptions =
        filterOptions.recPart.length !== 0 ||
        filterOptions.recTech.length !== 0 ||
        filterOptions.recLevel.length !== 0;

        if (hasSelectedOptions) {
            sendData();
            
            setIsSelect(true);
        } 
        else {
            setIsSelect(false);
        }
    },[filterOptions])

    if(isLoading){
        return (
            <Load>
                <FadeLoader/>
            </Load>
        )
    }

    return (
    <Wrapper>
        <Filter>추천 검색 필터</Filter>
        <SelectArea>
            <CategorySelect
                onChange={(selectRecruit) =>
                    setFilterOptions({ ...filterOptions, recPart: selectRecruit.map((option) => option.value) })}
                options={positionOption}
                placeholder="모집 분야"
                isMulti
            />
            <CategorySelect
                onChange={(selectStack) =>
                    setFilterOptions({ ...filterOptions, recTech: selectStack.map((option) => option.value) })}
                options={techOption}
                placeholder="기술 스택"
                isMulti
            />
            <CategorySelect
                onChange={(selectLank) =>
                    setFilterOptions({ ...filterOptions, recLevel: selectLank.map((option) => option.value) })}
                options={levelOption}
                placeholder="숙련도"
                isMulti
            />
        </SelectArea>
        <ProjectWrapper>
        <Text>추천 프로젝트</Text>
            <CardWrapper>
                    {isSelect?
                    // <PopularSlide {...settings}>
                    <DefaultWrap>
                        {list.length === 0 ?
                            <NoOption>원하시는 프로젝트가 없네요..😭</NoOption>
                            :
                            <>
                                {list&&list.map((option)=>{
                                    return(
                                        <ProjectCard option={option}/>
                                    )
                                })}
                            </> 
                        }
                    </DefaultWrap>
                    // </PopularSlide>
                    :
                    <DefaultWrap>
                        {recproject&&recproject.map((option)=>{
                            return(
                                <ProjectCard option={option}/>
                            )
                        })}
                    </DefaultWrap>
                    }
            </CardWrapper>
        </ProjectWrapper>
    </Wrapper>
  )
}
const Load = styled.div`
    margin-top: 300px;
    margin-left: 700px;
`;
const DefaultWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 280px);
    gap: 0px 57px;
    margin-top: -10px;
`;
const NoOption = styled.div`
    position: absolute;
    top: 210px;
    right: 310px;
    font-size: 30px;
    text-align: center;
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 200px;
    top: 20px;
    left: -41px;
    font-size: 22px;
    font-weight: bold;
`;
const ProjectWrapper = styled.div`
    position: absolute;
    top: 180px;
    left: 140px;
`;
const CardWrapper = styled.div`
    margin: 70px 0 40px 0;
`;
// const PopularSlide = styled(Slider)`
//     width: 1000px;
//     .slick-list {
//         margin: 0;
//         overflow: hidden;
//         top: -10px;
//     }
//     .slick-arrow {
//         transform: translate(-20px, -20px);
//         background-color: #aaaaaa;
//         border-radius: 3px;
//         cursor: pointer;
//     }

// `;
export default RecommendProject