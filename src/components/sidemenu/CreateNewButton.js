import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { PATH_LOGIN } from "../../constants/urls";

const CreateNewButton = () => {
  return (
    <>
      <Link
        to={PATH_LOGIN}
        className="rounded-md bg-indigo-500 px-4 py-2 text-center text-white capitalize flex items-center justify-between flex-nowrap whitespace-nowrap w-52"
      >
        <IoMdAdd /> Create new account
      </Link>
    </>
  );
};

export default CreateNewButton;
