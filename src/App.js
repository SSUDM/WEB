import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProject from "./routes/NewProject";
import Project from "./routes/Project";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import Auth from "./routes/Auth";
import Navbar from "./component/Navbar";
import MyProject from "./routes/MyProject";
import RecommendProject from "./routes/RecommendProject";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<MyProject/>}/>
        <Route path="/newProject" element={<NewProject />} />
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/recommend" element={<RecommendProject/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
