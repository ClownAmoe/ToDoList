"use client";
import { RootState } from "@/state/store";
import { use } from "react";
import { useSelector } from "react-redux";

type TaskPageProps = {
  params: Promise<{ id: string }>;
};

export default function TaskPage({ params }: TaskPageProps) {
  const { id } = use(params);

  const task = useSelector((state: RootState) =>
    state.task.tasks.find((x) => x.id === Number(id))
  );

  return (
    <div className="w-full h-lvh flex flex-col justify-center items-center bg-amber-100">
      {task ? (
        <div className="bg-pink-300 w-1/3 h-2/3 p-4 rounded-xl ring-2 ring-sky-300">
          <ul className="flex flex-col items-center justify-start gap-16 h-full w-full p-8">
            <li className="text-2xl">{task.title}</li>
            <li className="text-xl">{task.description}</li>
            <li className="text-xl">
              Status: {task.isDone ? "Done" : "Not done yet"}
            </li>
          </ul>
        </div>
      ) : (
        "Завдання не знайдено"
      )}
    </div>
  );
}
