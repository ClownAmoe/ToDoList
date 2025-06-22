"use client";
import { useDispatch, useSelector } from "react-redux";
import Task from "../task/task";
import { AppDispatch, RootState } from "@/state/store";
import { useEffect, useMemo } from "react";
import { setTaskAsync, TaskProp } from "@/state/task/taskSlice";
import { motion, AnimatePresence } from "motion/react";
export default function Layout() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const filteredByDone = useMemo(() => {
    return [...tasks].sort((a, b) => Number(a.isDone) - Number(b.isDone));
  }, [tasks]);

  useEffect(() => {
    dispatch(setTaskAsync());
  }, []);

  return (
    <div className="h-lvh w-2/3 flex-col bg-amber-100 rounded-lg flex items-center justify-start p-4 gap-4 overflow-y-auto scrollbar scrollbar-thumb-sky-300 scrollbar-thumb-rounded scrollbar-track-amber-200">
      {filteredByDone.map((task: TaskProp) => {
        return (
          <motion.div
            layout
            initial={{
              opacity: 1,
            }}
            whileHover={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
            }}
            className="w-full"
            key={task.id}
          >
            <Task
              id={task.id}
              title={task.title}
              description={task.description}
              isDone={task.isDone}
              key={task.id}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
