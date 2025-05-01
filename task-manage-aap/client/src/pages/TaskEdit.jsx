import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTitle(res.data.title);
    };
    fetchTask();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.put(`/api/tasks/${id}`, { title }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={handleEdit}>
      <h2>Edit Task</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default TaskEdit;
