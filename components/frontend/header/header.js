import { useContext, useState, Fragment } from "react";

import IsLoading from "../../../context/isLoading";
import Opens from "../../../context/opens";

import Link from "next/link";

import Nav from "./nav";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SideNav from "./side-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const { isLoading } = useContext(IsLoading);

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { openContact, setOpenContact } = useContext(Opens);

  const handleClose = () => {
    setOpenContact(false);
  };

  return (
    <header
      className={`${
        !isLoading ? "bg-white" : "bg-black-black"
      } transition-all duration-1000 ease-in-out flex items-center fixed left-0 -top-0 w-full z-20  h-32 font-open-sans`}
    >
      <div className="container  flex justify-between items-center ">
        <h1 className="uppercase text-base font-semibold">
          <Link href="/">
            <a
              className={`${
                !isLoading ? "text-black-black" : "text-white"
              } transition-all duration-500 ease-in-out`}
            >
              ahmed khaled
              <span className="text-pink-primary text-2xl font-semibold">
                .
              </span>
            </a>
          </Link>
        </h1>
        <div className="lg:hidden">
          <Fragment>
            {openContact ? (
              <button
                className="transition-all duration-1000 ml-4 px-5 py-2 cursor-pointer bg-pink-primary shadow-button text-bold text-white"
                onClick={handleClose}
                aria-label="close"
              >
                x
              </button>
            ) : (
              <button onClick={toggleDrawer("left", true)}>menu</button>
            )}
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
              transitionDuration={500}
            >
              {SideNav("left", state, setState)}
            </SwipeableDrawer>
          </Fragment>
        </div>
        <Nav />
      </div>
    </header>
  );
}

{
  /* <li className="my-4 px-5 py-2 cursor-pointer text-center bg-pink-primary shadow-button text-white">
  
  <Fragment key={"bottom"}>
    <button onClick={toggleDrawer("bottom", true)}>bottom</button>
    <SwipeableDrawer
      anchor={"bottom"}
      open={state["bottom"]}
      onClose={toggleDrawer("bottom", false)}
      onOpen={toggleDrawer("bottom", true)}
    >
      {ContactList("bottom", state, setState)}
    </SwipeableDrawer>
  </Fragment>
</li>; */
}
