import { motion, AnimatePresence } from "motion/react";
import Input from "../input/input";
import { useState } from "react";
import Button from "../button/button";
import { useDispatch } from "react-redux";
import { addTask, TaskProp } from "@/state/task/taskSlice";

export default function ModalAdd({ click }: { click: () => void }) {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const isDone = false;
  const dispatch = useDispatch();

  const newItem: TaskProp = {
    id: Number(id),
    title: title,
    description: description,
    isDone: isDone,
  };

  const handleAdd = async () => {
    if (id && title && description) {
      await dispatch(addTask(newItem) as any);
      click();
    } else {
      alert("All inputs whould have a value");
    }
  };

  return (
    <div className="bg-cyan-200 h-[500px] w-[800px] p-8 flex items-center flex-col justify-between rounded-lg ring-2 ring-sky-400">
      <h1 className="text-3xl ">Enter data to add a task</h1>
      <Input
        props={{
          value: id,
          type: "number",
          placeholder: id ? id : "ID",
          change: (e: any) => {
            setId(e.target.value);
          },
        }}
      />
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
