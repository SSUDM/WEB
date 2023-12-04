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

    const projectOptions = selproject
    ? selproject
        .filter((project) => project.projectStatus === "RECRUITING")
        .map((project) => ({
          value: project.title,
          label: project.title,
        }))
    : [];

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
    height: 100px;
    flex-direction: row;
    text-align: center;
    font-family: "Pretendard-Regular";
    margin-top: 200px;
`;
const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const CategorySelect = styled(Select)`
    width: 260px;
`;
const SelectArea = styled.div`
    display: flex;
    justify-content: center;
`;

export default RecommendMember