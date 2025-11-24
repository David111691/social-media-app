"use client";
import { closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { signInUser } from "@/redux/slices/userSlice";

export default function SignUpModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

  async function handleSignUp(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredentials.user, { displayName: name });

    dispatch(
      signInUser({
        name: userCredentials.user.displayName,
        username: userCredentials.user.email!.split("@")[0],
        email: userCredentials.user.email,
        uid: "",
      })
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      //Handle Redux Actions
      dispatch(
        signInUser({
          name: currentUser.displayName,
          username: currentUser.email!.split("@")[0],
          email: currentUser.email,
          uid: "",
        })
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <button
        className="w-full h-[40px] md:w-[88px] md:h-[40px] border-2 bg-white rounded-full font-bold text-base md:text-sm"
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit sm:rounded-xl bg-white">
          <XMarkIcon
            onClick={() => dispatch(closeSignUpModal())}
            className="w-7 mt-5 ms-5 cursor-pointer"
          />
          <form className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Create your account</h1>
            <div className="w-full space-y-5 mb-10">
              <input
                className="w-full h-[54px] border border-gray-200 outline-none ps-3 rounded-[4px] focus:border-[#F4AF01] transition"
                placeholder="Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></input>
              <input
                className="w-full h-[54px] border border-gray-200 outline-none ps-3 rounded-[4px] focus:border-[#F4AF01] transition"
                placeholder="Email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              ></input>
              <div className="w-full h-[54px] flex items-center border border-gray-200 outline-none rounded-[4px] focus-within:border-[#F4AF01] transition overflow-hidden pr-3">
                <input
                  className="ps-3 w-full h-full outline-none"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(event) => setPassword(event.target.value)}
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
              onClick={(e) => handleSignUp(e)}
            >
              Sign up
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
