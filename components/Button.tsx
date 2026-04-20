import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: "primary" | "secondary" | "outline-dark";
  full?: boolean;
};

const Button = ({
  type,
  title,
  icon,
  variant = "primary",
  full,
}: ButtonProps) => {
  const variantClasses =
    variant === "primary"
      ? "bg-[#30af5b] text-white hover:bg-[#27994e]"
      : variant === "secondary"
      ? "bg-white text-[#292c27] border border-white hover:bg-gray-100"
      : "bg-[#292c27] text-white border border-[#a2a2a2] hover:bg-black";

  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 rounded-full px-6 py-4 transition-all duration-300 ${variantClasses} ${
        full ? "w-full" : ""
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="whitespace-nowrap text-[16px] font-semibold">
        {title}
      </span>
    </button>
  );
};

export default Button;