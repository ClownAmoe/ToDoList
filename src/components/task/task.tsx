import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";
import {
  changeChecked,
  delTask,
  toggleDoneLocal,
} from "@/state/task/taskSlice";
import Link from "next/link";
import Checkbox from "../checkbox/checkbox";
import Image from "next/image";
import Button from "../button/button";
import { AnimatePresence, motion } from "motion/react";
import { TaskProps } from "./type";

export default function Task(props: TaskProps) {
  const dispatch = useDispatch<AppDispatch>();
  const delMode = useSelector((state: RootState) => state.task.delMode);

  const handleChange = () => {
    dispatch(toggleDoneLocal(props.id));
    dispatch(changeChecked({ ...props, isDone: !props.isDone }));
  };

  const handleDel = () => {
    dispatch(delTask(props.id));
  };

  return (
    <div
      className={`w-full h-28 p-4 rounded-xl flex items-center gap-4 ring-2 z-0 transition-all duration-500
        ${props.isDone ? "bg-gray-400 opacity-50" : "bg-pink-200 ring-pink-300"}
      `}
    >
      <Checkbox checked={props.isDone} onChange={handleChange} />
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
            <Button type="button" variation="Bucket" click={handleDel}>
              <Image src="/del1.svg" height={42} width={42} alt="delete" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
