import React from 'react';
import MemberCard from '../components/MemberCard';
import styled from 'styled-components';
import Select from "react-select";
import {
  levelOptionState,
  positionOptionState,
  techOptionState,
} from "../components/atom";
import { useRecoilValue } from "recoil";
import { useState } from 'react';

const RecommendMember = () => {
    const positionOption = useRecoilValue(positionOptionState);
    const techOption = useRecoilValue(techOptionState);
    const levelOption = useRecoilValue(levelOptionState);

    const [positions, setPositions] = useState([]);
    const [techs, setTechs] = useState([]);
    const [level, setLevel] = useState([]);
  return (
    <RecMemWrap>
        <Title>추천 팀원</Title>
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
                onChange={(data) => setLevel(data.value)}
                options={levelOption}
                placeholder="숙련도"/>
        </SelectArea>
        <CardWrap>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
        </CardWrap>
    </RecMemWrap>
  )
}

const RecMemWrap = styled.div`
    position: relative;
    width: 80%;
    text-align: center;
    margin: 50px auto 0 auto;
    font-family: "Pretendard-Regular";
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
    margin-bottom: 400px;
`;
const Title = styled.h3`
    position: absolute;
    left: 140px;
`;
const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3,300px);
    position: absolute;
    top: 200px;
    left: 120px;
`;

export default RecommendMember