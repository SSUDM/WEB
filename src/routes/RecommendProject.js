import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
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
import axios from "axios";
import { useQuery } from "react-query";
import { getRecommendProject } from "../api";
import { FadeLoader } from "react-spinners";

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

  const { isLoading, data: recproject } = useQuery({
    queryKey: ["recproject"],
    queryFn: () => getRecommendProject(),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
      console.log(recproject);
    console.log(filterOptions);
    const sendData = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/rec-project`,
          {
            recPart: filterOptions.recPart,
            recTech: filterOptions.recTech,
            recLevel: filterOptions.recLevel,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        console.log(res.data);
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const hasSelectedOptions =
      filterOptions.recPart.length !== 0 ||
      filterOptions.recTech.length !== 0 ||
      filterOptions.recLevel.length !== 0;

    if (hasSelectedOptions) {
      sendData();

      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  }, [filterOptions]);

  if (isLoading) {
    return (
      <Load>
        <FadeLoader />
      </Load>
    );
  }

  return (
    <Wrapper>
      <Filter>추천 검색 필터</Filter>
      <SelectArea>
        <CategorySelect
          onChange={(selectRecruit) =>
            setFilterOptions({
              ...filterOptions,
              recPart: selectRecruit.map((option) => option.value),
            })
          }
          options={positionOption}
          placeholder="모집 분야"
          isMulti
        />
        <CategorySelect
          onChange={(selectStack) =>
            setFilterOptions({
              ...filterOptions,
              recTech: selectStack.map((option) => option.value),
            })
          }
          options={techOption}
          placeholder="기술 스택"
          isMulti
        />
        <CategorySelect
          onChange={(selectLank) =>
            setFilterOptions({
              ...filterOptions,
              recLevel: selectLank.map((option) => option.value),
            })
          }
          options={levelOption}
          placeholder="숙련도"
          isMulti
        />
      </SelectArea>
      <Text>추천 프로젝트</Text>
      <ProjectWrapper>
        <CardWrapper>
          {isSelect ? (
            // <PopularSlide {...settings}>
            <DefaultWrap>
              {list.length === 0 ? (
                <NoOption>원하시는 프로젝트가 없네요..😭</NoOption>
              ) : (
                <>
                  {list &&
                    list.map((option) => {
                      return <ProjectCard option={option} />;
                    })}
                </>
              )}
            </DefaultWrap>
          ) : (
            // </PopularSlide>
            <DefaultWrap>
              {recproject &&
                recproject.map((option) => {
                  return <ProjectCard option={option} />;
                })}
            </DefaultWrap>
          )}
        </CardWrapper>
      </ProjectWrapper>
    </Wrapper>
  );
};
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
  font-size: 30px;
  text-align: center;
  width: 900px;
  padding-top: 50px;
  padding-left: 30px;
`;
const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    font-family: "Pretendard-Regular";
    margin-top: 40px;
`;
const Filter = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const CategorySelect = styled(Select)`
  width: 270px;
  margin-right: 30px;
`;
const SelectArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Text = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 55px;
`;
const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
export default RecommendProject;
