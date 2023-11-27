import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "./atom";

const NavbarStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  /* font-size: 18px; */
  font-family: "Pretendard-Regular";
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;
const H1 = styled.h1`
  width: 10%;
  margin-right: 8%;
  font-size: 35px;
  font-weight: 700;
  cursor: pointer;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 15px;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 15px;
`;
const Menu = styled.p`
  margin-left: 50px;
  font-size: 14px;
  cursor: pointer;
`;
const Login = styled.p`
  cursor: pointer;
  font-size: 14px;
`;

const CreateProject = styled.button`
  border-radius: 40px;
  border: 0;
  font-weight: bold;
  font-family: "Pretendard-Regular";
  padding: 10px;
  margin-left: 30px;
  width: 150px;
  background-color: #d2d2d2;
  cursor: pointer;
  &:hover {
    outline: none;
    border: 2px solid #9e9e9e;
    background-color: #c8c8c8;
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  const isLogin = useRecoilValue(loginState);
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const goToMain = () => {
    navigate("/");
  };
  const goToProject = () => {
    navigate("/project");
  };
  return (
    <NavbarStyle>
      <RightContainer>
        <H1 onClick={goToMain}>DM</H1>
        <Menu onClick={goToProject}>프로젝트</Menu>
        <Menu>팀원 찾기</Menu>
      </RightContainer>

      <LeftContainer>
        {isLogin ? (
          <Login>환영합니다!</Login>
        ) : (
          <Login onClick={goToLogin}>로그인</Login>
        )}
        <FaCircleUser size={18} />
        <Link to="/newProject">
          <CreateProject>+프로젝트 생성</CreateProject>
        </Link>
      </LeftContainer>
    </NavbarStyle>
  );
};

export default Navbar;
