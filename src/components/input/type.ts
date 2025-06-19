export type Input = {
  value: string;
  type: "text" | "number";
  placeholder: string;
  change: (e: any) => void;
};

export type InputProps = {
  props: Input;
};
