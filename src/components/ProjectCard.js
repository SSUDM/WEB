import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Heart} from "../Img/WishHeart.svg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginState } from './atom';
import { useRecoilValue } from 'recoil';

const ProjectCard = ({option, pop, checkcoop}) => {

    useEffect(() => {
        // 페이지 로딩 시에 로컬 스토리지에서 좋아요 상태를 확인하고 설정
        const likeStatus = localStorage.getItem(`like${option?.pid}`);
        if (likeStatus !== null) {
          setIsWished(likeStatus === 'true'); // 'true' 또는 'false'로 저장되므로 이에 맞게 설정
        }
      }, [option?.pid]);


    const [isWished, setIsWished] = useState(false);
    const wishHandler = (e) =>{
        e.stopPropagation();
        if(isLogin === false){
            window.alert("로그인 후 이용해주세요!");
            navigate('/login');
            return;
        }
        if(localStorage.getItem(`like${option.pid}`)===null){
            console.log("좋아요활성화");
            axios.post(`${process.env.REACT_APP_API_URL}/api/project/${option.pid}/activate-likes`,null,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }});
            setIsWished(true);
            localStorage.setItem(`like${option.pid}`,true);
        }
        else{ 
            console.log("좋아요비활성화");
            axios.post(`${process.env.REACT_APP_API_URL}/api/project/${option.pid}/deactivate-likes`,null,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }});
            setIsWished(false);
            localStorage.removeItem(`like${option.pid}`);
        }
    }
    const navigate = useNavigate();
    const isLogin = useRecoilValue(loginState);
    const gotoDetail =() =>{
        if(isLogin){
            navigate(`/project/${option.pid}`);
        }
        else{
            window.alert("로그인이 필요한 서비스입니다!");
            navigate('/login');
        }
    }
    const handleAccept =async(e) =>{
        e.stopPropagation();
        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/project/${option.sid}/accept-suggest-project`,null,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }});
            console.log(res);
            navigate(`/project${option.pid}`);
        }catch(err){
            console.log(err);
        }
    }
    const handleDecline =async(e) =>{
        e.stopPropagation();
        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/project/${option.sid}/reject-suggest-project`,null,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }});
            console.log(res);
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        
    },[])
  return (
    <Card onClick={gotoDetail}>
        {pop?<PopMessage>{pop}</PopMessage>:null}
        <StateMessage>{option&&option.projectStatus === "RECRUITING" ? <span>모집중</span>: option.projectStatus === "DONE"? <span>마감</span> : null}</StateMessage>
        <ProjectImg src={option?.projectImg !== "https://developermatching.s3.ap-northeast-2.amazonaws.com/" ? option?.projectImg : "../../img/project.jpg"}/>
        <Tech>
        {option?.recTech ? (
                            <div>
                                {option.recTech.map((tech, index) => (
                                <span key={index} style={{ display: index < 3 ? 'inline-block' : 'none' }} >{tech}</span>
                                ))}
                            </div>) 
                            : null}
        </Tech>
        <Part>{option?.recPart ? (
                            <div>
                                {option.recPart.map((part, index) => (
                                <span key={index} style={{ display: index < 3 ? 'inline-block' : 'none' }} >{part}</span>
                                ))}
                            </div>) 
                            : null}
        </Part>
        <Title>{option?.title}</Title>
        {checkcoop ? 
            <RequestButton style={{display:'flex'}}>
                <Accept onClick={handleAccept}>수락</Accept>
                <Decline onClick={handleDecline}>거절</Decline>
            </RequestButton>
            :
            <LikedButton onClick={(e)=>wishHandler(e)}>
                {isWished ? <Heart width="20px" fill="red" stroke="red"/> : localStorage.getItem(`like${option?.pid}`) ? <Heart width="20px" fill="red" stroke="red"/> : <Heart width="20px"/>}
            </LikedButton>
        }
    </Card>
  )
}

const Card = styled.div`
    position: relative;
    width: 270px;
    height: 300px;
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
const PopMessage = styled(StateMessage)`
    position: absolute;
    top: 0;
    right: 200px;
    background-color: red;
    color: yellow;
`;
const ProjectImg = styled.img`
    width: 243px;
    height: 110px;
    border: 1px solid #c8c8c8;
    background-color: #aaaaaa;
    margin: 15px 5px 0 12px;
`;
const Tech = styled.div`
    display: flex;
    margin-left: 10px;
    span{
        background-color: black;
        color: white;
        border-radius: 5px;
        font-size: 10px;
        margin-right: 5px;
        padding: 3px;
    }
`;
const Part = styled(Tech)`
    margin-top: 10px;
    span{
        background-color: blue;
        color: white;
        font-size: 13px;
    }
`;
const Title = styled.div`
    width: 90%;
    font-weight: bold;
    font-size: 15px;
    margin: 30px auto 10px auto;
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
const RequestButton = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;
const Accept = styled.button`
    cursor: pointer;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin-right: 2px;
    &:hover{
        opacity: 0.8;
    }
`;
const Decline = styled(Accept)`
    background-color: #D9534F;
    color: #fff;
`;
export default ProjectCard