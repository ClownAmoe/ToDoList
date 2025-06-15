import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Task = {
  title: string;
  description: string;
  isDone: boolean;
};

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const setTaskAsync = createAsyncThunk(
    "task/setTaskAsync",
    async (state, action) => {
        
    }
)

export const { setTask } = taskSlice.actions;

export default taskSlice.reducer;
