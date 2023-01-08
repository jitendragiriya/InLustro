import React from "react";

const DayFilterButton = ({ value, setValue, option }) => {
  const setValues = ()=>{
    setValue(option)
  }
  
  return (
    <>
      <button
        className={`text-sm font-semibold mx-3  px-2 py-1 ${option === value ? "text-[#383838] border border-gray-300 rounded" :"text-[#38383879]"}`}
        onClick={setValues}
      >
        {option}
      </button>
    </>
  );
};

export default DayFilterButton;
