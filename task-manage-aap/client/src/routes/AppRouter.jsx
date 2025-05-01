import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import TaskCreate from "../pages/TaskCreate";
import TaskEdit from "../pages/TaskEdit";
import TaskDetail from "../pages/TaskDetail";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/task/create" element={<TaskCreate />} />
    <Route path="/task/edit/:id" element={<TaskEdit />} />
    <Route path="/task/:id" element={<TaskDetail />} />
  </Routes>
);

export default AppRouter;
