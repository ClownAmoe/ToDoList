import { useEffect, useState } from "react";
import Link from "next/link";
import Checkbox from "../checkbox/checkbox";
import { TaskProps } from "./type";
import { changeChecked, delTask, TaskProp } from "@/state/task/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "motion/react";
import { AppDispatch, RootState } from "@/state/store";
import { setDelMode } from "@/state/task/taskSlice";
import Image from "next/image";
import Button from "../button/button";

export default function Task(props: TaskProps) {
  const [checked, setChecked] = useState<boolean>(props.isDone);
  const dispatch = useDispatch<AppDispatch>();
  const delMode = useSelector((state: RootState) => state.task.delMode);
  useEffect(() => {
    const updatedTask: TaskProp = { ...props, isDone: checked };
    dispatch(changeChecked(updatedTask));
  }, [checked]);

  const handleDel = () => {
    dispatch(delTask(props.id));
  };

  return (
    <div
      className={`w-full h-28 p-4 rounded-xl flex items-center gap-4 ring-2 z-0 transition-all duration-500
        ${checked ? "bg-gray-400 opacity-50" : "bg-pink-200 ring-pink-300"}
      `}
    >
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      <Link href={`/tasks/${props.id}`} className="cursor-pointer w-full p-1">
        <div>
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p className="text-gray-600">{props.description}</p>
        </div>
      </Link>
      <AnimatePresence>
        {delMode && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Button type={"button"} variation={"Bucket"} click={handleDel}>
              <Image src="/del1.svg" height={42} width={42} alt="delete" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
