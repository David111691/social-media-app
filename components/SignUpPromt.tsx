import SignUpModal from "./modals/SignUpModal";

export default function SignUpPromt() {
  return (
    <div className="fixed w-full h-[80px] bg-[#F4AF01] bottom-0 flex justify-center items-center md:space-x-5 lg:justify-between lg:px-20 xl:px-40 2xl:px-80">
      <div className="hidden md:flex flex-col text-white">
        <span className="text-xl font-bold">Don't miss out on the buzz</span>
        <span>People on Busy Bee are always the first to know.</span> 
      </div>
      <div className="flex space-x-2 w-full p-3 md:w-fit">
        <button className="w-full h-[40px] md:w-[88px] md:h-[40px] border-2 border-gray-100 text-white rounded-full font-bold text-base md:text-sm hover:bg-white hover:bg-opacity-80 transition">
          Log in
        </button>
        <SignUpModal />
      </div>
    </div>
  );
}
