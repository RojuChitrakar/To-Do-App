import "./todo.css";

function Todo({ task, ToggleTask, DeleteTask }) {
  return (
    <div className={`task ${task.done ? "done" : ""}`}>
      <span onClick={ToggleTask}>{task.text}</span>
      <div className="task-actions">
        <button onClick={ToggleTask}>
          {task.done ? "Undo 🔄" : "Done ✅"}
        </button>
        <button className="delete" onClick={DeleteTask}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default Todo;
