import React, { useState } from "react";
import { dayFilters } from "../../constants/filter";
import DayFilterButton from "./DayFilterButton";

const DaysFilterFullWidth = () => {
  const [value, setValue] = useState(dayFilters[0]?.value);
  return (
    <>
      <div>
        {dayFilters?.map((data, index) => (
          <DayFilterButton
            value={value}
            setValue={setValue}
            option={data.value}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default DaysFilterFullWidth;
