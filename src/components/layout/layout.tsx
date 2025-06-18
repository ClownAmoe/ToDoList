"use client";
import { useDispatch, useSelector } from "react-redux";
import Task from "../task/task";
import { AppDispatch, RootState } from "@/state/store";
import { useEffect } from "react";
import { setTaskAsync, TaskProp } from "@/state/task/taskSlice";
export default function Layout() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setTaskAsync());
  }, []);
  return (
    <div className="h-lvh w-2/3 flex-col bg-amber-100 rounded-lg flex items-center justify-start p-4 gap-4 overflow-y-auto scrollbar scrollbar-thumb-sky-300 scrollbar-thumb-rounded scrollbar-track-amber-200">
      {tasks.map((task: TaskProp) => {
        return (
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
            key={task.id}
          />
        );
      })}
    </div>
  );
}
