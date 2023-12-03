import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProject from "./routes/NewProject";
import Project from "./routes/Project";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import Auth from "./routes/Auth";
import Navbar from "./components/Navbar";
import ManageMember from "./routes/ManageMember";
import FinishProject from "./routes/FinishProject";
import ReviewMember from "./routes/ReviewMember";
import NewProfile from "./routes/NewProfile";
import Main from "./routes/Main";
import RecommendProject from "./routes/RecommendProject";
import PasswordSearch from "./routes/PasswordSearch";
import RecommendMember from "./routes/RecommendMember";
import EditProject from "./routes/EditProject";
import MyProject from "./routes/MyProject";
import EditProfile from "./routes/EditProfile";
import RecMemberDetail from "./routes/RecMemberDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/newProject" element={<NewProject />} />
        <Route path="/editProject/:projectId" element={<EditProject />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/newProfile" element={<NewProfile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/project/:projectId/manageMember"
          element={<ManageMember />}
        />
        <Route path="/finishProject/:projectId" element={<FinishProject />} />
        <Route path="/reviewMember" element={<ReviewMember />} />
        <Route path="/recommend" element={<RecommendProject />} />
        <Route path="/passwd" element={<PasswordSearch />} />
        <Route path="/recmember" element={<RecommendMember />} />
        <Route path="/recmember/:pid" element={<RecMemberDetail />} />
        <Route path="/myproject" element={<MyProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
