import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Heart} from "../Img/WishHeart.svg";
import { useNavigate } from 'react-router-dom';

const MemberCard = ({data}) => {
  
  const navigate = useNavigate();
  const gotoProfile =() =>{
    navigate(`/profile/${data.uid}`);
  }
  return (
    <Card onClick={gotoProfile}>
        <MemberImg src={data?.userImg !=="https://developermatching.s3.ap-northeast-2.amazonaws.com/"?data?.userImg : "../../img/default_profile.png"}/>
        <Title>{data?.nickName}</Title>
        <Rank style={{color: data.level ==="JUNIOR" ? 'red' : data.level === "SENIOR" ? 'blue' : 'green'}}>{data?.level}</Rank>
        <Line/>
        <Tech>
        {data?.tech ? (
                        <div>
                            {data.tech.map((tech, index) => (
                            <span key={index} style={{ display: index < 3 ? 'inline-block' : 'none' }} >{tech}</span>
                            ))}
                        </div>) 
                        : null}
        </Tech>
        <Present>{data?.introduction?data?.introduction:'정상을 향해 나아가는 개발자 차현수'}</Present>
    </Card>
  )
}

const Card = styled.div`
    position: relative;
    width: 270px;
    height: 250px;
    margin: 10px;
    font-family: "Pretendard-Regular";
    border: 2px solid #c8c8c8;
    border-radius: 20px;
    &:hover{
        transform: scale(1.03);
    }
`;
const MemberImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: #aaaaaa;
    margin: 10px 0 0 10px;
`;
const Title = styled.h2`
    position: absolute;
    top: 20px;
    left: 130px;
    font-weight: bold;
    font-size: 23px;
    margin: 4px auto 10px auto;
`;
const Rank = styled.div`
    position: absolute;
    top: 50px;
    left: 130px;
    font-size: 13px;
    font-weight: bold;
    margin-top: 10px;
`;
const Line = styled.div`
    border-bottom: 1px solid #c8c8c8;
    margin-top: 15px;
`;
const Tech = styled.div`
    display: flex;
    margin-left: 10px;
    span{
        background-color: black;
        color: white;
        border-radius: 5px;
        font-size: 12px;
        margin-top: 8px;
        margin-right: 5px;
        padding: 3px;
    }
`;
const Present = styled.div`
    margin-top: 20px;
    padding: 10px;
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

export default MemberCard