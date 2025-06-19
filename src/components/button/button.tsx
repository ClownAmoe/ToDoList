import { ButtonProps, ButtonVariation } from "./type";
import { CLASSNAME } from "./CLASSNAME";
import { motion } from "motion/react";

const variationToClass: Record<ButtonVariation, string> = {
  Add: CLASSNAME.ADD,
  Del: CLASSNAME.DEL,
  Conf: CLASSNAME.CONF,
  Decl: CLASSNAME.DEC,
};

export default function Button({
  children,
  type,
  variation,
  click,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 0.95 }}
      className={variationToClass[variation]}
      type={type}
      onClick={click}
    >
      {children}
    </motion.button>
  );
}
