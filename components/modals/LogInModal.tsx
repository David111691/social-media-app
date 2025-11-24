"use client";
import { auth } from "@/firebase";
import { closeLogInModal, openLogInModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LogInModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen);
  const dispatch: AppDispatch = useDispatch();

  async function handleLogIn(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <>
      <button
        className="w-full h-[40px] md:w-[88px] md:h-[40px] border-2 border-gray-100 text-white rounded-full font-bold text-base md:text-sm hover:bg-white hover:bg-opacity-80 transition"
        onClick={() => dispatch(openLogInModal())}
      >
        Log in
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit sm:rounded-xl bg-white">
          <XMarkIcon
            onClick={() => dispatch(closeLogInModal())}
            className="w-7 mt-5 ms-5 cursor-pointer"
          />
          <form className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10 text-center">
              Log in to your Busy bee account
            </h1>
            <div className="w-full space-y-5 mb-10">
              <input
                className="w-full h-[54px] border border-gray-200 outline-none ps-3 rounded-[4px] focus:border-[#F4AF01] transition"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
              <div className="w-full h-[54px] flex items-center border border-gray-200 outline-none rounded-[4px] focus-within:border-[#F4AF01] transition overflow-hidden pr-3">
                <input
                  className="ps-3 w-full h-full outline-none"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></input>
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-7 h-7 text-gray-400 cursor-pointer"
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </div>
              </div>
            </div>
            <button
              className="bg-[#F4AF01] text-white h-[48px] rounded-full shadow-md mb-5 w-full"
              onClick={(e) => handleLogIn(e)}
            >
              Log in
            </button>
            <span className="mb-5 text-sm block text-center">Or</span>
            <button className="bg-[#F4AF01] text-white h-[48px] rounded-full shadow-md w-full">
              Log in as guest
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
