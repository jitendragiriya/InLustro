import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { transactionsData } from "../../constants/datas";
import OneTransaction from "./OneTransaction";

const Transactions = () => {
  return (
    <>
      <div className="w-full lg:w-[70%] bg-white rounded-md border border-gray-200">
        <div className="flex items-center justify-between w-full mb-2 p-4">
          <div>
            <h2 className="font-semibold capitalize">transactions</h2>
            <p className="text-sm text-[#38383896]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <button className="text-sm capitalize text-blue-400 flex items-center">
            see all transactions{" "}
            <span className="ml-2">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className="">
          {transactionsData?.map((data, index) => (
            <OneTransaction data={data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Transactions;
