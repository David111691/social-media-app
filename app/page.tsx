import PostFeed from "@/components/PostFeed";
import SideBar from "@/components/SideBar";
import SignUpPromt from "@/components/SignUpPromt";
import Widgets from "@/components/Widgets";

export default function Home() {
  return (
    <>
      <div className="text-[#0F1419] min-h-screen max-w-[1400px] mx-auto flex justify-center">
        <SideBar />
        <PostFeed />
        <Widgets />
      </div>
      <SignUpPromt />
    </>
  );
}
