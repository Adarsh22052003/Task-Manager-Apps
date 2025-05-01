import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/Dashboard.css";
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const token = localStorage.getItem("token");
  //     const res = await axios.get("http://localhost:5000/api/tasks", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     // /api/tasks
  //     setTasks(res.data);
  //   };
  //   fetchTasks();
  // }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Using token:", token); // debug
        const res = await axios.get("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Tasks received:", res.data); // debug
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks:", err.response?.data || err.message);
      }
    };
    fetchTasks();
  }, []);
  
  return (
    <div className="dashboard-container">
      <h2>Your Tasks</h2>
      <Link to="/task/create" className="create-link">+ Create New Task</Link>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong><br />
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Dashboard;
