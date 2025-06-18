import { useEffect, useState } from "react";
import Link from "next/link";
import Checkbox from "../checkbox/checkbox";
import { TaskProps } from "./type";
import { changeChecked, TaskProp } from "@/state/task/taskSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";

export default function Task(props: TaskProps) {
  const [checked, setChecked] = useState(props.isDone);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const updatedTask: TaskProp = { ...props, isDone: checked };
    dispatch(changeChecked(updatedTask));;
  }, [checked]);

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
    </div>
  );
}
