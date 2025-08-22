import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

interface CategoryOption {
  value: string;
  label: string;
}

interface CategoryDropdownProps {
  options: CategoryOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  options,
  selectedValues,
  onChange,
  placeholder = "Lĩnh vực",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleToggleOption = (value: string) => {
    const isSelected = selectedValues.includes(value);
    let newValues: string[];

    if (value === "all") {
      // If "Tất cả" is selected, clear all other selections
      newValues = isSelected ? [] : ["all"];
    } else {
      if (isSelected) {
        // Remove the option
        newValues = selectedValues.filter((v) => v !== value && v !== "all");
      } else {
        // Add the option and remove "all" if it was selected
        newValues = [...selectedValues.filter((v) => v !== "all"), value];
      }
    }

    onChange(newValues);
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) {
      return placeholder;
    }

    if (selectedValues.includes("all")) {
      return "Tất cả lĩnh vực";
    }

    if (selectedValues.length === 1) {
      const selectedOption = options.find(
        (opt) => opt.value === selectedValues[0]
      );
      return selectedOption?.label || placeholder;
    }

    return `${selectedValues.length} lĩnh vực đã chọn`;
  };

  return (
    <div
      ref={dropdownRef}
      className="relative w-full lg:w-auto lg:min-w-[366px]"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative h-[72px] px-4 py-3 flex items-center justify-between
          rounded-[12px] border cursor-pointer transition-all duration-300
          text-sm font-semibold bg-white
          outline-none ring-offset-0
          ${
            selectedValues.length > 0
              ? "border-[#53B086] text-gray-700 shadow-lg"
              : isOpen
              ? "border-[#53B086] text-gray-700 shadow-lg"
              : "border-gray-200 text-gray-700 hover:border-[#53B086] hover:shadow-md"
          }
        `}
      >
        <span className="truncate">{getDisplayText()}</span>

        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-20">
          {/* Search input */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm lĩnh vực..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#53B086] focus:ring-2 focus:ring-[#53B086]/20"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Options list với custom scrollbar */}
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <div
                    key={option.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleOption(option.value);
                    }}
                    className={`
                      px-4 py-3 text-sm font-medium cursor-pointer transition-colors duration-200
                      flex items-center gap-3 hover:bg-[#53B086]/5
                      ${
                        index === filteredOptions.length - 1
                          ? "rounded-b-xl"
                          : ""
                      }
                    `}
                  >
                    {/* Custom checkbox */}
                    <div
                      className={`
                        w-4 h-4 border-2 rounded flex items-center justify-center flex-shrink-0
                        transition-all duration-200
                        ${
                          isSelected
                            ? "bg-[#53B086] border-[#53B086]"
                            : "border-gray-300 hover:border-[#53B086]"
                        }
                      `}
                    >
                      {isSelected && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>

                    <span
                      className={`${
                        isSelected
                          ? "text-[#53B086] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-8 text-center text-gray-500 text-sm">
                Không tìm thấy lĩnh vực nào
              </div>
            )}
          </div>
        </div>
      )}

      {/* Custom CSS cho scrollbar - chỉ áp dụng khi dropdown này được render */}
      <style jsx>{`
        /* Custom scrollbar styles cho option list */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px; /* Độ rộng scrollbar 8px */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; /* Nền track trong suốt */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #9ca3af; /* Màu gray-400 cho thumb */
          border-radius: 9999px; /* Bo tròn hoàn toàn (pill shape) */
          border: none; /* Không có border */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #6b7280; /* Màu gray-500 khi hover */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:active {
          background-color: #4b5563; /* Màu gray-600 khi click */
        }

        /* Styles cho Firefox */
        .custom-scrollbar {
          scrollbar-width: thin; /* Scrollbar mảnh */
          scrollbar-color: #9ca3af transparent; /* Thumb gray, track transparent */
        }
      `}</style>
    </div>
  );
};

export default CategoryDropdown;
