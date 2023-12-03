import React, { useEffect } from 'react';
import styled from 'styled-components';
import Select from "react-select";
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getMyProjectList } from '../api';
import { useNavigate } from 'react-router-dom';

const RecommendMember = () => {

    const [ selectProject, setSelectProject ] = useState("");
    const navigate = useNavigate();

    const { isLoading, data:selproject } = useQuery({
        queryKey: ["selproject"],
        queryFn: ()=> getMyProjectList(),
        refetchOnWindowFocus: false,
    })
    
    const projectOptions = selproject&&selproject.map((project) => ({
        value: project.title,
        label: project.title,
    }));
    
    useEffect(()=>{
        selproject&&selproject.map((data)=>{
            if(data.title === selectProject){
                console.log(data);
                navigate(`/recmember/${data.pid}`);
            }
        })
    },[selectProject])

  if(isLoading){
    return(
        <div>로딩 중..</div>
    )
  }
  return (
    <RecMemWrap>
        <Title>팀원 추천을 받고 싶은 프로젝트 목록을 고르세요!</Title>
        <SelectArea>
            <CategorySelect
                options={projectOptions}
                onChange={(data)=> setSelectProject(data.value)}
                placeholder="프로젝트 목록"/>
        </SelectArea>
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

export default RecommendMember