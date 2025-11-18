import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function SideBar() {
  return (
    <nav className="hidden sm:flex flex-col sticky top-0">
      <div>
        <Image src={"/assets/busybee-logo.png"} width={48} height={48} />
      </div>
      <ul>
        <SidebarLink Icon={HomeIcon} text="Home" />
        <SidebarLink Icon={HashtagIcon} text="Explore" />
        <SidebarLink Icon={BellIcon} text="Notifications" />
        <SidebarLink Icon={InboxIcon} text="Messages" />
        <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
        <SidebarLink Icon={UserIcon} text="Profile" />
        <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
      </ul>
      <div>User Info</div>
    </nav>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="flex items-center text-xl mb-6 space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:block">{text}</span>
    </li>
  );
}
