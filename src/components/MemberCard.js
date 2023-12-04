import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Heart } from "../Img/WishHeart.svg";
import { useNavigate } from "react-router-dom";

const MemberCard = ({ data }) => {
  const navigate = useNavigate();
  const gotoProfile = () => {
    navigate(`/profile/${data.uid}`);
  };
  return (
    <Card onClick={gotoProfile}>
      <MemberImg
        src={
          data?.userImg !==
          "https://developermatching.s3.ap-northeast-2.amazonaws.com/"
            ? data?.userImg
            : "../../img/default_profile.png"
        }
      />
      <Title>{data?.nickName}</Title>
      <Rank
        style={{
          backgroundColor:
            data.level === "JUNIOR"
              ? "#f08080"
              : data.level === "SENIOR"
              ? "#add8e6"
              : "#90ee90",
        }}
      >
        {data?.level}
      </Rank>
      <Tech>
        {data?.tech ? (
                        <div>
                            {data.tech.map((tech, index) => (
                            <span key={index} style={{ display: index < 3 ? 'inline-block' : 'none' }} >{tech}</span>
                            ))}
                        </div>) 
                        : null}
        </Tech>
        <Present>{data?.introduction?data?.introduction:'자기 소개가 없습니다.'}</Present>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 270px;
  height: 190px;
  margin: 10px;
  font-family: "Pretendard-Regular";
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  &:hover {
    transform: scale(1.03);
  }
  cursor: pointer;
`;
const MemberImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #aaaaaa;
  margin: 20px 20px 10px 20px;
  object-fit: cover;
`;
const Title = styled.h2`
  position: absolute;
  top: 20px;
  left: 110px;
  font-weight: bold;
  font-size: 20px;
  margin: 4px auto 10px auto;
`;
const Rank = styled.div`
  position: absolute;
  color: white;
  padding: 3px 5px;
  border-radius: 10px;
  top: 45px;
  left: 107px;
  font-size: 13px;
  margin-top: 10px;
`;
const Line = styled.div`
  border-bottom: 1px solid #c8c8c8;
  margin-top: 15px;
`;
const Tech = styled.div`
  display: flex;
  margin-left: 15px;
  span {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0 5px;
    color: black;
    border-radius: 10px;
    font-size: 10px;
    margin-right: 5px;
    padding: 3px;
  }
`;
const Present = styled.div`
  margin: 15px;
  font-size: 15px;
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
  &:hover {
    color: pink;
  }
`;

export default MemberCard;
