import Meteors from "@/components/ui/meteors";
import BoxReveal from "@/components/ui/box-reveal";
import Image from "next/image";


export default function MainContent() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg">
      <Meteors number={30} />
      <div className="flex flex-wrap h-full">
        <div className="w-1/2 flex justify-center items-center">
          <div className="text-center">
            <Image
              src="/avatarbackground.png"
              alt="Example image"
              layout="responsive"
              width={9}
              height={9}
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="text-center">
            <BoxReveal boxColor={"#04b4e1"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                About Me<span className="text-[#04b4e1]">.</span>
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#04b4e1"} duration={0.5}>
              <p className="text-start">
                I&apos;m a passionate Software Engineer with a keen eye for
                crafting efficient, scalable, and user-centric solutions. With
                hands-on experience in modern web and software development
                technologies, I specialize in building applications that bridge
                innovation with functionality. My approach to problem-solving is
                anchored in creativity, precision, and a commitment to
                excellence.
              </p>
            </BoxReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
