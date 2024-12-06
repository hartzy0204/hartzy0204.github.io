import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";

export default function Projects({ project }) {
  const { theme } = useTheme();
  const projectdata = project();
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col bg-black text-white shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="h-full w-full">
          <div className="text-start mx-4 mt-4">
            <p className="text-lg text-center break-words max-w-md mx-auto">
              {projectdata.title}
            </p>
            <d className="text-lg mt-5">Technology</d>
            <ul className="list-disc pl-5 text-lg">
              {projectdata.used.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}
