"use client";
import React, { useState, useEffect } from "react";
import CheckBox from "@/components/ui/CheckBox";
import { PlusIcon } from "@/assets/icons";
import Accordion from "@/components/ui/Accordion";
import Card from "@/components/ui/Card";
import { useRouter } from "next/navigation";

const Filter = ({ aggregations, filterQuery ,resetQuery}) => {
  const [filterData, setFilterData] = useState({});
  const router = useRouter();
  const handleFilterChange = (e, category) => {
    const { checked, value } = e.target;
    setFilterData((prev) => {
      const prevValues = prev[category] || [];

      const updatedValues = checked
        ? [...prevValues, value]
        : prevValues.filter((item) => item !== value);

      const updated = {
        ...prev,
        [category]: updatedValues.length > 0 ? updatedValues : undefined,
      };

      // Remove key entirely if empty
      Object.keys(updated).forEach(
        (key) => updated[key] === undefined && delete updated[key]
      );

      return updated;
    });
  };

  useEffect(() => {
    filterQuery(filterData);
  }, [filterData]);

  const resetFilters = () => {
    setFilterData({});
    resetQuery();
    
  };

  return (
    <Card>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold ">FILTERS</span>
          <button
            onClick={resetFilters}
            className="text-brown cursor-pointer font-semibold text-sm"
          >
            RESET
          </button>
        </div>
        {Object.entries(aggregations).map(([category, options]) => (
          <div key={category}>
            <Accordion header={category} count={Object.keys(options).length}>
              <ul className="ml-4 space-y-1 text-sm">
                {Object.entries(options).map(([label]) => (
                  <li key={label} className="flex justify-between">
                    <CheckBox
                      onChange={(e) => handleFilterChange(e, category)}
                      label={label}
                      value={label}
                      checked={filterData?.[category]?.includes(label) || false}
                    />
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Filter;
