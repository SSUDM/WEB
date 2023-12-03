import React, { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
<<<<<<< HEAD
import { ProjectActiveState } from "../components/atom";
import axios from "axios";
import styled from "styled-components";
import Select from "react-select";
import ProjectCard from "../components/ProjectCard";

const MyProject = () => {
  const projectactiveOption = useRecoilValue(ProjectActiveState);
  const [projectActive, setProjectActive] = useState("");
  useEffect(() => {
    console.log(projectActive);
  }, [projectActive]);
=======
import { ProjectActiveState } from '../components/atom';
import styled from "styled-components";
import Select from "react-select";
import { useQuery } from 'react-query';
import {
  getMakeProject,
  getJoinProject,
  getLikeProject,
  getRequestProject,
  getCooperateProject,
  getDoneProject,
} from "../api"
import ProjectCard from '../components/ProjectCard';
import { FadeLoader } from 'react-spinners';

const MyProject = () => {
  const projectactiveOption = useRecoilValue(ProjectActiveState);
  const [ projectActive, setProjectActive ] = useState("");
  const [list, setList] = useState('');
  const [isCoopReq, setIsCoopReq] = useState(true);
  
  const { isLoading, data:cooperateproject } = useQuery({
    queryKey: ["cooperateproject"],
    queryFn: ()=>getCooperateProject(),
    refetchOnWindowFocus: false,
  });

  const { data:makeproject } = useQuery({
    queryKey: ["makeproject"],
    queryFn: ()=>getMakeProject(),
    refetchOnWindowFocus: false,
  });

  const { data:joinproject } = useQuery({
    queryKey: ["joinproject"],
    queryFn: ()=>getJoinProject(),
    refetchOnWindowFocus: false,
  });

  const { data:likeproject } = useQuery({
    queryKey: ["likeproject"],
    queryFn: ()=>getLikeProject(),
    refetchOnWindowFocus: false,
  });

  const { data:requestproject } = useQuery({
    queryKey: ["requestproject"],
    queryFn: ()=>getRequestProject(),
    refetchOnWindowFocus: false,
  });


  const { data:doneproject } = useQuery({
    queryKey: ["doneproject"],
    queryFn: ()=>getDoneProject(),
  })


  useEffect(()=>{
    console.log(cooperateproject);
    setList(cooperateproject);
  },[isLoading])

  useEffect(()=>{
    switch(projectActive){
      case "협업 요청 온 프로젝트":
        setList(cooperateproject);
        setIsCoopReq(true);
        break;
      case "만든 프로젝트":
        setList(makeproject);
        setIsCoopReq(false);
        break;
      case "참여중인 프로젝트":
        setList(joinproject);
        setIsCoopReq(false);
        break;
      case "찜한 프로젝트":
        setList(likeproject);
        setIsCoopReq(false);
        break;
      case "승인 대기중인 프로젝트":
        setList(requestproject);
        setIsCoopReq(false);
        break;
      case "참여 했던 프로젝트":
        setList(doneproject);
        setIsCoopReq(false);
        break;
      default:
        break;
    }
  },[projectActive])
  
  useEffect(()=>{
    console.log(list);
    console.log(isCoopReq);
  },[list])

  if(isLoading){
    return (
      <Load>
        <FadeLoader/>
      </Load>
    )
  }
>>>>>>> 331079f854338295e59ef1ae23a9172071967c3d
  return (
    <Wrapper>
      <Title>내 프로젝트</Title>
      <ActiveSelect
        defaultValue={projectactiveOption[0]}
        options={projectactiveOption}
        placeholder="프로젝트 종류"
        onChange={(data) => setProjectActive(data.value)}
      />
<<<<<<< HEAD
      <ProjectCard />
    </Wrapper>
  );
};
=======
      <DefaultWrap>
        {list&&list.length === 0 ? <NoProject>프로젝트 목록이 없습니다..</NoProject> 
          : 
          <>
            {list&&list.map((option)=>{
              return (
                <ProjectCard option={option} checkcoop={isCoopReq}/>
              )
            })}
          </>
        }
      </DefaultWrap>
    </Wrapper>
  )
}
const Load = styled.div`
  margin-left: 650px;
  margin-top: 300px;
`;
>>>>>>> 331079f854338295e59ef1ae23a9172071967c3d
const Wrapper = styled.div`
  position: relative;
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
  margin: 0 0 50px 670px;
`;
const DefaultWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 280px);
    gap: 0px 30px;
    margin-top: -10px;
`;
const NoProject = styled.div`
    position: absolute;
    top: 270px;
    left: 280px;
    font-size: 30px;
`;
export default MyProject;
