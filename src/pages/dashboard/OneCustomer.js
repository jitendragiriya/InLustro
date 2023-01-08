import React from "react";

const OneCustomer = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-green-300 flex items-center justify-center font-bold">
            P
          </div>
          <div className="ml-2">
            <div className="capitalize font-semibold">{data.name}</div>
            <div className="text-[#3333337a] text-xs">{data.email}</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="font-semibold">${data.price}</div>
          <div className="text-[#3333337a] capitalize">{data.country}</div>
        </div>
      </div>
    </>
  );
};

export default OneCustomer;
