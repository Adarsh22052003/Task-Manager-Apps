import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTask(res.data);
    };
    fetchTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h2>Task Detail</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <Link to={`/task/edit/${task._id}`}>Edit</Link>
    </div>
  );
};

export default TaskDetail;
