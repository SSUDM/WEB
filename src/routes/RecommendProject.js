import React from 'react';
import styled from "styled-components";
import ProjectCard from '../component/ProjectCard';
import { FaSearch } from "react-icons/fa";
import SelectBox from '../component/SelectBox';

const SearchBox = styled.div`
    position: relative;
    text-align: center;
    margin-top: 50px;
`;
const Input = styled.input`
    width: 640px;
    height: 20px;
    padding: 10px 0 10px 20px;
    border: none;
    border-radius: 30px;
    background-color: #c8c8c8;
    font-size: 18px;
    font-family: "Pretendard-Regular";
`;
const SearchIcon = styled.span`
    position: absolute;
    top: 11px;
    right: 30%;
`;
const RecommendProject = () => {
  return (
    <div>
        <SearchBox>
            <Input type='text'/>
            <SearchIcon><FaSearch/></SearchIcon>
        </SearchBox>
        <SelectBox/>

    </div>
  )
}

export default RecommendProject