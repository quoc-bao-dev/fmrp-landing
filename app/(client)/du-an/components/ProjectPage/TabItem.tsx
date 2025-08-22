import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface TabItemProps {
  id: string;
  label: string;
  iconPath: string;
  isActive: boolean;
  onClick: (id: string) => void;
  variant?: "desktop" | "mobile";
}

const TabItem: React.FC<TabItemProps> = ({
  id,
  label,
  iconPath,
  isActive,
  onClick,
  variant = "desktop",
}) => {
  if (variant === "mobile") {
    return (
      <div
        onClick={() => onClick(id)}
        className={`
          relative flex-shrink-0 h-auto p-4 flex items-center gap-3
          rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden
          ${
            isActive
              ? "bg-white border border-[#A1A1A11A] text-gray-700 shadow-lg"
              : "bg-none border-gray-200 text-[#809FB8] hover:border-[#53B086] hover:shadow-md"
          }
        `}
      >
        {/* Icon */}
        <div className="size-[24px] flex items-center justify-center flex-shrink-0">
          <Image
            src={iconPath}
            alt={label}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        {/* Label */}
        <span className="text-sm font-semibold">{label}</span>
      </div>
    );
  }

  return (
    <div
      onClick={() => onClick(id)}
      className={`
        relative p-6 items-center gap-4  overflow-hidden
        border rounded-[24px] transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-gray-400/10 bg-white text-gray-700 
      `}
    >
      {/* Dấu tích bo tròn ở góc trên bên phải khi tab được chọn */}
      {isActive && (
        <div className="absolute -top-4 -right-2">
          <img src="/project/icons/image-02.png" alt="" className="" />
        </div>
      )}

      {/* Icon */}
      <div className="size-[70px] flex items-center justify-center">
        <Image
          src={iconPath}
          alt={label}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      {/* Label */}
      <p className="pt-4 text-xl font-semibold">{label}</p>
    </div>
  );
};

export default TabItem;
