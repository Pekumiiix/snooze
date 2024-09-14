import { Button } from "@/components/ui/button";

export default function ButtonComponent({
  type,
  className = "",
  text,
}: ButtonComponentProps) {
  return (
    <Button
      type={type}
      className={`p-4 rounded-[8px] text-white font-semibold text-lg h-[48px] w-[220px] ${
        className === "" ? "bg-main" : className
      }`}
    >
      {text}
    </Button>
  );
}

interface ButtonComponentProps {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string; // className is optional
  text: string;
}
