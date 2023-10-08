import styled from "styled-components";
import React from 'react';

const NavbarStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  border-bottom: 3px solid #BDBDBD;
  margin-top: 5px;
  padding-bottom: 10px;
  /* display: flex;
  flex-direction: row;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1fr 6fr 1fr 1fr;
  align-items: center;
`;
const H1 = styled.h1`
    font-size: 50px;
    font-weight: bold;
`;
const P = styled.p`
    margin-left: 60px;
    font-weight: bold;
`;
const CreateProject = styled.button`
    border-radius: 40px;
    border: 0;
    font-weight: bold;
    padding: 10px;
    width: 150px;
    &:hover {
    outline: none; /* 포커스 테두리 제거 (선택 사항) */
    border: 2px solid #9E9E9E; /* 포커스 시 테두리 스타일 */
    background-color: #9E9E9E; /* 포커스 시 배경색 변경 */
  }
`;
const Navbar = () => {
  return (
    <NavbarStyle>
        <H1>DM</H1>
        <P>프로젝트</P>
        <P>팀원 찾기</P>
        <P>로그인</P>
        <CreateProject>+프로젝트 생성</CreateProject>
    </NavbarStyle>
  )
}

export default Navbar