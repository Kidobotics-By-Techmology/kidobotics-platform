import React from "react";
import { Link } from "react-router-dom";

export default function SideBarItem({ to, icon: Icon, text }) {
  return (
    <Link
      to={to}
      className="flex items-center py-2 px-4 hover:text-blue hover:bg-gray-100 transition-colors duration-200"
    >
      <Icon className="w-6 h-6 mr-3" />
      <span>{text}</span>
    </Link>
  );
}
