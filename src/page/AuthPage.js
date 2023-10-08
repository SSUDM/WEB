import React from 'react'
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const { register, handleSubmit, getValues, formState:{errors} } = useForm();

    // 폼 제출 시 실행되는 함수
    const onSubmit = (data) => {
      // data에는 입력 필드의 값들이 포함됩니다.
      console.log(data);
    };
  
    return (
        <WrapBox>
            <form onSubmit={handleSubmit(onSubmit)}>
                <H3>회원가입</H3>
                <div>
                <label htmlFor="username">이름</label>
                <input
                    id='username'
                    type="text"
                    placeholder="이름"
                    {...register('username', {
                        required: "이름은 필수 입력입니다.",
                        minLength: { value: 2, message: '이름은 2자 이상이어야 합니다.' },
                    })}
                />
                {errors.username && <P>{errors.username.message}</P>}
                </div>

                <div>
                <label htmlFor="email">회원 아이디</label>
                <input
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
                {errors.email && <P>{errors.email.message}</P>}
                </div>

                <div>
                <label htmlFor="password">비밀번호</label>
                <input
                    type="password"
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
                {errors.password && <P>{errors.password.message}</P>}
                </div>

                <div>
                    <label htmlFor='passwordCheck'>비밀번호 확인</label>
                    <input
                        type='password'
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
                        })}/>
                        {errors.passwordCheck && <P>{errors.passwordCheck.message}</P>}
                </div>
                
                <div>
                <Button type="submit">가입하기</Button>
                </div>
            </form>
        </WrapBox>
    );
}

const P = styled.p`
    color: red;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background: blue;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  :disabled {
    opacity: 0.2;
  }
`;
const WrapBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px;
`;
const H3 = styled.h3`
    margin-bottom: 100px;
    line-height: 1.5px;
    font-weight: bold;
`;

export default AuthPage