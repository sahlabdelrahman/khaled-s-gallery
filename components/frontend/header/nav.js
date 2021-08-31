import { useContext } from "react";
import Opens from "../../../context/opens";

import { useRouter } from "next/router";

import IsLoading from "../../../context/isLoading";

import NavLink from "./navLink";

import ContactList from "../contact/index";

export default function Nav() {
  const { isLoading } = useContext(IsLoading);

  const { setOpenContact, openContact } = useContext(Opens);

  const router = useRouter();

  const handleClickOpen = () => {
    setOpenContact(true);
  };

  const handleClose = () => {
    setOpenContact(false);
  };

  return (
    <ul
      className={`${
        !isLoading ? "opacity-100" : "opacity-0"
      } hidden flex-col lg:flex lg:flex-row lg:justify-between lg:items-center uppercase font-normal text-sm transition-all duration-1000 ease-in-out`}
    >
      <>
        <NavLink
          status={`${router.pathname == "/" ? "active" : ""}`}
          href="/"
          text="portofolio"
        />
        <NavLink
          status={`${router.pathname == "/projects" ? "active" : ""}`}
          href="/projects"
          text="projects"
        />
        <NavLink
          status={`${router.pathname == "/documenting" ? "active" : ""}`}
          href="/documenting"
          text="documenting"
        />
        <NavLink
          status={`${router.pathname == "/youtube" ? "active" : ""}`}
          href="/youtube"
          text="youtube"
        />
        <NavLink
          status={`${router.pathname == "/about" ? "active" : ""}`}
          href="/about"
          text="about"
        />
      </>

      <li
        // onClick={handleOpenContact}
        className={` 
        
         `}
      >
        {openContact ? (
          <button
            className="transition-all duration-1000 ml-4 px-5 py-2 cursor-pointer bg-pink-primary shadow-button text-white"
            onClick={handleClose}
            aria-label="close"
          >
            x
          </button>
        ) : (
          <button
            className="uppercase transition-all duration-1000 ml-4 px-5 py-2 cursor-pointer bg-pink-primary shadow-button text-white"
            onClick={handleClickOpen}
          >
            contact
          </button>
        )}
      </li>
    </ul>
  );
}
