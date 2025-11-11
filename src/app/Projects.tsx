import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const corporateProjects = [
    {
      title: "Gift Check Monitoring System",
      description:
        "A comprehensive system for tracking and managing gift checks with reporting capabilities.",
      technologies: ["PHP", "Laravel", "Vue.JS", "Ant Design"],
      gradientColor: "#3a0ca3",
    },
    {
      title: "Variance Reporting System",
      description:
        "System for analyzing and reporting variances in financial and operational data.",
      technologies: [
        "PHP",
        "Codeigniter",
        "Tailwind",
        "Vue.JS",
        "Daisy UI",
        "MySQL",
      ],
      gradientColor: "#f72585",
    },
    {
      title: "Near Expire Stock Advice",
      description:
        "Track Products with near expiration dates and provide timely advice.",
      technologies: [
        "PHP",
        "Laravel",
        "Vue.JS",
        "Ant Design",
        "React Native",
        "MySQL",
      ],
      gradientColor: "#f0884cff",
    },
  ];

  const freelanceProjects = [
    {
      title: "Our Lady of Light Shrine Parish DBMS",
      description: "Database management system for parish operations.",
      technologies: ["PHP", "Laravel", "Vue.JS", "Ant Design", "MySQL"],
      gradientColor: "#4cc9f0",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A real-time chat application with user authentication and message history.",
      technologies: ["Supabase", "React-Native"],
      gradientColor: "#934cf0ff",
    },
    {
      title: "Attendance Monitoring System",
      description:
        "A system for tracking student attendance with reporting features.",
      technologies: ["PHP", "Laravel", "Vue.JS", "Ant Design", "MySQL"],
      gradientColor: "#f04c70ff",
    },
  ];

  const renderContent = () => (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <AuroraText>
              Pro
              <LineShadowText
                className="italic px-2 sm:px-4"
                shadowColor="rgba(255, 255, 255, 1)"
              >
                jects
              </LineShadowText>
            </AuroraText>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the professional projects I've developed,
            categorized by corporate and freelance work.
          </p>
        </div>

        {/* Corporate Projects Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mr-4">
              Corporate Projects
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateProjects.map((project, index) => (
              <MagicCard
                key={`corporate-${index}`}
                gradientColor={project.gradientColor}
                className="p-6 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mt-auto">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">
                      TECHNOLOGY
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 bg-opacity-50 text-sm rounded-full text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </section>

        {/* Freelance Projects Section */}
        <section>
          <div className="flex items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mr-4">
              Freelance Projects
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
              <MagicCard
                key={`freelance-${index}`}
                gradientColor={project.gradientColor}
                className="p-6 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mt-auto">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">
                      TECHNOLOGY
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 bg-opacity-50 text-sm rounded-full text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <section ref={ref} className="w-full">
      {inView ? <BlurFade>{renderContent()}</BlurFade> : renderContent()}
    </section>
  );
}
