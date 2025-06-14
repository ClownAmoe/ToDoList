import Checkbox from "../checkbox/checkbox";

export default function Task() {
  return (
    <div className="w-full h-1/5 p-4 bg-pink-200 rounded-xl flex items-center gap-4">
      <Checkbox />
      <div>
        <h1 className="text-2xl font-bold">TaskTitle</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quia.
        </p>
      </div>
    </div>
  );
}
