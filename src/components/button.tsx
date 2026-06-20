import clsx from "clsx";

export default function Button({
  text,
  variant,
}: {
  text: string;
  variant?: string;
}) {
  return (
    <button
      type="button"
      className={clsx(
        "font-heading px-8 py-4 uppercase cursor-pointer bg-transparent text-foreground! transition-colors duration-300 ease-in-out",
        variant === "button"
          ? "border border-border hover:bg-foreground/5"
          : variant === "secondary"
            ? "border border-foreground/10 bg-foreground/10! hover:bg-foreground/20!"
            : variant === "link"
              ? "w-fit font-body! capitalize! px-0! py-0! text-text! hover:text-foreground!"
              : "",
      )}
    >
      {text}
    </button>
  );
}
