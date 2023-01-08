import React from "react";

const TrafficDiv = ({ data }) => {
  return (
    <>
      {data.percent ? (
        <div className="my-6 relative">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm capitalize font-semibold">{data.name}</div>
            <div className="text-sm capitalize font-semibold">{data.value}</div>
          </div>
          <div
            className={`w-[${data.percent}%] max-w-[${data.percent}%] h-1 rounded overflow-hidden bg-blue-500`}
          ></div>
        </div>
      ) : null}
    </>
  );
};

export default TrafficDiv;
