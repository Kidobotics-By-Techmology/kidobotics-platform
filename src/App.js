import logo from "./logo.svg";
import "./App.css";
import SimulationView from "./components/Simulation/SimulationView";
import FooterView from "./components/Footer/FooterView";
import HomeView from "./components/Home/HomeView";
import DashboardView from "./components/Dashboard/DashboardView";
import { Routes, Route } from "react-router-dom";
import React from "react";
import SidebarGPT from "./components/Dashboard/SideBarGPT";

function App() {
  function handleContextMenue(e) {
    e.preventDefault();
  }

  React.useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenue);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenue);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/simulation" element={<SimulationView />} />
        <Route path="/SideBarGPT" element={<SidebarGPT />} />
      </Routes>
    </>
  );
}

export default App;
