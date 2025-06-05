import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Project from "../page/Projects";
import Activities from "../page/Activities";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/introduction" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/activities" element={<Activities />} />
    </Routes>
  );
};

export default AppRoutes;
