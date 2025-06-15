import Button from "../button/button";

export default function Controls() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 w-1/3 h-lvh bg-lime-100">
      <Button
        type="button"
        variation="Add"
        click={() => console.log("Add clicked")}
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
    </div>
  );
}
