"use client";

import profilepicture from "../../public/profile2.png";
import dabPose from "../../public/dabpos.png";
import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Download } from "lucide-react";
import { useState } from "react";

export default function Intro() {
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const downloadFN = () => {
    setLoading(true);
    const link = document.createElement("a");
    link.href = "CV(1).pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoading(false);
  };

  return (
    <BlurFade>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl">
          <div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-white dark:hover:border-white/40 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={isHovered ? dabPose : profilepicture}
              alt="Harvey's Profile Picture"
              width={256}
              height={256}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="text-center md:text-left space-y-4 max-w-2xl">
            <h1 className="text-3xl sm:text-center sm:text-4xl md:text-5xl font-bold flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-white">
                <AuroraText> Hi, I'm Harvey</AuroraText>
              </span>
              <span className="ml-2 text-gray-800 dark:text-white">👋</span>
            </h1>
            <BoxReveal>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-white/90">
                I'm a passionate programmer who loves building things—from
                simple interfaces to complex systems. I enjoy solving problems
                and creating efficient, user-friendly solutions. With experience
                in modern web and software development, I focus on making
                technology work for people. I take ideas and turn them into
                real, impactful applications.
              </p>
            </BoxReveal>

            <p>
              <TypingAnimation className="text-sm sm:text-base text-gray-600 dark:text-white/80 italic">
                Explore my projects, connect with me, or just say hello! I'm
                always eager to collaborate and share ideas.
              </TypingAnimation>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <RainbowButton
          disabled={loading}
          onClick={downloadFN}
          variant="outline"
        >
          Download CV <Download />
        </RainbowButton>
      </div>
    </BlurFade>
  );
}
