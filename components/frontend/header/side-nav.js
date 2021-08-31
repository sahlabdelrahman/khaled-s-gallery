import { useRouter } from "next/router";
import { useContext } from "react";
import Opens from "../../../context/opens";

import NavLink from "./navLink";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideNav(anchor, state, setState) {
  const router = useRouter();

  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    () => setState({ ...state, [anchor]: open });
  };

  const { setOpenContact, openContact } = useContext(Opens);

  const handleClickOpen = () => {
    setOpenContact(true);
  };

  const handleClose = () => {
    setOpenContact(false);
  };

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className="flex flex-col uppercase font-normal text-sm p-5">
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
        <li>
          {openContact ? (
            <button
              className="transition-all duration-1000 mt-4 px-5 py-2 cursor-pointer bg-pink-primary shadow-button text-bold text-white"
              onClick={handleClose}
              aria-label="close"
            >
              x
            </button>
          ) : (
            <button
              className="uppercase transition-all duration-1000 mt-4 px-5 py-2 cursor-pointer bg-pink-primary shadow-button text-white"
              onClick={handleClickOpen}
            >
              contact
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
