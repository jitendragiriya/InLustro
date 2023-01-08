import React from "react";

const OneTransaction = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-5 px-6 py-3 border-b border-b-gray-300 last:border-0">
        <div
          className={`${
            data.status === "complete"
              ? "bg-green-100 text-green-500"
              : data.status === "pending"
              ? "bg-yellow-100 text-yellow-500"
              : "bg-red-100 text-red-500"
          } rounded-2xl px-2 py-1 flex items-center font-semibold capitalize w-fit h-fit`}
        >
          <div className="w-2 h-2 rounded-full"></div>

          {data.status}
        </div>
        <div className="flex flex-col items-start">
          <div className="capitalize font-semibold text-sm">
            {data.cardType}****
            {data.cardNumber.slice(
              data.cardNumber.length - 4,
              data.cardNumber.length
            )}
          </div>
          <div className="capitalize text-sm text-[#3333337a]">
            {data.method} payment
          </div>
        </div>
        <div>
          <div className="capitalize font-semibold text-sm">${data.money}</div>
          <div className="capitalize text-sm text-[#3333337a]">{data.date}</div>
        </div>
        <div className="capitalize text-sm text-[#3333337a]">{data.to}</div>
        <div className="mx-auto text-xl font-semibold text-[#3333337a]">...</div>
      </div>
    </>
  );
};

export default OneTransaction;
