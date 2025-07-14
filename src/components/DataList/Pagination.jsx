import React, { useState } from "react";
import Card from "@/components/ui/Card";

const Pagination = ({totalItems}) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const totalPage=  Math.ceil(totalItems/pageSize)
  const handlePrev = () => {
    setPageNumber((prev) => prev - 1);
  };
  const handleNext = () => {
    setPageNumber((prev) => prev + 1);
  };
  return (
    <Card>
      <div className="flex justify-end">
        <div className="flex space-x-5">
          <select
            onChange={(e) => setPageSize(e?.target?.value)}
            value={pageSize}
          >
            {[5, 10, 20].map((option) => (
              <option value={option} key={option}>{option}</option>
            ))}
          </select>
          <div className="space-x-2">
            <span>Page</span>
            <span className="font-semibold">{pageNumber}</span>
            <span>of {totalPage}</span>
          </div>
          <div className="space-x-4 text-primary font-semibold">
            <button className="cursor-pointer" onClick={handlePrev} disabled={pageNumber==1}>
              <span>&lt;</span> Prev
            </button>
            <button className="cursor-pointer" onClick={handleNext} disabled={pageNumber==totalPage}>
              Next <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Pagination;
