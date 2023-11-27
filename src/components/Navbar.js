import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "./atom";

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
