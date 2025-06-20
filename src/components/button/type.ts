export type ButtonVariation = "Add" | "Del" | "Conf" | "Decl" | "Bucket";

export type ButtonProps = {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  variation: ButtonVariation;
  click: () => void;
};
