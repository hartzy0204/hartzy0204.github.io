"use client";

import { useState, useEffect } from "react";
import { Meteors } from "@/components/magicui/meteors";
import { DockDemo } from "./bottomDock";
import Intro from "./intro";
import { Particles } from "@/components/magicui/particles";
import WorkExperience from "./workExperience";
import Skills from "./Skills";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Projects from "./Projects";
import Contact from "./Contact";
import { supabase } from "../../utils/supabase";

export default function Home() {
  const [isOverDock, setIsOverDock] = useState(false);

  const handleVisit = async () => {
    try {
      // Get visitor's public IP
      const res = await fetch("https://api.ipify.org?format=json");
      const { ip } = await res.json();

      // Check if already exists
      const { data: existing, error: checkError } = await supabase
        .from("visitors")
        .select("id")
        .eq("ip_address", ip)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        // PGRST116 = no rows found (safe to ignore)
        console.error("Error checking visitor:", checkError);
        return;
      }

      if (!existing) {
        // Insert only if not exists
        const { error } = await supabase
          .from("visitors")
          .insert({ ip_address: ip });

        if (error) console.error("Error logging visit:", error);
        else console.log("New visitor logged:", ip);
      } else {
        console.log("Visitor already logged:", ip);
      }
    } catch (err) {
      console.error("Failed to log visitor:", err);
    }
  };

  useEffect(() => {
    handleVisit();
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Particles
            className="absolute inset-0 h-full w-full"
            quantity={100}
            ease={80}
            refresh
          />
        </div>

        <Meteors className="z-0" />

        <div className="relative z-10">
          <div className="flex justify-center items-center min-h-screen">
            <Intro />
          </div>
          <div id="work" className="pb-16">
            <div className="relative w-full flex flex-col items-center rounded-lg bg-background">
              <WorkExperience />
            </div>
          </div>
        </div>

        <div id='skills'>
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact" style={{ marginBottom: 100 }}>
          <Contact />
        </div>
      </div>

      <div
        className="fixed bottom-5 w-full flex justify-center z-50"
        onMouseEnter={() => setIsOverDock(true)}
        onMouseLeave={() => setIsOverDock(false)}
      >
        <DockDemo />
      </div>
    </div>
  );
}
