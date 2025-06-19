import { useState } from "react";
import Button from "../button/button";
import ModalAdd from "@/components/modalAdd/modalAdd";
import { AnimatePresence, motion } from "motion/react";

export default function Controls() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center flex-col gap-6 w-1/3 h-lvh bg-lime-100"
    >
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "keyframes",
              duration: 0.5,
            }}
            className="absolute left-1/4"
          >
            <ModalAdd click={() => setShow(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        type="button"
        variation="Add"
        click={() => {
          setShow(!show);
        }}
      >
        Add
      </Button>
      <Button
        type="button"
        variation="Del"
        click={() => console.log("Delete clicked")}
      >
        Delete
      </Button>
    </motion.div>
  );
}
