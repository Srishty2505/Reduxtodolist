import { useDispatch, useSelector } from "react-redux";
import { addTask, addToInput , deleteTask , editTask} from "./slice";

function Todo() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.todo;
  });

  const handleAddTask = () => {
    if (state.input.trim() === "") {
      alert("Please fill.");
      return;
    }
    dispatch(addTask());
  };
  return (
    <>
      <h1>To Do List</h1>
      <div id="todo">
        <input
          type="text"
          placeholder="Enter your task"
          value={state.input}
          onChange={(e) => dispatch(addToInput(e.target.value))}
        />
        <button onClick={handleAddTask}>Add Task</button>

      </div>

      <ul>
        {state.tasks.map((task) => {
          return <li key={task.id}>{task.task}
           <button onClick={() => dispatch(editTask(task))}>Edit</button>
           <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button></li>;
        })}
      </ul>
    </>
  );
}

export default Todo;
