import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamBurgerBtn from "./HamburgerBtn";
import Logo from "./Logo";
import { PATH_HOME } from "../constants/urls";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import LoginModal from "./LoginModal";

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <header className="w-full h-14 flex items-center justify-between border-b border-bgray-300 sticky top-0 z-[1001] bg-[#f7f7f7] px-4">
        <div className="flex items-center">
          <HamBurgerBtn setOpen={props.setOpen} open={props.open} />
          <Link to={PATH_HOME} className="ml-3">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center">
          <button className="mx-1 p-1 text-xl relative">
            <MdOutlineEmail />
            <span className="absolute -top-1 right-0 text-xs h-4 w-4 rounded-full bg-blue-400 text-white font-semibold flex items-center justify-center">
              3
            </span>
          </button>
          <button className="mx-1 p-1 text-xl">
            <IoMdNotificationsOutline />
          </button>
          <button
            className="ml-1 h-8 w-8 rounded-full bg-gray-400"
            onClick={handleOpen}
          ></button>
          <LoginModal open={modalOpen} close={handleClose} />
        </div>
      </header>
    </>
  );
};

export default Header;
