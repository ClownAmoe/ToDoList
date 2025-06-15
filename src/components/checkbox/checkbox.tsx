"use client";
import { useState } from "react";
import { CheckboxProps } from "./type";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <div className="w-6 h-6 rounded-full border-2 border-pink-600 peer-checked:bg-pink-600 transition-colors duration-300"></div>
    </label>
  );
}
