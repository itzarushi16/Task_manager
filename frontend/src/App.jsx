import { useState, useEffect } from 'react';
import axios from 'axios';

const API = "http://localhost:8080/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");


  const load = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };


  const add = async () => {
    await axios.post(API, { title, completed: false });
    setTitle('');
    load();
  };


  
  const remove = async (id) => {
    await axios.delete(`${API}/${id}`);
    load();
  };
 
  
  useEffect(() => { load(); }, []);

  return (
    <div>
      <h1>Task Manager </h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New task" />
      <button onClick={add}>Add Task</button>

      <ul>
        {tasks.map(t=> (
          <li key={t.id}>
            {t.title}{" "}
            <button onClick={() => remove(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}