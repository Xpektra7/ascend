export default function Pill({ text }: { text: string }) {
  return (
    <span className="text-xs tracking-[0.3em] w-fit text-muted-foreground border border-border  px-6 py-2">
      {text}
    </span>
  );
}
