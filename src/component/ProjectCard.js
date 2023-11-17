import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Heart} from "../Img/WishHeart.svg";

const ProjectCard = ({data}) => {
    const [isWished, setIsWished] = useState(false);
    const wishHandler =() =>{
        setIsWished(!isWished);
    }
      
  return (
    <Card>
        <ProjectDetail/>
        <Title>{data&&data.title}</Title>
        <LikedButton onClick={wishHandler}>
            {isWished?<Heart width="20px" fill="red" stroke="red"/>:<Heart width="20px"/>}
        </LikedButton>
    </Card>
  )
}

const Card = styled.div`
    position: relative;
    width: 270px;
    height: 180px;
    margin: 10px;
    font-family: "Pretendard-Regular";
    border: 2px solid #c8c8c8;
    border-radius: 20px;
    &:hover{
        transform: scale(1.03);
    }
`;
const ProjectDetail = styled.div`
    width: 90%;
    height: 55%;
    background-color: #aaaaaa;
    margin: 15px auto 0 auto;
`;
const Title = styled.div`
    width: 90%;
    font-weight: bold;
    font-size: 15px;
    margin: 4px auto 10px auto;
    text-align: left;
`;
const LikedButton = styled.button`
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    bottom: 10px;
    right: 10px;
    background-color: white;
    border: none;
    &:hover{
        color: pink;
    }
`;

export default ProjectCard