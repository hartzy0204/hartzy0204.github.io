import { Description } from "@mui/icons-material";
import Header from "./components/Header";
import FloatingSkills from "./FloatingSkills";
import MainContent from "./MainContent";
import Projects from "./Projects";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <div>
        <Header />
      </div>
      <div className="h-[90vh]">
        <MainContent />
      </div>
      <div className="h-screen">
        <FloatingSkills />
      </div>
      <div className="h-screen">
        <Project />
      </div>
      <div className="h-screen">
        <div className="flex justify-center text-4xl mt-11">Contact</div>
        <Contact />
      </div>
    </div>
  );
}
