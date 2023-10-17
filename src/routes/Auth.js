import React from 'react';
import { useForm } from "react-hook-form";
import styled from "styled-components";

const WrapBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 25%;
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
    margin-bottom: 10px;
    font-size: 13px;
    color: #FF5050;
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

const AuthPage = () => {
    const { 
        register,
        handleSubmit,
        getValues,
        formState:{errors} 
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
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
                <Label htmlFor="email">회원 아이디</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder='이메일 입력'
                    {...register('email', {
                        required: "이메일은 필수 입력입니다.",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "이메일 형식에 맞지 않습니다."
                        },
                    })}
                />
                <InputAlert isVisible={!!errors.email}>{errors.email?.message}</InputAlert>
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
                            message: "비밀번호 형식이 맞지 않습니다."
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

export default AuthPage