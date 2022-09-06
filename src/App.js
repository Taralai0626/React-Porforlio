import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Skill from "./routes/Skill";
import Education from "./routes/Education";
import Project from "./routes/Project";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;