import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    input: "",
    tasks: [],
    isEditing: false,
    editId: null,
  },
  reducers: {
   
    addToInput: function (state, action) {
      state.input = action.payload;
    },

    addTask: function (state) {
      if (state.isEditing) {
        const updatedTasks = state.tasks.map(task =>
          task.id === state.editId ? { ...task, task: state.input } : task
        );
        state.tasks = updatedTasks;
        state.isEditing = false;
        state.editId = null;
      } else {
        const newTask = { id: Date.now(), task: state.input };
        state.tasks = [...state.tasks, newTask];
      }
      state.input = "";
    },
  
    deleteTask: function (state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    
    editTask: function (state, action) {
      state.isEditing = true;
      state.editId = action.payload.id;
      state.input = action.payload.task;
    },
  },
});

export const { addToInput, addTask, deleteTask, editTask } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
