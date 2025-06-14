export default function Checkbox() {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-6 h-6 rounded-full border-2 border-pink-600 peer-checked:bg-pink-600 transition-colors duration-300"></div>
    </label>
  );
}
