import React from "react";
import { BiMenu } from "react-icons/bi";

const HamBurgerBtn = (props) => {
  return (
    <div
      className="cursor-pointer rounded text-4xl"
      onClick={() => {
        props.setOpen(!props.open);
      }}
    >
      <BiMenu />
    </div>
  );
};

export default HamBurgerBtn;
