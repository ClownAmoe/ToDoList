import Task from "../task/task";

export default function Layout() {
  return (
    <div className="h-lvh w-2/3 flex-col bg-amber-100 rounded-lg flex items-center justify-start p-4 gap-4 overflow-y-auto scrollbar scrollbar-thumb-sky-300 scrollbar-thumb-rounded scrollbar-track-amber-200">
      <Task title={"Title"} description={"lorem>5"} isDone={false} />

      <Task title={"Title"} description={"lorem>5"} isDone={false} />
      <Task title={"Title"} description={"lorem>5"} isDone={false} />

      <Task title={"Title"} description={"lorem>5"} isDone={false} />

      <Task title={"Title"} description={"lorem>5"} isDone={false} />

      <Task title={"Title"} description={"lorem>5"} isDone={false} />

      <Task title={"Title"} description={"lorem>5"} isDone={false} />

      <Task title={"Title"} description={"lorem>5"} isDone={false} />
    </div>
  );
}
