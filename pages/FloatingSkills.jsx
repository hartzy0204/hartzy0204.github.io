import IconCloud from "@/components/ui/icon-cloud";
import Skill from "./components/Skills";

export default function FloatingSkills() {
  const slugs = [
    "javascript",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "firebase",
    "nginx",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "vuedotjs",
  ];
  
  return (
    <div className="flex justify-center flex-wrap">
      <div className="w-1/2">
        <div className="flex justify-center items-start h-full">
          <div className="relative flex max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-zinc-950 px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <p className="text-4xl">Skills</p>
          <div className="flex flex-wrap">
            <div className="mx-2">
              <Skill
                skills={() => ({
                  category: "Programming Languages",
                  items: ["JavaScript", "PHP"],
                })}
              />
              <Skill
                skills={() => ({
                  category: "Frontend Development",
                  items: [
                    "Vue.js",
                    "React.js",
                  ],
                })}
              />
              <Skill
                skills={() => ({
                  category: "Backend Development",
                  items: ["Laravel", "RESTful APIs"],
                })}
              />
              <Skill
                skills={() => ({
                  category: "CSS Framework commonly used",
                  items: ["Ant Design", "Material UI", "Element-Plus UI","Tailwind CSS",],
                })}
              />
            </div>
            <div>
              <Skill
                skills={() => ({
                  category: "Database Management",
                  items: ["MySQL", "Firebase"],
                })}
              />
              <Skill
                skills={() => ({
                  category: "Mobile Development",
                  items: ["React Native"],
                })}
              />
              <Skill
                skills={() => ({
                  category: "SDLC",
                  items: [
                    "Agile Development",
                  ],
                })}
              />
              <Skill
                skills={() => ({
                  category: "UX/UI Design",
                  items: [
                    "Figma"
                  ],
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
