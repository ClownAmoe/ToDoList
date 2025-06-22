import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export type TaskProp = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

type TaskState = {
  tasks: TaskProp[];
  delMode: boolean;
};

const initialState: TaskState = {
  tasks: [],
  delMode: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // setTask: (state, action: PayloadAction<Task[]>) => {
    //   state.tasks = action.payload;
    // },
    setDelMode: (state) => {
      state.delMode = !state.delMode;
    },
    toggleDoneLocal: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        setTaskAsync.fulfilled,
        (state, action: PayloadAction<TaskProp[]>) => {
          state.tasks = action.payload;
        }
      )
      .addCase(
        changeChecked.fulfilled,
        (state, action: PayloadAction<TaskProp>) => {
          const item = state.tasks.find((x) => x.id === action.payload.id);
          if (item) {
            item.isDone = action.payload.isDone;
          }
        }
      )
      .addCase(addTask.fulfilled, (state, action: PayloadAction<TaskProp>) => {
        state.tasks.push(action.payload);
      })
      .addCase(delTask.fulfilled, (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter(
          (task) => Number(task.id) !== Number(action.payload)
        );
      });
  },
});

export const setTaskAsync = createAsyncThunk<
  TaskProp[],
  void,
  { rejectValue: string }
>("task/setTaskAsync", async (_, thunkAPI) => {
  try {
    const resp = await axios.get<TaskProp[]>("http://localhost:3000/tasks");

    const tasksWithNumberId = resp.data.map((task) => ({
      ...task,
      id: Number(task.id),
    }));

    return tasksWithNumberId;
  } catch (e: any) {
    console.log(e);
    return thunkAPI.rejectWithValue("Error" + e);
  }
});

export const changeChecked = createAsyncThunk<
  TaskProp,
  TaskProp,
  { rejectValue: string }
>("task/changeChecked", async (updatedTask, thunkAPI) => {
  try {
    const resp = await axios.put<TaskProp>(
      `http://localhost:3000/tasks/${updatedTask.id}`,
      updatedTask
    );
    return resp.data;
  } catch (e: any) {
    console.log(e);
    return thunkAPI.rejectWithValue("Error" + e);
  }
});

export const addTask = createAsyncThunk<
  TaskProp,
  TaskProp,
  { rejectValue: string }
>("task/addTask", async (newTask, thunkAPI) => {
  try {
    const resp = await axios.post<TaskProp>(
      `http://localhost:3000/tasks/`,
      newTask
    );
    return resp.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue("Error" + e);
  }
});

export const delTask = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("task/delTask", async (id, thunkAPI) => {
  try {
    const resp = await axios.delete<TaskProp>(
      `http://localhost:3000/tasks/${id}`
    );
    return id;
  } catch (e: any) {
    return thunkAPI.rejectWithValue("Error" + e);
  }
});
export const { setDelMode, toggleDoneLocal } = taskSlice.actions;

export default taskSlice.reducer;
