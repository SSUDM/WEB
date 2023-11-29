import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Heart} from "../Img/WishHeart.svg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginState } from './atom';
import { useRecoilValue } from 'recoil';

const ProjectCard = ({option}) => {
    const [isWished, setIsWished] = useState(false);
    const wishHandler = (e) =>{
        e.stopPropagation();
        if(isLogin === false){
            window.alert("로그인 후 이용해주세요!");
            navigate('/login');
            return;
        }
        if(isWished == false){
            console.log("좋아요활성화");
            axios.post(`${process.env.REACT_APP_API_URL}/api/project/${option.pid}/activate-likes`,null,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }});
            setIsWished(true);
        }
        else{
            console.log("좋아요비활성화");
            axios.post(`${process.env.REACT_APP_API_URL}/api/project/${option.pid}/deactivate-likes`,null,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }});
            setIsWished(false);
        }
    }
    const navigate = useNavigate();
    const isLogin = useRecoilValue(loginState);
    const gotoDetail =() =>{
        // console.log(isLogin);
        if(isLogin){
            navigate(`/project/${option.pid}`);
        }
        else{
            window.alert("로그인이 필요한 서비스입니다!");
            navigate('/login');
        }
    }
    useEffect(()=>{},[])
  return (
    <Card onClick={gotoDetail}>
        <StateMessage>{option&&option.projectStatus === "RECRUITING" ? <span>모집중</span>:null}</StateMessage>
        <ProjectImg src={option?.projectImg?option?.projectImg : "../../img/project.jpg"} alt='대체이미지'/>
        <Title>{option?.title}</Title>
        <LikedButton onClick={(e)=>wishHandler(e)}>
            {isWished?<Heart width="20px" fill="red" stroke="red"/>:<Heart width="20px"/>}
        </LikedButton>
    </Card>
  )
}

const Card = styled.div`
    position: relative;
    width: 270px;
    height: 200px;
    margin: 10px 10px 20px 10px;
    font-family: "Pretendard-Regular";
    border: 2px solid #c8c8c8;
    border-radius: 20px;
    &:hover{
        transform: scale(1.03);
        cursor: pointer;
    }
`;
const StateMessage = styled.div`
    width: 50px;
    height: 20px;
    text-align: center;
    font-size: 13px;
    color: white;
    margin: 5px 10px 5px 210px;
    padding-top: 3px;
    background-color: green;
    border-radius: 20px;
`;
const ProjectImg = styled.img`
    width: 90%;
    height: 110px;
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
`;

export default ProjectCard