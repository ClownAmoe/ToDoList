"use client";
import { useState } from "react";
import Image from "next/image";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const icon = (
    <div className="relative w-10 h-10">
      <Image
        src="/heart.svg"
        height={40}
        width={40}
        alt=""
        className="contain absolute"
      />
      <Image
        src="/heart-checked.svg"
        height={40}
        width={40}
        alt=""
        className={`contain duration-300 transition-opacity  absolute ${
          isChecked ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      {icon}
    </label>
  );
}
