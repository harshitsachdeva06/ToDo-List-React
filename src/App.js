// import logo from './logo.svg';

import { useState } from "react";

// import './App.css';
const demo_tasks = [
  {
    id: 118836,
    name: "Learn React",
  },
];

export default function App() {
  const [tasks, setTasks] = useState(demo_tasks);

  function handleAddNewTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }
  return (
    <div className="App">
      <Logo />
      <AddNewTaskForm onAddTask={handleAddNewTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
function Logo() {
  return (
    <div>
      <h1>ToDo-App</h1>
    </div>
  );
}
function AddNewTaskForm({ onAddTask }) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    const id = crypto.randomUUID;
    const newTask = {
      id,
      name,
    };
    onAddTask(newTask);
    // set the field to empty again
    setName("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label> Task Name </label>
        <input
          type="text"
          placeholder="enter your task description"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button>Add</button>
      </div>
    </form>
  );
}
function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </ul>
  );
}
function Task({ task }) {
  return (
    <li>
      {task.name}
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}
