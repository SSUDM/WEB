import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const { REACT_APP_API_URL: URL } = process.env;

    const { register, handleSubmit, getValues, watch, formState:{errors}, setError } = useForm();
    const [isSend, setIsSend] = useState(false);
    const [authenticate, setAuthenticate] = useState(false);
    const [nickNameCheck, setNickNameCheck] = useState(false);
    const [authCode, setAuthCode ] = useState("");
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if(nickNameCheck === false){
            alert("닉네임 중복 체크를 해주세요");
            setError("nickname",{
                message:"닉네임 중복 체크를 해주세요"
            });
            return;
        }
        if(isSend === false){
            alert("이메일 인증을 진행해주세요!");
            setError("email",{
                message:"이메일 인증을 해주세요"
            })
        }
        if(authenticate) {
            axios
              .post('http://3.36.198.159:8080/api/register', {
                userName: data.username,
                nickName: data.nickname,
                email: data.email,
                password: data.password,
              })
              .then((res) => {
                console.log(res);
                navigate("/login");
              })
              .catch((err) => {
                console.log(err);
              });
        }else {
            setError("checkNum", {
              message: "올바른 인증번호를 재입력해주세요",
            });
        }
        console.log(data);
    };

    //서버에 유저가 입력한 닉네임 전송 후 중복 체크하는 로직
    const checknickname = async(e) =>{
        console.log(watch('nickname'));
        e.preventDefault();
        if(watch('nickname')===""){
            setError('nickname',{message:"닉네임을 입력해주세요"});
            return;
        }
        try{
            const res = await axios.post('http://3.36.198.159:8080/api/register/check-nickname',{
                nickName : watch('nickname')
            });
            alert("사용 가능한 닉네임입니다.");
            setNickNameCheck(true);
            console.log(res);
        }
        catch(err){
            setError("nickname", { message : err.response.data });
            setNickNameCheck(false);
            console.log(err);
        }
    };

    //유저가 입력한 이메일을 서버로 보내주는 로직
    const sendCheckNum = async(e) =>{
        console.log(watch('email'));
        e.preventDefault();
        if(watch('email')===""){
            setError('email',{message:"이메일을 입력해주세요"});
            return;
        }
        try{
            const res = await axios.post('http://3.36.198.159:8080/api/register/check-email',{
                email : watch('email')
            });
            setIsSend(true);
            console.log(res.data);
            setAuthCode(res.data);
        }
        catch(err){
            setError("email", { message : err.response.data});
            setIsSend(false);
            console.log(err);
        }
    };

    //사용자가 입력한 인증 번호가 서버에서 받은 인증 번호와 같은 지 확인하는 로직
    const onClickCheckNum = (e) =>{
        console.log(watch('checknum'));
        e.preventDefault();
        if(watch('checknum')===""){
            setError('checknum',{message:"인증번호를 입력해주세요."});
            return;
        }
        if(authCode !== parseInt(watch('checknum'))){
            setError('checknum',{message:"인증번호가 틀립니다."})
            setAuthenticate(false);
        }
        else{
            setAuthenticate(true);
            alert("인증되었습니다!");
        }
    };

    return (
        <WrapBox>
            <form onSubmit={handleSubmit(onSubmit)}>
                <H3>회원가입</H3>

                <div>
                <Label htmlFor="username">이름</Label>
                <Input
                    id='username'
                    type="text"
                    placeholder="이름"
                    {...register('username', {
                        required: "이름은 필수 입력입니다.",
                        minLength: { value: 2, message: '이름은 2자 이상이어야 합니다.' },
                    })}
                />
                <InputAlert isVisible={!!errors.username}>{errors.username?.message}</InputAlert>
                </div>

                <div>
                <Label htmlFor="nickname">닉네임</Label>
                <DoubleCheck>
                    <input
                        id='nickname'
                        type="text"
                        placeholder="닉네임"
                        {...register('nickname', {
                            required: "닉네임은 필수 입력입니다.",
                            minLength: { value: 1, message: '닉네임은 1자 이상이어야 합니다.' },
                        })}
                    />
                    <button onClick={checknickname}>중복확인</button>
                </DoubleCheck>
                {nickNameCheck?<AlertMessage>사용가능한 닉네임입니다^^</AlertMessage>:<InputAlert isVisible={!!errors.nickname}>{errors.nickname?.message}</InputAlert>}
                </div>

                <div>
                <Label htmlFor="email">회원 아이디</Label>
                <DoubleCheck>
                    <input
                        id="email"
                        type="email"
                        placeholder='이메일 입력'
                        {...register('email', {
                            required: "이메일은 필수 입력입니다.",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "대소문자 구분하여 test@email.com 형식으로 입력해주세요",
                            },
                        })}
                    />
                    {/* <button style={{marginRight:"40px"}}onClick={emailcheck}>중복확인</button> */}
                    <button onClick={sendCheckNum}>인증</button>
                </DoubleCheck>
                {/* {emailCheck?<AlertMessage>사용가능한 이메일입니다.</AlertMessage>:<InputAlert isVisible={!!errors.email}>{errors.email?.message}</InputAlert>} */}
                {isSend?<AlertMessage>입력하신 이메일로 인증번호를 전송했습니다.</AlertMessage>:<InputAlert isVisible={!!errors.email}>{errors.email?.message}</InputAlert>}
                </div>

                <div>
                <Label htmlFor="checknum">인증 번호</Label>
                <DoubleCheck>
                    <input
                        id="checknum"
                        placeholder='인증 번호 입력'
                        {...register('checknum',{
                            required: "인증 번호를 입력해주세요.",
                            minLength: { value: 6, message: '인증번호 6자리를 입력해주세요' },
                        })}
                    />
                    <button onClick={onClickCheckNum}>확인</button>
                </DoubleCheck>
                {authenticate?<AlertMessage>인증되었습니다.</AlertMessage>:<InputAlert isVisible={!!errors.checknum}>{errors.checknum?.message}</InputAlert>}
                </div>

                <div>
                <Label htmlFor="password">비밀번호</Label>
                <AuthInput
                    id="password"
                    placeholder='비밀번호 입력'
                    {...register('password', {
                        required: "비밀번호는 필수 입력입니다.",
                        pattern:{
                            value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            message: "영문 대소문자, 숫자, 특수문자(@$!%*#?&)를 혼합하여 8자 이상으로 입력해주세요"
                        }
                    })}
                />
                <InputAlert isVisible={!!errors.password}>{errors.password?.message}</InputAlert>
                </div>

                <div>
                    <Label htmlFor='passwordCheck'>비밀번호 확인</Label>
                    <AuthInput
                        id='passwordCheck'
                        placeholder='비밀번호 확인'
                        {...register("passwordCheck",{
                            required:"필수 입력입니다.",
                            validate:{
                                check : val=>{
                                    if(getValues("password") !== val){
                                        return "비밀번호가 다릅니다."
                                    }
                                }
                            }
                        })}
                    />
                    <InputAlert isVisible={!!errors.passwordCheck}>{errors.passwordCheck?.message}</InputAlert>
                </div>
                
                <div>
                <AuthButton type="submit">회원가입</AuthButton>
                </div>
            </form>
        </WrapBox>
    );
}

const WrapBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 13%;
    left: 35%;
    font-family: "Pretendard-Regular";
`;
const H3 = styled.h3`
    margin-bottom: 30px;
    line-height: 1.5px;
    font-weight: bold;
`;
const Label = styled.label`
    margin-top: 20px;
`;
const Input = styled.input`
    display: block;
    width: 400px;
    height: 40px;
    padding: 0 15px;
    margin-top: 5px;
    border: none;
    border-radius: 10px;
    outline: none;
    background-color: #dcdcdc;
    opacity: 0.8;
    &:focus {
        color: black;
    }
`;
const AuthInput = styled(Input).attrs({ type: 'password' })`
    &::placeholder {
        letter-spacing: 0px;
    }
    letter-spacing: 5px;
`;
const AuthButton = styled.button`
    display: block;
    width: 150px;
    height: 40px;
    margin-left: 135px;
    margin-top: 20px;
    background-color: #dcdcdc;
    border-radius: 30px;
    color: white;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover{
        background-color: #d2d2d2;
    }
`;
const AlertMessage = styled.span`
    display: inline-block;
    padding: 10px 0 0;
    margin-bottom: 10px;
    font-size: 13px;
    color: green;
`;
const InputAlert = styled(AlertMessage)`
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    color: #FF5050;
`;
const DoubleCheck = styled.div`
    position: relative;
    input{
        width: 400px;
        height: 40px;
        padding: 0 15px;
        margin-top: 5px;
        border: none;
        border-radius: 10px;
        outline: none;
        background-color: #dcdcdc;
        opacity: 0.8;
        &:focus {
            color: black;
        }
    }
    button{
        position: absolute;
        bottom: 7px;
        right: 7px;
        padding: 6px;
        border: none;
        border-radius: 20px;
        color: white;
        background-color: #969696;
        cursor: pointer;
        font-size: 12px;
        &:hover{
            background-color: #aaaaaa;
        }
    }
`;

export default AuthPage;