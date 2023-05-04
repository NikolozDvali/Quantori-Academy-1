import { createSlice } from "@reduxjs/toolkit";
import { ListItemInterface } from "../interface";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [] as ListItemInterface[]
  },
  reducers: {
    //adds new task;
    addTask: (state, action) =>{
      const newTask = action.payload;
      state.tasks.push(newTask);
    },
    //initializes task array; 
    setTasksFromServer: (state, action) => {
      state.tasks = action.payload;
    }, 
    //changes 'isCompleted' property of task;
    changeCompleted: (state, action) => {
      const taskId = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.isCompleted = !taskToUpdate.isCompleted;
      }
    }, 
    //removes task
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },

    modifyTask: (state, action) => {
      const updatedTask = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === updatedTask.id);
      updatedTask.key = state.tasks[taskIndex].key;
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }
    }
    

  }
});

// Action creators are generated for each case reducer function
export const {addTask, setTasksFromServer, changeCompleted, removeTask, modifyTask } = tasksSlice.actions;

export default tasksSlice.reducer;
