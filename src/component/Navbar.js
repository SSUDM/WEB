import styled from "styled-components";
import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const NavbarStyle = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    font-family: "Pretendard-Regular";
    box-shadow: 5px 5px 6px 0;
`;
const H1 = styled.h1`
    width: 10%;
    margin-right: 8%;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
`;
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;  // Adjust according to your needs
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;  // Adjust according to your needs
`;
const Menu = styled.p`
    margin-left: 60px;
    cursor: pointer;
    &:hover{
        background-color: #d2d2d2;
        opacity: 0.6;
    }
`;
const Login = styled.p`
    cursor: pointer;
`;

const CreateProject = styled.button`
    border-radius: 40px;
    border: 0;
    font-weight: bold;
    padding: 10px;
    margin-left: 30px;
    width: 150px;
    cursor: pointer;
    &:hover {
        outline: none;
        border: 2px solid #9E9E9E;
        background-color: #9E9E9E;
    }
`;

const Navbar = () => {
    const navigate = useNavigate();
    const goToLogin =() =>{
        navigate('/login');
    }
    const goToMain =() =>{
        navigate('/');
    }
    const goToProject =() =>{
        navigate('/project');
    }
    return (
    <NavbarStyle>
        <RightContainer>
            <H1 onClick={goToMain}>DM</H1>
            <Menu onClick={goToProject}>프로젝트</Menu>
            <Menu>팀원 찾기</Menu>
        </RightContainer>

        <LeftContainer>
            <Login onClick={goToLogin}>로그인</Login>
            <FaCircleUser size={20}/>
            <CreateProject>+프로젝트 생성</CreateProject>
        </LeftContainer>
    </NavbarStyle>
  )
}

export default Navbar