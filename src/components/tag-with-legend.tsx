import clsx from "clsx";
import Tag from "./tag";

export default function TagWithLegend({ className, classNameTag, label, legend, color }: Props) {
  return (
    <div className={clsx("flex flex-row justify-start items-center w-full space-x-2", className)}>
      <div className="flex justify-start items-center w-[25%]">
        <Tag color={color} label={label} className={clsx("w-[70px]", classNameTag)} />
      </div>
      <div className="flex justify-start items-center w-[75%]">
        <span className="text-black text-sm leading-none">{legend}</span>
      </div>
    </div>
  );
}

interface Props {
  className?: string;
  classNameTag?: string;
  label?: string;
  legend?: string;
  color?: "grey" | "black" | "red" | "green" | "blue" | "yellow" | "white";
}
