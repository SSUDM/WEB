import styled from "styled-components";
import React, { useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState, nickNameState, userIdState } from "./atom";

const NavbarStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  font-family: "Pretendard-Regular";
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

const H1 = styled.img`
  height: 35px;
  margin-left: 10px;
  margin-right: 20px;
  cursor: pointer;
`;
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  margin-left: 15px;
`;
const RightWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  margin-right: 15px;
  span {
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
  }
`;
const Menu = styled.p`
  text-align: center;
  font-size: 15px;
  width: 100px;
  height: 36px;
  text-align: center;
  padding-top: 17px;
  margin-right: 10px;
  cursor: pointer;
  &:hover{
    border-radius: 4px;
    background-color: #dcdcdc;
    opacity: 0.9;
  }
`;
const Login = styled.p`
  cursor: pointer;
  font-size: 14px;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const CreateProject = styled.button`
  border-radius: 40px;
  border: 0;
  font-weight: bold;
  font-family: "Pretendard-Regular";
  padding: 10px;
  margin-left: 30px;
  width: 150px;
  background-color: #4754A3;
  color: white;
  cursor: pointer;
  &:hover {
    border: 0;
    background-color: #4754A3;
    color: white;
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  const isLogin = useRecoilValue(loginState);
  const nickName = useRecoilValue(nickNameState);
  const userId = useRecoilValue(userIdState);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const goToMain = () => {
    navigate("/");
  };
  
  const manageProject =() =>{
    if(isLogin){
      navigate('/myproject');
    }
    else{
      window.alert("로그인이 필요한 서비스 입니다!")
      navigate('/login');
    }
  }

  const gotoRecProject = () => {
    if(isLogin){
      navigate("/recommend");
    }
    else{
      window.alert("로그인이 필요한 서비스 입니다!")
      navigate('/login');
    }
  };
  const gotoMember = () => {
    if(isLogin){
      navigate("/recmember");
    }
    else{
      window.alert("로그인이 필요한 서비스 입니다!")
      navigate('/login');
    }
  }
  const gotoEditProfile =() =>{
    navigate(`/profile/${userId}`);
  }
  const gotoNewProject =() =>{
    if(isLogin){
      navigate('/newProject');
    }
    else{
      window.alert("로그인이 필요한 서비스 입니다!")
      navigate('/login');
    }
  }
  useEffect(()=>{
    // console.log(isLogin);
  }, []);
  return (
    <NavbarStyle>
      <LeftWrapper>
        <H1 onClick={goToMain} src={"../../img/logo.jpg"} />
        <Menu onClick={gotoRecProject}>추천 프로젝트</Menu>
        <Menu onClick={gotoMember}>추천 팀원</Menu>
        <Menu onClick={manageProject}>프로젝트 관리</Menu>
      </LeftWrapper>

      <RightWrapper>
        {isLogin ? (
          <Login>
            <span>{nickName}님 </span>환영합니다!
          </Login>
        ) : (
          <Login onClick={goToLogin}>로그인</Login>
        )}
        <FaCircleUser
          size={18}
          style={{ cursor: "pointer", marginRight: "-16px" }}
        />
        {isLogin ? <span onClick={gotoEditProfile}>내 이력서 보기</span> : null}
        <CreateProject onClick={gotoNewProject}>+프로젝트 생성</CreateProject>
      </RightWrapper>
    </NavbarStyle>
  );
};
export default Navbar;
