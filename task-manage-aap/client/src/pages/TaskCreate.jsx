import React, { useState } from "react";
import axios from "axios";
import "./style/TaskCreate.css"; // Import your CSS file for styling

const TaskCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      // await axios.post(
      //   "/api/tasks",
      //   { title, description },
      //   {
      //     headers: { Authorization: `Bearer ${token}` },
      //   }
      // );
      await axios.post("http://localhost:5000/api/tasks", { title, description }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Failed to create task");
    }
  };

  return (
    <form className="task-create-form" onSubmit={handleCreate}>
  <h2>Create Task</h2>
  <input
    className="task-input"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Task Title"
  />
  <textarea
    className="task-textarea"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Task Description"
  />
  <div className="task-buttons">
    <button className="task-submit-btn" type="submit">Create</button>
    <button
      type="button"
      className="task-cancel-btn"
      onClick={() => window.location.href = "/dashboard"}
    >
      Cancel
    </button>
  </div>
</form>

  );
};

export default TaskCreate;
