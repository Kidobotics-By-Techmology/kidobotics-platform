import React from "react";
import Sidebar from "./SideBar";

export default function DashboardView() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>
          Welcome to your dashboard! check out the simulation from the navbar
        </p>
      </main>
    </div>
  );
}
