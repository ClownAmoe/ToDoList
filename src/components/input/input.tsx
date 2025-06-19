import { InputProps } from "./type";

export default function Input({ props }: InputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.change}
      value={props.value}
      className="bg-amber-100 p-3 rounded-lg w-2/3 ring-2 ring-fuchsia-400 focus:outline-none"
    />
  );
}
