import Checkbox from "../checkbox/checkbox";
import { TaskProps } from "./type";

export default function Task(props: TaskProps) {
  return (
    <div className="w-full h-1/5 p-4 bg-pink-200 rounded-xl flex items-center gap-4">
      <Checkbox />
      <div>
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}
