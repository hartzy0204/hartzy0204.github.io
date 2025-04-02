import { useTheme } from "next-themes";
import Header from "./components/Header";
import FloatingSkills from "./FloatingSkills";
import MainContent from "./MainContent";
import Project from "./Project";
import Contact from "./Contact";
import { MagicCard } from "@/components/ui/magic-card";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div>
      <MagicCard
        className="cursor-none bg-black text-white border-black"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
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
        {/* <div className="h-screen">
          <div className="flex justify-center text-4xl mt-11">Contact</div>
          <Contact />
        </div> */}
      </MagicCard>
    </div>
  );
}
