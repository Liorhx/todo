import React, { useEffect, useState } from "react";
import Header from "./components/header";
import "./App.css";
import todoIcon from "./assets/icons8-bullseye-50.png";
import doingIcon from "./assets/icons8-star-100.png";
import doneIcon from "./assets/icons8-check-50.png";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks");
// console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskIndex) => {
    const newtask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newtask);
  };
  const onDrop = (status, position) => {
    console.log(
      `${activeTask} is going to place in ${status} at position ${position}`
    );

    if (activeTask == null || activeTask == undefined) return;

    const taskToMove = tasks[activeTask];
    const updatedTask = tasks.filter((task, index) => index !== activeTask);

    updatedTask.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTask);
  };
  console.log("task", tasks);
  return (
    <div>
      <Header setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          tasks={tasks}
          status="Todo"
          handleDelete={handleDelete}
          setActiveTask={setActiveTask}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="Doing"
          handleDelete={handleDelete}
          setActiveTask={setActiveTask}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="Done"
          handleDelete={handleDelete}
          setActiveTask={setActiveTask}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
