import styled from "styled-components";
import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const NavbarStyle = styled.header`
position: relative;
width: 100%;
height: 60px;
border-bottom: 3px solid #BDBDBD;
margin-top: 5px;
padding-bottom: 10px;
display: grid;
grid-template-columns: 1fr 1fr 6fr 0.8fr 0.3fr 1.2fr;
align-items: center;
`;
const H1 = styled.h1`
font-size: 50px;
font-weight: bold;
cursor: pointer;
`;
const P = styled.p`
margin-left: 60px;
font-weight: bold;
cursor: pointer;
&:hover {
  
}
`;
const CreateProject = styled.button`
border-radius: 40px;
border: 0;
font-weight: bold;
padding: 10px;
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
    return (
    <NavbarStyle>
        <H1 onClick={goToMain}>DM</H1>
        <P>프로젝트</P>
        <P>팀원 찾기</P>
        <P onClick={goToLogin}>로그인</P>
        <FaCircleUser size={20}/>
        <CreateProject>+프로젝트 생성</CreateProject>
    </NavbarStyle>
  )
}

export default Navbar