import React from "react";
import { IoIosLogOut } from "react-icons/io";

const LogOutButton = () => {
  return (
    <>
      <button className="text-[#535457] w-full relative flex items-center cursor-pointer py-2 pl-2 overflow-hidden my-1 min-h-[2.5rem] rounded-3xl">
        <span className="w-6 h-6 min-w-[24px] flex items-center justify-center mr-4">
          <IoIosLogOut style={{ fontSize: "1.3rem" }} />
        </span>
        <span
          className={`font-semibold leading-5 whitespace-nowrap tracking-wide capitalize`}
        >
          logout
        </span>
      </button>
    </>
  );
};

export default LogOutButton;
