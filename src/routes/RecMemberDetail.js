import React, { useEffect } from "react";
import MemberCard from "../components/MemberCard";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FadeLoader } from "react-spinners";
import axios from "axios";

const RecMemberDetail = () => {
  const { pid } = useParams();
  const [backEnd, setBackEnd] = useState("");
  const [frontEnd, setFrontEnd] = useState("");
  const [mobile, setMobile] = useState("");
  const [design, setDesign] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/rec-teammate/${pid}`
        );
        console.log(response.data);
        setBackEnd(response.data.BackEnd);
        setFrontEnd(response.data.FrontEnd);
        setMobile(response.data.Mobile);
        setDesign(response.data.Design);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [pid]);

  useEffect(() => {
    console.log("BackEnd", backEnd);
    console.log("FrontEnd", frontEnd);
    console.log(mobile);
    console.log(design);
  }, [backEnd, frontEnd, mobile, design]);

  if (isLoading) {
    return (
      <>
        <div>로딩 중..</div>
        <FadeLoader color="blue" size={10} />
      </>
    );
  }
  return (
    <RecMemWrap>
      <Title>추천 팀원</Title>
      <CardWrap>
        <BackEndContainer>
          <h4 style={{ display: backEnd !== undefined ? "block" : "none" }}>
            백엔드 팀원 추천
          </h4>
          {backEnd !== undefined ? (
            <Wrapper>
              {backEnd &&
                backEnd.map((data) => {
                  return <MemberCard data={data} />;
                })}
            </Wrapper>
          ) : null}
        </BackEndContainer>
        <FrontEndContainer>
          <h4 style={{ display: frontEnd !== undefined ? "block" : "none" }}>
            프론트엔드 팀원 추천
          </h4>
          {frontEnd !== undefined ? (
            <Wrapper>
              {frontEnd &&
                frontEnd.map((data) => {
                  return <MemberCard data={data} />;
                })}
            </Wrapper>
          ) : null}
        </FrontEndContainer>
        <MobileContainer>
          <h4 style={{ display: mobile !== undefined ? "block" : "none" }}>
            모바일 팀원 추천
          </h4>
          {mobile !== undefined ? (
            <Wrapper>
              {mobile &&
                mobile.map((data) => {
                  return <MemberCard data={data} />;
                })}
            </Wrapper>
          ) : null}
        </MobileContainer>
        <DesignContainer>
          <h4 style={{ display: design !== undefined ? "block" : "none" }}>
            디자인 팀원 추천
          </h4>
          {design !== undefined ? (
            <Wrapper>
              {design &&
                design.map((data) => {
                  return <MemberCard data={data} />;
                })}
            </Wrapper>
          ) : null}
        </DesignContainer>
      </CardWrap>
    </RecMemWrap>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  gap: 40px;
`;
const RecMemWrap = styled.div`
  position: relative;
  width: 80%;
  text-align: center;
  margin: 50px 0 0 30px;
  font-family: "Pretendard-Regular";
`;
const Title = styled.h3`
  position: absolute;
  left: 140px;
  font-size: 25px;
`;
const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 140px;
`;
const BackEndContainer = styled.div`
  text-align: left;
  margin-bottom: 50px;
  h4 {
    font-size: 20px;
  }
`;
const FrontEndContainer = styled(BackEndContainer)``;
const MobileContainer = styled(BackEndContainer)``;
const DesignContainer = styled(BackEndContainer)``;

export default RecMemberDetail;
