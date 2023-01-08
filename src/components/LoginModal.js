import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
} from "react-icons/ai";
import { PATH_FORGOT_PASSWORD, PATH_REGISTER } from "../constants/urls";
import { Link } from "react-router-dom";

const LoginModal = ({ open, close }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordEye, setPasswordEye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    close()
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ padding: "1rem" }}>
          <div className="w-[450px] mx-auto max-w-full rounded flex flex-col bg-white">
            <div className="w-full pt-6 relative">
              <h1 className="text-3xl font-medium text-center text-base-primary">
                Login
              </h1>
            </div>
            <form
              className="w-full p-8 grid grid-cols-1 gap-4"
              onSubmit={handleSubmit}
            >
              <div className="w-full mb-5 relative">
                <span className="absolute top-4 left-6">
                  <AiOutlineMail />
                </span>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  className="w-full outline-none border border-gray-300 p-3 pl-14 focus:border-base-primary rounded-3xl"
                />
              </div>
              <div className="w-full mb-5 relative">
                <span className="absolute top-4 left-6 ">
                  <AiOutlineLock />
                </span>
                <input
                  type={passwordEye ? "text" : "password"}
                  className="w-full outline-none border border-gray-300 py-3 px-14 focus:border-base-primary rounded-3xl"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  maxLength={30}
                />
                <span
                  className="absolute top-4 px-2 select-none cursor-pointer text-black right-2"
                  onClick={() => setPasswordEye(!passwordEye)}
                >
                  {passwordEye ? (
                    <AiOutlineEye style={{ fontSize: "1.3rem" }} />
                  ) : (
                    <AiOutlineEyeInvisible style={{ fontSize: "1.3rem" }} />
                  )}
                </span>
              </div>

              <button className="inline-block h-12 w-full bg-green-500 text-white rounded-3xl font-semibold disabled:bg-base-rgba_primary_7">
                Login
              </button>
            </form>
            <div className="w-full text-center my-4">
              <Link
                to={PATH_FORGOT_PASSWORD}
                className="text-blue-400 font-sans hover:underline"
              >
                Forget your password?
              </Link>
            </div>
          </div>
          <div className="w-full text-center pb-6">
            Don't have an account
            <Link
              to={PATH_REGISTER}
              className="text-blue-400 ml-2 hover:underline"
            >
              register?
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginModal;
