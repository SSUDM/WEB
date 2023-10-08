import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import AuthPage from "./page/AuthPage";
import SearchPasswdPage from "./page/SearchPasswdPage";
import Navbar from './component/Navbar';

// 구현해야할 페이지 : 로그인 페이지, 회원가입 페이지, 비밀번호 찾기 페이지
// 상단 메뉴는 Navbar 컴포넌트 만들어서 App.js 에 넣기
// 상단 메뉴의 로그인 버튼을 누르면 로그인 페이지로 넘어가기
// 로그인 페이지에서 회원가입을 누르면 회원가입 페이지로 넘어가기
// 로그인 페이지에서 비밀번호 찾기를 누르면 비밀번호 찾기 페이지로 넘어가기
// 로그인 페이지에는 로그인 폼 필요 useform?
// 회원가입 페이지에는 회원가입 양식 필요

function App() {
  const [log, setLog] = useState("로그인");

  return(
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/auth' element={<AuthPage/>}/>
          <Route path='/search' element={<SearchPasswdPage/>}/>
        </Routes>
    </div>
  );
}

export default App;