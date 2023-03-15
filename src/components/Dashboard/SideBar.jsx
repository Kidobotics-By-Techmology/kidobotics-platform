import { useState } from "react";
import React from "react";
import SideBarItem from "./SideBarItem";
import {
  FaRegChartBar,
  FaBook,
  FaClipboardList,
  FaLeanpub,
  FaUsers,
  FaTrophy,
  FaComment,
  FaPhone,
  FaGamepad,
  FaRobot,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex-col h-screen w-56 bg-gray-800 text-white">
      <div className="items-center justify-between px-4 py-3 bg-blue">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <nav className={`flex flex-col flex-grow py-4 px-4 bg-blue`}>
        <SideBarItem to="/dashboard" icon={FaRegChartBar} text="Dashboard" />
        <SideBarItem to="/dashboard" icon={FaBook} text="Lessons" />
        <SideBarItem to="/dashboard" icon={FaClipboardList} text="Tasks" />
        <SideBarItem to="/dashboard" icon={FaLeanpub} text="Resources" />
        <SideBarItem to="/dashboard" icon={FaUsers} text="Schedule" />
        <SideBarItem to="/dashboard" icon={FaTrophy} text="Champion Ranks" />
        <hr className="my-4 border-gray-700" />
        <h1 className="my-3 text-sm font-semibold">Teachers</h1>
        <SideBarItem to="/dashboard" icon={FaComment} text="Messages" />
        <SideBarItem to="/dashboard" icon={FaPhone} text="Video Meeting" />
        <hr className="my-4 border-gray-700" />
        <h1 className="my-3 text-sm font-semibold">Tools</h1>
        <SideBarItem to="/simulation" icon={FaGamepad} text="Simulation" />
        <SideBarItem to="/dashboard" icon={FaRobot} text="Products" />
        <div className="bg-white rounded-xl flex  flex-col my-3 mt-6">
          <img
            className="px-8 py-2"
            alt="techmology logo"
            src={process.env.PUBLIC_URL + "/logo.png"}
          />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
