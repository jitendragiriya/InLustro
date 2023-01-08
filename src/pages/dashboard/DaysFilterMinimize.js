import React, { useState } from "react";
import { dayFilters } from "../../constants/filter";

const DaysFilterMinimize = () => {
  const [value, setValue] = useState(dayFilters[0]?.value);
  return (
    <>
      <select
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-fit border border-gray-300 rounded py-1 px-2"
      >
        {dayFilters?.map((data, index) => (
          <option value={data.value} key={index}>
            {data.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DaysFilterMinimize;
