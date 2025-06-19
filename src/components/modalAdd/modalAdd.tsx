import { motion, AnimatePresence } from "motion/react";
import Input from "../input/input";
import { useState } from "react";
import Button from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { addTask, TaskProp } from "@/state/task/taskSlice";
import { RootState } from "@/state/store";

export default function ModalAdd({ click }: { click: () => void }) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const isDone = false;
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch();

  const id = Math.max(...tasks.map((task) => Number(task.id))) + 1;

  const newItem: TaskProp = {
    id: id,
    title: title,
    description: description,
    isDone: isDone,
  };

  const handleAdd = async () => {
    if (title && description) {
      await dispatch(addTask(newItem) as any);
      click();
    }
  };

  return (
    <div className="bg-cyan-200 h-[500px] w-[800px] p-8 flex items-center flex-col justify-between rounded-lg ring-2 ring-sky-400">
      <h1 className="text-3xl ">Enter data to add a task</h1>
      <Input
        props={{
          value: title,
          type: "text",
          placeholder: title ? title : "Title",
          change: (e: any) => {
            setTitle(e.target.value);
          },
        }}
      />
      <Input
        props={{
          value: description,
          type: "text",
          placeholder: description ? description : "Description",
          change: (e: any) => {
            setDescription(e.target.value);
          },
        }}
      />
      <div className="flex justify-center gap-20 w-full">
        <Button type={"button"} variation={"Conf"} click={handleAdd}>
          Confirm
        </Button>
        <Button type={"button"} variation={"Decl"} click={click}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
