import React from "react";
import { trafficSourcesData } from "../../constants/datas";
import DaysFilterMinimize from "./DaysFilterMinimize";
import TrafficDiv from "./TrafficDiv";

const TrafficSource = () => {
  return (
    <>
      <div className="w-full lg:w-[30%] bg-white rounded-md border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">traffic sources</h2>
          <DaysFilterMinimize/>
        </div>
        {/* values */}
        {trafficSourcesData?.map((data, index)=>(
          <TrafficDiv data={data} key={index}/>
        ))}
      </div>
    </>
  );
};

export default TrafficSource;
