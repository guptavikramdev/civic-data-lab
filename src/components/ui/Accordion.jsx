import { MinusIcon, PlusIcon } from "@/assets/icons";
import React, { useState } from "react";

const Accordion = ({ header, children, count }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-light cursor-pointer flex justify-between items-center capitalize text-foreground-secondary font-semibold rounded-lg p-2 border border-gray-300"
      >
        <span className="text-[#414651] text-[16px] font-medium ">
          {header} ({count})
        </span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "min-h-24 mt-4 max-h-48 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Accordion;
