import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function PostInput() {
  return (
    <div className="flex space-x-5 border-b border-gray-100">
      <Image
        src={"/assets/busybee-logo.png"}
        width={48}
        height={48}
        alt="bee logo"
        className="w-11 h-11 ml-2 mt-1"
      />
      <div className="w-full">
        <textarea
          className="outline-none resize-none w-full min-h-[50px] text-lg"
          placeholder="What's happening!?"
        />

        <div className="flex justify-between items-center pt-1.5 pb-1.5 pr-3 border-t border-gray-100">
          <div className="flex space-x-1.5">
            <PhotoIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <ChartBarIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <FaceSmileIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <CalendarIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <MapPinIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
          </div>
          <button className="bg-[#F4AF01] text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer">
            Bumble
          </button>
        </div>
      </div>
    </div>
  );
}
