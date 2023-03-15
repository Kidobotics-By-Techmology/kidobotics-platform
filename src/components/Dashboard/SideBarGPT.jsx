import React, { useState } from "react";

const SidebarGPT = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 flex-none h-full p-4">
        <h1 className="text-xl font-bold">My Dashboard</h1>
        <div className="mt-4">
          <button
            className="w-full px-4 py-2 text-left text-sm font-medium text-gray-400 rounded-lg hover:text-white hover:bg-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } mt-4 text-sm font-medium`}
          >
            <ul>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p>Main content goes here</p>
      </div>
    </div>
  );
};

export default SidebarGPT;
