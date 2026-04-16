import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: "primary" | "secondary";
  full?: boolean;
};

const Button = ({ type, title, icon, variant = "primary", full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
        flex items-center justify-center gap-3 
        rounded-full px-6 py-3 
        transition-all duration-300
        ${full ? "w-full" : ""}
        ${
          variant === "primary"
            ? "bg-[#30af5b] text-white hover:bg-[#27994e]"
            : "bg-white text-[#313131] border border-white hover:bg-gray-100"
        }
      `}
    >
      {icon && (
        <Image src={icon} alt={title} width={20} height={20} />
      )}

      <span className="text-[16px] font-semibold whitespace-nowrap">
        {title}
      </span>
    </button>
  );
};

export default Button;