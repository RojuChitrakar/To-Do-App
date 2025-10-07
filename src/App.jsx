import { useState } from "react";
import Todo from "./todo";
import "./todo.css";

function App() {
  
  const [tasks, setTasks]=useState([]);
  const [newTask, setNewTask]=useState("");
  function HandleTask(){
    if(newTask.trim()==="")return;
    const task={text:newTask, done: false};
    setTasks([...tasks, task]);
    setNewTask("");
  
  }

 function ToggleTask(index) {
  const updatedTask = tasks.map((task, i) => {
    if (i === index) {
      return { ...task, done: !task.done };
    } else {
      return task;
    }
  });
  setTasks(updatedTask);
}


  function DeleteTask(index){
    const updatedTask=tasks.filter((_,i)=>i!==index);
    setTasks(updatedTask);
  }


  return (
    <div className="app">
      <h1>📝 My To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={HandleTask}>Add Task ➕</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty">✨ No tasks yet. Add one!</p>
        ) : (
          tasks.map((task, index) => (
            <Todo
              key={index}
              task={task}
              ToggleTask={() => ToggleTask(index)}
              DeleteTask={() => DeleteTask(index)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
