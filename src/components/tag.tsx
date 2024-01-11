import clsx from "clsx";

export default function Tag({ className, label, color = "grey" }: Props) {
  const tagTypesByColor = {
    grey: "bg-[#858585]",
    black: "bg-black",
    red: "bg-[#E42628]",
    green: "bg-[#22AC49]",
    blue: "bg-[#0C356A]",
    yellow: "bg-[#FFCC0B]",
    white: "bg-white border border-black",
  }[color];

  return (
    <div className={clsx("flex justify-center items-center px-3 py-1.5", className, tagTypesByColor)}>
      <span className="text-2xl text-white font-semibold">{label}</span>
    </div>
  );
}

interface Props {
  className?: string;
  label?: string;
  color?: "grey" | "black" | "red" | "green" | "blue" | "yellow" | "white";
}
