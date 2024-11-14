import { RainbowButton } from "@/components/ui/rainbow-button";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import SparklesText from "@/components/ui/sparkles-text";
import BoxReveal from "@/components/ui/box-reveal";
import HyperText from "@/components/ui/hyper-text";
import Meteors from "@/components/ui/meteors";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HandymanIcon from "@mui/icons-material/Handyman";
import MailIcon from "@mui/icons-material/Mail";
import IconCloud from "@/components/ui/icon-cloud";
import { MagicCard } from "@/components/ui/magic-card";
import TextField from "@mui/material/TextField";
import ShinyButton from "@/components/ui/shiny-button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const Home = () => {
  const slugs = [
    "typescript",
    "javascript",
    "laravel",
    "react",
    "vuedotjs",
    "inertia",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "nginx",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
  ];

  return (
    <div>
      <nav className="h-14 sticky top-0.5 z-50 border border-blue-900">
        <div className="grid grid-cols-2">
          <div>
            <SparklesText
              sparklesCount={"3"}
              className={"text-lg text-white m-2"}
              text="<Hartzy />"
            />
          </div>
          <div className="flex justify-end m-2">
            <a href="#home" className="mx-1">
              <RainbowButton>
                <HomeIcon />
              </RainbowButton>
            </a>
            <a
              href="https://github.com/hartzy0204"
              target="_blank"
              className="mx-1"
            >
              <RainbowButton>
                <GitHubIcon />
              </RainbowButton>
            </a>
            <a href="#skill" className="mx-1">
              <RainbowButton>
                <HandymanIcon />
              </RainbowButton>
            </a>
            <a
              href="#projects"
              className="mx-1"
            >
              <RainbowButton>
                <AccountTreeIcon />
              </RainbowButton>
            </a>
            <a href="#contact" className="mx-1">
              <RainbowButton>
                <MailIcon />
              </RainbowButton>
            </a>
          </div>
        </div>
      </nav>
      <div id="home">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
          <Meteors number={10} />
          <div className="grid grid-cols-2">
            <div className="text-white">
              <div className="flex items-center justify-center h-screen">
                <div>
                  <img
                    style={{ height: "400px", borderRadius: "90px" }}
                    src="bg.png"
                  ></img>
                  <div className="flex justify-center">
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                      <HyperText
                        duration={"1000"}
                        className="text-4xl font-bold text-white"
                        text="Roronoa Zoro"
                      />
                    </BoxReveal>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white">
              <div className="flex items-center justify-center h-screen">
                <BoxReveal boxColor={"#0895ff"}>
                  <div className="flex text-start mr-3">
                    I'm a software engineer focused on turning your ideas into
                    effective, user-friendly applications. I work with modern
                    web technologies like React, Vue, PHP (Laravel) to create
                    scalable, dynamic solutions. Let’s build something great
                    together!
                  </div>
                </BoxReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skill" className="bg-black h-screen">
        <div className="grid grid-cols-2 ">
          <div className="col-span-1 mt-5">
            <div className="text-white" style={{ marginTop: "75px" }}>
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <div className="text-3xl flex justify-center">
                    Technical Skills:
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="text-start">Web Development</div>
                  <div className="ml-8">
                    <ul className="list-disc">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JAVASCRIPT</li>
                    </ul>
                  </div>
                  <div className="text-start">Programming Language</div>
                  <div className="ml-8">
                    <ul className="list-disc">
                      <li>PHP</li>
                    </ul>
                  </div>
                  <div className="text-start">PHP Framework</div>
                  <div className="ml-8">
                    <ul className="list-disc">
                      <li>Laravel</li>
                    </ul>
                  </div>
                  <div className="text-start">Javascript Framework</div>
                  <div className="ml-8">
                    <ul className="list-disc">
                      <li>React.JS</li>
                      <li>Next.JS</li>
                      <li>Vue.JS(Option API, Composition API)</li>
                    </ul>
                  </div>
                  <div className="text-start">Database</div>
                  <div className="ml-8">
                    <ul className="list-disc">
                      <li>MySQL</li>
                    </ul>
                  </div>
                  <div className="text-start">Version Control</div>
                  <div className="ml-8">
                    <ul className="list-disc">
                      <li>GIT</li>
                    </ul>
                  </div>
                  <div className="text-start">Tools</div>
                  <div className="ml-8">
                    <ul className="list-disc">
                      <li>NPM</li>
                      <li>PNPM</li>
                      <li>BUN</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div
              style={{ marginTop: "95px", height: "500px" }}
              className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-gray-900 bg-gray-900  px-20 pb-20 pt-8 "
            >
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-screen mt-9" id="projects">
        <div>
          <div className="text-white flex justify-center text-5xl">
            Projects
          </div>
          <div className="grid grid-cols-3 mt-7">
            <div className="col-span-1">
              <div className="flex justify-center">
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <img src="gc.png" alt="" />
                </NeonGradientCard>
              </div>
              <div className="text-white text-lg ml-12 mt-3">
                Project Title: GIFT CHECK MONITORING SYSTEM
              </div>
              <div className="text-white ml-12 mt-2">
                <div className="text-start">Company</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Alturas Group of Companies</li>
                  </ul>
                </div>
                <div className="text-start">ROLE</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Support Programmer</li>
                  </ul>
                </div>
                <div className="text-start">Programming Language</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>PHP</li>
                  </ul>
                </div>
                <div className="text-start">Frameworks</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Laravel 11</li>
                    <li>Vue.JS</li>
                    <li>Ant Design</li>
                  </ul>
                </div>
                <div className="text-start">Date</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>2024</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center">
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <img src="vcheck.png" alt="" />
                </NeonGradientCard>
              </div>
              <div className="text-white text-lg flex ml-12 mt-3">
                Project Title: Variance Report System
              </div>
              <div className="text-white ml-12 mt-2">
                <div className="text-start">Company</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Alturas Group of Companies</li>
                  </ul>
                </div>
                <div className="text-start">ROLE</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Support Programmer</li>
                  </ul>
                </div>
                <div className="text-start">Programming Language</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>PHP</li>
                  </ul>
                </div>
                <div className="text-start">Frameworks</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Codeigniter 3</li>
                    <li>Bootstrap 5</li>
                  </ul>
                </div>
                <div className="text-start">Date</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>2024</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center">
                <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                  <img src="gc.png" alt="" />
                </NeonGradientCard>
              </div>
              <div className="text-white text-lg flex ml-12 mt-3">
                Project Title: Our Lady Of Light Shrine Parish DBMS
              </div>
              <div className="text-white ml-12 mt-2">
                <div className="text-start">Company</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Our Lady of Light Shrine Parish</li>
                  </ul>
                </div>
                <div className="text-start">ROLE</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Main Programmer</li>
                  </ul>
                </div>
                <div className="text-start">Programming Language</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>PHP</li>
                  </ul>
                </div>
                <div className="text-start">Frameworks</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Laravel 11</li>
                    <li>Vue.JS</li>
                    <li>Ant Design</li>
                  </ul>
                </div>
                <div className="text-start">Date</div>
                <div className="ml-8">
                  <ul className="list-disc">
                    <li>Oct.14, 2024</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-screen">
        <div id="contact" className="text-white">
          <div className="flex items-center justify-center h-screen">
            <div style={{ width: "900px" }}>
              <MagicCard
                className="flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor={"#262626"}
              >
                <div className="mt-3" style={{ height: "300px" }}>
                  <div>
                    <div className="flex justify-center mb-5">
                      <SparklesText text="Get In Touch" />
                    </div>
                    <div>
                      <TextField
                        style={{ width: "500px" }}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                        color="secondary"
                      />
                    </div>
                    <div className="mt-3">
                      <TextField
                        style={{ width: "500px" }}
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        color="secondary"
                        rows={4}
                      />
                    </div>
                    <div>
                      <div className="flex justify-end mt-1">
                        <ShinyButton>Submit</ShinyButton>
                      </div>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
