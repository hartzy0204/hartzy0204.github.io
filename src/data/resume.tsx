import { Icons } from "@/components/icons";
import { BriefcaseBusiness, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import LaravelIcon from "@/components/ui/svgs/laravel";
import PhpIcon from "@/components/ui/svgs/php";
import MysqlIcon from "@/components/ui/svgs/mysql";
import MonggoDbIcon from "@/components/ui/svgs/monggodb";
import VueIcon from "@/components/ui/svgs/vue";

export const DATA = {
  name: "Harvey Barace",
  initials: "HB",
  url: "https://hartzy0204.github.io/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm a passionate programmer who loves building things - from simple interfaces to complex systems. I enjoy solving problems and creating efficient, user-friendly solutions. With experience in modern web and software development, I focus on making technology work for people. I take ideas and turn them into real, impactful applications.",
  summary:
    "Experienced software engineer with a passion for building innovative products. Skilled in React, Vue, Next.js, Typescript, Node.js and Laravel. Proven track record of delivering high-quality software solutions and driving business growth. Strong problem-solving skills and a collaborative team player.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vue.js", icon: VueIcon },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Laravel", icon: LaravelIcon },
    { name: "PHP", icon: PhpIcon },
    { name: "MySQL", icon: MysqlIcon },
    { name: "MongoDB", icon: MonggoDbIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: BriefcaseBusiness, label: "Projects" },
    { href: "/#contact", icon: Icons.email, label: "Contact" },
    {
      href: "https://github.com/hartzy0204",
      icon: Icons.github,
      label: "GitHub",
      external: true,
    },
  ],

  work: [
    {
      company: "Alturas Supermarket Corporation",
      href: "https://alturasbohol.com/",
      badges: [],
      location: "On Site",
      title: "System Programmer II",
      logoUrl: "/agc-og-image.jpg",
      start: "October 2, 2023",
      end: "Present",
      description:
        "Design, develop, and maintain enterprise-grade web applications to support internal business operations and logistics. Utilize modern technologies such as React, Vue, Laravel, and MySQL to build scalable, secure, and efficient systems. Collaborate cross-functionally with analysts, QA teams, and stakeholders to deliver high-quality software solutions aligned with business goals.",
    },
  ],
  education: [
    {
      school: "Bohol Island State University",
      href: "https://bisu.edu.ph/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/bisu.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Variance Reporting System",
      href: "#",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A system that helps accounting and internal audit teams reconcile internal payables and receivables for inter-subsidiary transfers, identifying variances and enabling necessary adjustments.",
      technologies: [
        "Laravel",
        "TypeScript",
        "MySql",
        "TailwindCSS",
        "React.JS",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Variance.mp4",
    },
    {
      title: "Gift Check Monitoring System",
      href: "#",
      dates: "June 2024 - Jan 2025",
      active: true,
      description:
        "A monitoring system designed to manage Gift Checks issued by Alturas Supermarket Corporation, which function as cash equivalents for product redemption. The system digitizes and streamlines gift check operations to enhance efficiency, transparency, and security.",
      technologies: ["Laravel", "TypeScript", "Mysql", "TailwindCSS", "Vue.JS"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/GC.mp4",
    },
    {
      title: "Our Lady Of Light Shrine Parish Management Information System",
      href: "#",
      dates: "Sep 2024 - October 2024",
      active: true,
      description:
        "Digitizes manual paperwork and records management while providing a system to efficiently manage church record transactions.",
      technologies: [
        "Laravel",
        "TypeScript",
        "Mysql",
        "TailwindCSS",
        "React.JS",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/mis.mp4",
    },
    {
      title: "Shuttlers Option",
      href: "https://shuttlersoption.vercel.app/",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Shuttlers Option is an online badminton store dedicated to players of all levels, offering a wide selection of quality rackets, shuttlecocks, apparel, shoes, and accessories. The website provides an easy and convenient shopping experience, helping badminton enthusiasts find the right gear to improve their performance on the court.",
      technologies: [
        "Next.JS",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
        "React.JS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://shuttlersoption.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/ShuttlersOption.mp4",
    },
  ],
} as const;
