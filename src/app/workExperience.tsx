"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "System Programmer II at Alturas Group of Companies",
    period: "October 2, 2023 – Present",
    description:
      "Design, develop, and maintain enterprise-grade web applications to support internal business operations and logistics. Utilize modern technologies such as React, Vue, Laravel, and MySQL to build scalable, secure, and efficient systems. Collaborate cross-functionally with analysts, QA teams, and stakeholders to deliver high-quality software solutions aligned with business goals.",
  },
  {
    title: "Freelance Fullstack Programmer",
    period: "2023 - Present",
    description:
      "Developed and maintained fullstack web applications using modern frameworks such as React, Vue, Laravel, and React Native for mobile development, along with MySQL for database management. Implemented responsive, accessible, and high-performance user interfaces. Integrated RESTful APIs and databases to deliver scalable and maintainable solutions tailored to diverse client requirements.",
  },
];

export default function WorkExperience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const renderExperiences = () => (
    <ul className="space-y-4">
      {experiences.map((exp, index) => (
        <li
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold">
            <AuroraText>{exp.title}</AuroraText>
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {exp.description}
          </p>
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={ref}>
      {inView ? (
        <BlurFade>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white ">
              <AuroraText>
                Work
                <LineShadowText className="italic px-3" shadowColor="white">
                  Experience
                </LineShadowText>
              </AuroraText>
            </h2>
            {renderExperiences()}
          </div>
        </BlurFade>
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          {renderExperiences()}
        </div>
      )}
    </div>
  );
}
