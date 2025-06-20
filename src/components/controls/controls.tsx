import { useState } from "react";
import Button from "../button/button";
import ModalAdd from "@/components/modalAdd/modalAdd";
import { AnimatePresence, motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { setDelMode } from "@/state/task/taskSlice";

export default function Controls() {
  const [show, setShow] = useState<boolean>(false);
  const delMode = useSelector((state: RootState) => state.task.delMode);
  const dispatch = useDispatch();
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
        click={() => dispatch(setDelMode())}
      >
        Delete
      </Button>
    </motion.div>
  );
}
