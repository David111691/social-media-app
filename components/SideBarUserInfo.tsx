"use client";

import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser, User } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function SideBarUserInfo() {
  const dispatch: AppDispatch = useDispatch();
  const { name, username, email, uid }: User = useSelector(
    (state: RootState) => state.user
  );

  async function handleSignOut() {
    await signOut(auth);

    dispatch(signOutUser());
  }

  return (
    <div
      className="absolute bottom-3 flex items-center space-x-2 hover:bg-gray-400 hover:bg-opacity-10 cursor-pointer xl:p-3 xl:pe-6 rounded-full transition"
      onClick={() => handleSignOut()}
    >
      <Image
        src="/assets/profile_pic.jpg"
        width={36}
        height={36}
        alt="Profile picture"
        className="w-9 h-9"
      />
      <div className="hidden xl:flex flex-col text-sm">
        <span className="font-bold">{name}</span>
        <span className="text-gray-500">@{username}</span>
      </div>
    </div>
  );
}
