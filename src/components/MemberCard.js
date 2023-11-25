import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Heart} from "../Img/WishHeart.svg";

const MemberCard = () => {
    const [isWished, setIsWished] = useState(false);
    const wishHandler =() =>{
        setIsWished(!isWished);
    }
  return (
    <Card>
        <MemberImg/>
        <Title>차현수</Title>
        <Rank>주니어</Rank>
        <Line/>
        <TeqList>
            <TeqItem>Java</TeqItem>
            <TeqItem>MySQL</TeqItem>
        </TeqList>
        <Present>정상을 향해 나아가는 차현수. 저는 주니어 백엔드 개발자입니다.</Present>
        <LikedButton onClick={wishHandler}>
            {isWished?<Heart width="20px" fill="red" stroke="red"/>:<Heart width="20px"/>}
        </LikedButton>
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
const MemberImg = styled.div`
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
    font-size: 25px;
    margin: 4px auto 10px auto;
`;
const Rank = styled.h4`
    position: absolute;
    top: 50px;
    left: 130px;
    font-size: 12px;
`;
const Line = styled.div`
    border-bottom: 1px solid #c8c8c8;
    margin-top: 15px;
`;
const TeqList = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;
const TeqItem = styled.div`
    border: 1px solid #aaaaaa;
    background-color: #d2d2d2;
    color: black;
    font-size: 12px;
    padding: 3px;
    margin: 5px 0 0 5px;
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