import React from "react";

const Breadcrumb = () => {
  return (
    <div className="bg-secondary  py-1">
      <ul className="flex gap-2 container m-auto">
        <li>Home &gt;</li>
        <li className="font-semibold">All Data &gt;</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
