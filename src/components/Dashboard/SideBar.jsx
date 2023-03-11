import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen w-56 bg-gray-800 text-white">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <button
          className="focus:outline-none lg:hidden"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>
      <nav className={`flex flex-col flex-grow py-4 px-4 bg-gray-800`}>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Lessons
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Tasks
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Class
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Schedule
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Champion Ranks
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Messages
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Video Meeting
        </Link>
        <Link
          to="/simulation"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Simulation
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white py-2 px-3"
        >
          Products
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
