"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filter from "./Filter";
import { useDebounce } from "@/hooks/useDebounce";
import { GridIcon, ListIcon, SearchIcon } from "@/assets/icons";
import ListView from "./ListView";
import GridView from "./GridView";
import Pagination from "./Pagination";
const DataList = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("query") || "");
  const [filterData, setFilterData] = useState({});
  const [isListView, setIsListView] = useState(true);
  const debounceText = useDebounce(searchText, 500);
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debounceText) {
      params.set("query", debounceText);
      router.push(`?${params.toString()}`);
    }
    if (Object.keys(filterData).length) {
      Object.entries(filterData).map(([key, value]) => {
        params.set(key, value);
      });
      router.push(`?${params.toString()}`);
    }
  }, [debounceText, filterData]);
  const handleViewChange = useCallback(() => {
    setIsListView(!isListView);
  }, [isListView]);
  const resetQuery = () => {
    setSearchText("");
    setFilterData("");
    router.push(window.location.pathname);
  };
  return (
    <>
      <div className="mt-10 flex gap-20 max-sm:gap-4 max-sm:flex-col max-sm:justify-start justify-between">
        <div className="border w-full gap-4 h-10 px-4 flex items-center border-gray-300 rounded-md">
          <SearchIcon />
          <input
            placeholder="Start typing to search for any dataset.."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full outline-0"
          />
        </div>
        <div className="flex max-sm:justify-between gap-4">
          <button className="border hidden max-sm:block px-5 py-1 border-gray-300 shadow rounded-md">
            Filter
          </button>
          <div className="space-x-4 flex">
            <button className="cursor-pointer" onClick={handleViewChange}>
              <GridIcon isActive={!isListView} />
            </button>
            <button className="cursor-pointer" onClick={handleViewChange}>
              <ListIcon isActive={isListView} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-10 ">
        <div className="w-1/4 max-sm:hidden pr-10">
          <Filter
            aggregations={data?.aggregations}
            filterQuery={(query) => setFilterData(query)}
            resetQuery={resetQuery}
          />
        </div>
        <div className="w-9/12 max-sm:w-full space-y-4">
          {isListView &&
            data?.results?.map((results) => (
              <ListView key={results?.id} data={results} />
            ))}
          {!isListView && (
            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 w-full">
              {data?.results?.map((results) => (
                <GridView key={results?.id} data={results} />
              ))}
            </div>
          )}

          <Pagination totalItems={data?.total} />
        </div>
      </div>
    </>
  );
};

export default DataList;
