import Task from "../task/task";

export default function Layout() {
  return (
    <div className="h-lvh w-2/3 flex-col bg-amber-100 rounded-lg flex items-center justify-between p-4 gap-4 overflow-y-auto">
      <Task title={"Title"} description={"lorem>5"} isDone={false} />

      <Task title={"Title"} description={"lorem>5"} isDone={false} />
      <Task title={"Title"} description={"lorem>5"} isDone={false} />
    </div>
  );
}
