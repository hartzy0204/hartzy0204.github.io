"use client";

import React from "react";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  HomeIcon,
  MailIcon,
  BriefcaseBusiness,
  FolderDot,
  Cog,
} from "lucide-react";

const ICONS = {
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.87 10.94c.58.11.79-.25.79-.56v-1.96c-3.21.7-3.89-1.36-3.89-1.36-.53-1.35-1.29-1.71-1.29-1.71-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.53-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.3 1.18-3.11-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.19a11.03 11.03 0 015.8 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.57.23 2.73.11 3.02.73.81 1.18 1.85 1.18 3.11 0 4.42-2.7 5.39-5.27 5.67.41.36.77 1.1.77 2.22v3.29c0 .31.21.67.79.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  ),
};
export function DockDemo() {
  return (
    <Dock direction="middle">
      <DockIcon>
        <Link href="#" aria-label="Home">
          <HomeIcon className="w-5 h-5" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href="#work" aria-label="Calendar">
          <BriefcaseBusiness className="w-5 h-5" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href="#skills" aria-label="Skills">
          <Cog className="w-5 h-5" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href="#projects" aria-label="Blog">
          <FolderDot className="w-5 h-5" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          href="https://github.com/hartzy0204"
          target="_blank"
          aria-label="GitHub"
        >
          <ICONS.github className="w-5 h-5" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link href="#contact" aria-label="Email">
          <MailIcon className="w-5 h-5" />
        </Link>
      </DockIcon>
    </Dock>
  );
}
