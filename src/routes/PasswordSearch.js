import React from 'react';
import styled from "styled-components";

const PasswordSearch = () => {
  return (
    <Wrapper>
      <Title>비밀번호 찾기</Title>
      <InfoMessage>가입한 이메일 주소를 입력해주세요.</InfoMessage>
      <PwInput placeholder='이메일 입력'/>
      <PwSearchBtn>비밀번호 재설정</PwSearchBtn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const InfoMessage = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 50px;
`;
const PwInput = styled.input`
  width: 450px;
  height: 30px;
  background-color: #4754A3;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 7px;
  &::placeholder{
    color: white;
  }
`;
const PwSearchBtn = styled.button`
  cursor: pointer;
  width: 250px;
  margin-top: 30px;
  background-color: #4754A3;
  color: white;
  border-radius: 20px;
  border: 0;
  padding: 15px;
  font-size: 10px;
  font-weight: bold;
  &:hover{
    background-color: #4754A3;
    opacity: 0.8;
  }
`;
export default PasswordSearch