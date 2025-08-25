import Image from "next/image";
import React from "react";

interface TabItemProps {
  id: string;
  label: string;
  iconPath: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const TabItem: React.FC<TabItemProps> = ({
  id,
  label,
  iconPath,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`
        relative p-3 lg:p-6 items-center gap-2 lg:gap-4  overflow-hidden
        border rounded-[12px] md:rounded-[24px] transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-gray-400/10 bg-white text-gray-700 
      `}
    >
      {/* Dấu tích bo tròn ở góc trên bên phải khi tab được chọn */}
      {isActive && (
        <div className="absolute top-0 right-0 ">
          <img
            src="/project/icons/icon-05.svg"
            alt=""
            className="w-[50px] lg:w-auto"
          />
        </div>
      )}

      {/* Icon */}
      <Image
        src={iconPath}
        alt={label}
        width={300}
        height={300}
        className="object-contain size-[40px] lg:size-[70px]"
      />

      {/* Label */}
      <p className="lg:pt-4 text-sm lg:text-xl font-semibold">{label}</p>
    </div>
  );
};

export default TabItem;
