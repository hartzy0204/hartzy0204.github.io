import Projects from "./Projects";

export default function Project() {
  return (
    <>
      <div>
        <div className="text-3xl flex justify-center mt-10 mb-10">Projects</div>
      </div>
      <div className="flex flex-wrap justify-between mx-2">
        <div className="w-1/4 mx-1  mt-4">
          <Projects
            project={() => ({
              title: "Gift Check Monitoring System",
              used: ["PHP", "Laravel", "Vue.JS", "Ant Design"],
            })}
          />
        </div>
        <div className="w-1/4 mx-1  mt-4">
          <Projects
            project={() => ({
              title: "Variance Reporting System ",
              used: ["PHP", "Laravel", "React JS", "Daisy UI"],
            })}
          />
        </div>
        <div className="w-1/4 mx-1  mt-4">
          <Projects
            project={() => ({
              title: "Our Lady of Light Shrine Parish DBMS",
              used: ["PHP", "Laravel", "Vue.JS", "Ant Design"],
            })}
          />
        </div>
        <div className="w-1/4 mx-1 mt-4">
          <Projects
            project={() => ({
              title: "Attendance Monitoring App",
              used: ["React Native", "Laravel", "Rest API", "MySql"],
            })}
          />
        </div>
      </div>
    </>
  );
}
