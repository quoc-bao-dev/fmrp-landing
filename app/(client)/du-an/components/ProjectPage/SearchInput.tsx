import React from "react";
import { Search, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Tìm kiếm dự án",
}) => {
  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="relative flex-1">
      <div className="relative w-full">
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full pl-4 pr-20 h-[72px]
            rounded-[12px] border bg-white
            text-sm font-medium placeholder:text-gray-400
            transition-all duration-300 shadow-xl 
            outline-none ring-offset-0
            border-gray-50 
            focus:border-[#53B086] focus:ring-2 focus:ring-[#53B086]/20 focus:ring-offset-0 focus:outline-none
            focus-visible:border-[#53B086] focus-visible:ring-2 focus-visible:ring-[#53B086]/20 focus-visible:ring-offset-0 focus-visible:outline-none
          `}
        />

        {/* Clear button */}
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-[80px] top-1/2 transform -translate-y-1/2 size-8 bg-gray-950 p-0 text-gray-50 rounded-full hover:text-gray-600"
          >
            <XIcon />
          </Button>
        )}

        {/* Search button */}
        <Button
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 size-[48px] p-0 bg-[#53B086] hover:bg-[#53B086]/90 rounded-[12px]"
        >
          <Search className="size-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
