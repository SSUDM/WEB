import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Heart} from "../Img/WishHeart.svg";
import axios from 'axios';

const ProjectCard = ({option}) => {
    const [isWished, setIsWished] = useState(false);
    console.log(option);
    const wishHandler = async() =>{
        try{
            if(isWished == false){
                // const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/project/${pId}/activate-likes`);
                // console.log(res);
                setIsWished(true);

            }
            else{
                // const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/project/${pId}/deactivate-likes`);
                // console.log(res);
                setIsWished(false);
            }
        }
        catch(err){
            console.log(err);
        }
    }
      
  return (
    <Card>
        <StateMessage>{option&&option.projectStatus === "RECRUITING" ? "모집중":null}</StateMessage>
        <ProjectImg src={option.projectImg} alt='대체이미지'/>
        <Title>{option.title}</Title>
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
    margin: 10px 10px 20px 10px;
    font-family: "Pretendard-Regular";
    border: 2px solid #c8c8c8;
    border-radius: 20px;
    &:hover{
        transform: scale(1.03);
    }
`;
const StateMessage = styled.div`
    font-size: 15px;
    margin: 5px 5px 5px 200px;
`;
const ProjectImg = styled.img`
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