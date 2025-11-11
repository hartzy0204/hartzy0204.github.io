import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "PHP"],
  },
  {
    title: "Frontend Development",
    skills: ["Vue.js", "React.js", "Next.js"],
  },
  {
    title: "Mobile Development",
    skills: ["React Native"],
  },
  {
    title: "Backend Development",
    skills: ["Laravel", "Codeigniter 3", "RESTful APIs"],
  },
  {
    title: "CSS Frameworks",
    skills: [
      "Ant Design",
      "Material UI",
      "Element-Plus",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Database Management",
    skills: ["MySQL", "Supabase"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Nginx", "Apache","ChatGPT", "DeepSeek"],
  },
  {
    title: "UI/UX Design",
    skills: ["Figma"],
  },
];

const slugs = [
  "javascript",
  "php",
  "vuedotjs",
  "react",
  "nextdotjs",
  "laravel",
  "nodedotjs",
  "mysql",
  "antdesign",
  "mui",
  "tailwindcss",
  "npm",
  "pnpm",
  "git",
  "nginx",
  "figma",
  "supabase",
  "apache",
];

export default function Skills() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const renderContent = () => (
    <div className="container px-4 md:px-6 mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
        <AuroraText>
          Tech
          <LineShadowText className="italic px-3" shadowColor="white">
            Stack
          </LineShadowText>
        </AuroraText>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="hidden md:flex w-full lg:w-1/2 justify-center">
          <MagicCard
            gradientColor={"#3a0ca3"}
            className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm"
          >
            <IconCloud images={images} />
          </MagicCard>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <MagicCard
                gradientColor={"#3a0ca3"}
                key={category.title}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  <AuroraText>{category.title}</AuroraText>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-900/30 text-blue-200 border border-blue-800 hover:bg-blue-800/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={ref} className="w-full min-h-screen py-12 md:py-24 lg:py-32">
      {inView ? <BlurFade>{renderContent()}</BlurFade> : renderContent()}
    </section>
  );
}
