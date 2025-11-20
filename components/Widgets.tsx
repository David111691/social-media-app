import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Widgets() {
  return (
    <div className="p-3 hidden lg:flex flex-col space-y-4 w-[400px]">
      <div className="flex items-center space-x-3 bg-[#EFF3F4] text-[#89959D] h-[44px] rounded-full pl-5">
        <MagnifyingGlassIcon className="w-[20px] h-[20px] " />
        <input
          type="text"
          placeholder="Search Busy Bee"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="font-bold text-xl mb-2">What's happening?</h1>

        <div className="flex flex-col py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471]">
            <span>Trending on Busy Bee</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#ReactJS</span>
          <span className="text-[#536471] text-xs">240k Bumbles</span>
        </div>

        <div className="flex flex-col py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471]">
            <span>Trending on Busy Bee</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#Angular</span>
          <span className="text-[#536471] text-xs">130k Bumbles</span>
        </div>

        <div className="flex flex-col py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471]">
            <span>Trending on Busy Bee</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#NextJS</span>
          <span className="text-[#536471] text-xs">320k Bumbles</span>
        </div>

        <div className="flex flex-col py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471]">
            <span>Trending on Busy Bee</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#JavaScript</span>
          <span className="text-[#536471] text-xs">150k Bumbles</span>
        </div>
      </div>

      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="font-bold text-xl mb-2">Who to follow?</h1>

        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            <Image
              src={"/assets/user-1.jpg"}
              width={44}
              height={44}
              alt="Profile picture of Frank S Smith"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Frank S Smith</span>
              <span>@franksmith</span>
            </div>
          </div>

          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            <Image
              src={"/assets/user-2.jpg"}
              width={44}
              height={44}
              alt="Profile picture of Frank S Smith"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Lizzie W Stewart</span>
              <span>@lizziew</span>
            </div>
          </div>

          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            <Image
              src={"/assets/user-3.jpg"}
              width={44}
              height={44}
              alt="Profile picture of Frank S Smith"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">George H Doak</span>
              <span>@georgeh</span>
            </div>
          </div>

          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
