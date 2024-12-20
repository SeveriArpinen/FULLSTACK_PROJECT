import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Dec 20th at 14:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors appointment",
      day: "Dec 20th at 14:00",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors appointment",
      day: "Dec 20th at 14:00",
      reminder: false,
    },
  ]);

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
