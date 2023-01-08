import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideMenu from "../components/sidemenu/SideMenu";
import { HAMBURGER } from "../constants";

const WithSideMenuBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(HAMBURGER);
  
  return (
    <>
      <Header open={hamburgerOpen} setOpen={setHamburgerOpen} />
      <SideMenu
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
      />
      <div
        className={`${
          hamburgerOpen
            ? "lg:left-64 lg:w-[calc(100%-16rem)]"
            : ""
        }  relative w-full left-0 duration-300`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default WithSideMenuBar;
