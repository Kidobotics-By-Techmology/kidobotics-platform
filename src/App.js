import logo from "./logo.svg";
import "./App.css";
import SimulationView from "./components/Simulation/SimulationView";
import FooterView from "./components/Footer/FooterView";
import HomeView from "./components/Home/HomeView";
import DashboardView from "./components/Dashboard/DashboardView";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/simulation" element={<SimulationView />} />
      </Routes>
    </>
  );
}

export default App;
