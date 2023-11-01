import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from "styled-components";

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
    background-color: #dcdcdc;
    &:focus {
    color: black;
    }
`;
const PwInput = styled(EmailInput).attrs({ type: 'password' })`
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
    background-color: #FFCAD5;
    border-radius: 30px;
    color: white;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover{
    background-color: #FFB6C1;
    }
`;
const InputAlert = styled.span`
    display: inline-block;
    padding: 10px 0 0;
    font-size: 13px;
    color: #FF5050;
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

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  const navigate = useNavigate();

  const gotoSearchPW =() =>{
    navigate('/search');
  }

  const gotoAuth =() =>{
    navigate('/auth');
  }
  const onSubmit = data => {
    console.log(data);
    // fetch(`api 주소 들어갈 자리`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     email: data.email,33
    //     password: data.password,
    //   }),
    // })
    //   .then(res => {
    //     const resJson = res.json();
    //     if (res.status !== 200) {
    //       setShowPopup(true);
    //     }
    //     return resJson;
    //   })
    //   .then(json => {
    //     if (json.jwt) {
    //       const newToken = json.jwt;
    //       const userName = json.username;
    //       localStorage.setItem('userId', newToken);
    //       alert(`${userName}님, 환영합니다!`);
    //       navigate('../');
    //     }
    //   });
  };

  return (
    <WrapBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <H3>로그인</H3>
        <div>
          <EmailInput
              id="email"
              type="email"
              placeholder='email'
              {...register('email', {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "이메일 형식에 맞지 않습니다."
                  },
              })}
          />
          {errors.email && <InputAlert>{errors.email.message}</InputAlert>}
        </div>
        <div>
          <PwInput
              id="password"
              placeholder='password'
              {...register('password', {
                  required: "비밀번호는 필수 입력입니다.",
                  pattern:{
                      value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message: "비밀번호 형식이 맞지 않습니다."
                  }
              })}
          />
        {errors.password && <InputAlert>{errors.password.message}</InputAlert>}
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
  )
}

export default LoginPage