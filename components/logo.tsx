import { FireIcon } from "@heroicons/react/16/solid";

interface SizeProps {
  size: "small" | "medium" | "large" | "xlarge";
}

export default function Logo({ size }: SizeProps) {
  return (
    <>
      <FireIcon
        className={`${size === "small" && "size-12"} ${
          size === "medium" && "size-24"
        } ${size === "large" && "size-36"} ${
          size === "xlarge" && "size-56"
        } mb-12  text-red-400`}
      />
    </>
  );
}
