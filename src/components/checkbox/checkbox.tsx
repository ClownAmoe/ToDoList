"use client";
import { useState } from "react";
import Image from "next/image";
import { CheckboxProps } from "./type";
import { motion } from "motion/react";

export default function Checkbox(props: CheckboxProps) {
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
          props.checked ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="absolut peer hidden"
        checked={props.checked}
        onChange={props.onChange}
      />
      {icon}
    </label>
  );
}
