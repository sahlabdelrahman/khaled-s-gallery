import { useRouter } from "next/router";
import { useEffect } from "react";

import NavLink from "../../frontend/header/navLink";

export default function Nav() {
  const router = useRouter();

  return (
    <ul
      className={` hidden flex-col lg:flex lg:flex-row lg:justify-between lg:items-center uppercase font-normal text-sm transition-all duration-1000 ease-in-out`}
    >
      <>
        <NavLink
          status={`${router.pathname == "/dashboard" ? "active" : ""}`}
          href="/dashboard"
          text="portofolio"
        />
        <NavLink
          status={`${router.pathname == "/projects" ? "active" : ""}`}
          href="/projects"
          text="projects"
        />
        <NavLink
          status={`${
            router.pathname == "/dashboard/documenting" ? "active" : ""
          }`}
          href="/dashboard/documenting"
          text="documenting"
        />
        <NavLink
          status={`${router.pathname == "/dashboard/videos" ? "active" : ""}`}
          href="/dashboard/videos"
          text="youtube"
        />
        <NavLink
          status={`${router.pathname == "/about" ? "active" : ""}`}
          href="/about"
          text="about"
        />
      </>
    </ul>
  );
}
