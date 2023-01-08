import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai"

const Card = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="rounded-md w-full border border-gray-200 bg-white p-3">
          <div>
            <div className="mb-2 text-xs text-[#383838b9] font-semibold uppercase">{data.name}</div>
            <div className="flex justify-between items-end">
              <div className="font-semibold text-xl">${data.value}</div>
              <div
                className={`${
                  data.isIncreament ? "text-green-500" : "text-red-500"
                } flex items-center font-semibold text-sm`}
              >
                +{data.percent}% { data.isIncreament ?<AiOutlineArrowUp/>:<AiOutlineArrowDown/>}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
