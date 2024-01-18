import classNames from "classnames";

export default function Button({ children, kind = "primary", className }) {
  const kinds = {
    primary: "w-max bg-primary text-white hover:bg-primary/90 px-4 py-2",
    secondary:
      "w-max bg-transperant text-primary hover:text-white border border-primary hover:bg-primary px-4 py-2",
  };

  return (
    <button className={classNames(kinds[kind], className)}>{children}</button>
  );
}
