"use client";
import { closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpModal() {
  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

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
          <form className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Create your account</h1>
            <div className="w-full space-y-5 mb-10"></div>
          </form>
        </div>
      </Modal>
    </>
  );
}
