import { useState, Fragment } from "react";

import Link from "next/link";

import Nav from "./nav";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import SideNav from "../../frontend/header/side-nav";

export default function DashboardHeader() {
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

  return (
    <header
      className={`bg-white transition-all duration-2000 ease-in-out flex items-center fixed left-0 -top-0 w-full z-20  h-32 font-open-sans`}
    >
      <div className="container  flex justify-between items-center ">
        <h1 className="uppercase text-base font-semibold">
          <Link href="/">
            <a className={` transition-all duration-2000 ease-in-out`}>
              ahmed khaled
              <span className="text-pink-primary text-2xl font-semibold">
                .
              </span>
            </a>
          </Link>
        </h1>
        <div className="lg:hidden">
          <Fragment>
            <button onClick={toggleDrawer("left", true)}>menu</button>
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
