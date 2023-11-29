import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from 'axios';
import { tokenState, loginState, nickNameState, userIdState } from '../components/atom';
import { useRecoilState } from "recoil";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [accessToken, setAccessToken] = useRecoilState(tokenState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [userID, setUserID] = useRecoilState(userIdState);
  const [userNickName, setUserNickName] = useRecoilState(nickNameState);
  const navigate = useNavigate();

  const gotoSearchPW = () => {
    navigate("/passwd");
  };
  const gotoAuth = () => {
    navigate("/auth");
  };

  const onSubmit = async (data) => {
    // console.log(data);
    try{
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`,{
        email : data.email,
        password : data.password,
      });
      const { token, uid, nickname } = res.data;
      console.log(res.data);
      console.log(token, uid, nickname);

      localStorage.setItem("accessToken", res.data.token);

      setAccessToken(res.data.token);
      setUserID(res.data.uid);
      setUserNickName(res.data.nickname);
    
      setIsLogin(true);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("로그인에 실패했습니다. 다시 입력해주세요.");
    }
  };

  return (
    <WrapBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <H3>로그인</H3>
        <div>
          <EmailInput
            id="email"
            type="email"
            placeholder="email"
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && <InputAlert>{errors.email.message}</InputAlert>}
        </div>
        <div>
          <PwInput
            id="password"
            placeholder="password"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "비밀번호 형식이 맞지 않습니다.",
              },
            })}
          />
          {errors.password && (
            <InputAlert>{errors.password.message}</InputAlert>
          )}
        </div>
        <LoginHelp>
          <p onClick={gotoSearchPW}>비밀번호 찾기</p>
          <p>|</p>
          <p onClick={gotoAuth}>회원가입</p>
        </LoginHelp>
        <div>
          <LoginButton type="submit">로그인</LoginButton>
        </div>
      </form>
    </WrapBox>
  );
};

const WrapBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 35%;
  font-family: "Pretendard-Regular";
`;
const H3 = styled.h3`
  margin-bottom: 30px;
  line-height: 1.5px;
  font-weight: bold;
`;
const EmailInput = styled.input`
  display: block;
  width: 400px;
  height: 40px;
  padding: 0 15px;
  border: none;
  border-radius: 10px;
  outline: none;
  opacity: 0.8;
  background-color: #c8e6c9;
  &::placeholder {
    color: #616161;
  }
  &:focus {
    color: black;
  }
`;
const PwInput = styled(EmailInput).attrs({ type: "password" })`
  margin-top: 30px;
  &::placeholder {
    letter-spacing: 0px;
  }
  letter-spacing: 5px;
`;
const LoginButton = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  margin-left: 135px;
  margin-top: 40px;
  background-color: #81c784;
  border-radius: 30px;
  color: white;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #66bb6a;
  }
`;
const InputAlert = styled.span`
  display: inline-block;
  padding: 10px 0 0;
  font-size: 13px;
  color: #ff5050;
`;
const LoginHelp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin-top: 40px;
  margin-right: 14px;
  cursor: pointer;
`;

export default LoginPage;
