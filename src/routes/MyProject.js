import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilValue } from "recoil";
import { ProjectActiveState } from '../components/atom';
import axios from "axios";
import styled from "styled-components";
import Select from "react-select";
import ProjectCard from '../component/ProjectCard';

const MyProject = () => {
  const projectactiveOption = useRecoilValue(ProjectActiveState);
  const [ projectActive, setProjectActive ] = useState("");
  useEffect(()=>{
    console.log(projectActive);
  },[projectActive])
  return (
    <Wrapper>
      <Title>내 프로젝트</Title>
      <ActiveSelect
        options={projectactiveOption}
        placeholder="프로젝트 종류"
        onChange={(data)=> setProjectActive(data.value)}
      />
      <ProjectCard/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 100px 0 0 300px;
  font-family: "Pretendard-Regular";
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;
const ActiveSelect = styled(Select)`
  width: 230px;
  margin: 0 0 50px 600px;
`;
export default MyProject