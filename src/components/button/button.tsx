import { ButtonProps, ButtonVariation } from "./type";
import { CLASSNAME } from "./CLASSNAME";

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
    <button className={variationToClass[variation]} type={type} onClick={click}>
      {children}
    </button>
  );
}
