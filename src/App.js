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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/newProject" element={<NewProject />} />
        <Route path="/project" element={<Project />} />
        <Route path="/newProfile" element={<NewProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/manageMember" element={<ManageMember />} />
        <Route path="/finishProject" element={<FinishProject />} />
        <Route path="/reviewMember" element={<ReviewMember />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
