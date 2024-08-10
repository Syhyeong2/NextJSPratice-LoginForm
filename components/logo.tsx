import { FireIcon } from "@heroicons/react/16/solid";

interface SizeProps {
  size: "small" | "medium" | "large";
}

export default function Logo({ size }: SizeProps) {
  return (
    <>
      <FireIcon
        className={`${size === "small" && "size-12"} ${
          size === "medium" && "size-24"
        } ${size === "large" && "size-36"} mb-12 mt-24 text-red-400`}
      />
    </>
  );
}
