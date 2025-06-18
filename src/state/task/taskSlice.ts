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
};

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // setTask: (state, action: PayloadAction<Task[]>) => {
    //   state.tasks = action.payload;
    // },
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
      );
  },
});

export const setTaskAsync = createAsyncThunk<
  TaskProp[],
  void,
  { rejectValue: string }
>("task/setTaskAsync", async (_, thunkAPI) => {
  try {
    const resp = await axios.get<TaskProp[]>("http://localhost:3000/tasks");
    return resp.data;
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
// export const { setTask } = taskSlice.actions;

export default taskSlice.reducer;
