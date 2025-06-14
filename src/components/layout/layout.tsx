import Checkbox from "../checkbox/checkbox";
import Task from "../task/task";

export default function Layout() {
  return (
    <div className="h-auto max-h-[650px] w-1/2 flex-col bg-amber-100 rounded-lg flex items-center justify-between m-20 p-4 gap-4 overflow-y-scroll">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />

      <Task />
      <Task />
    </div>
  );
}
