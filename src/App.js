import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProject from "./routes/NewProject";
import Project from "./routes/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/newProject" element={<NewProject />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
