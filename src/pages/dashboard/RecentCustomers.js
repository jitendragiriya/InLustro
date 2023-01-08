import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { customersData } from "../../constants/datas";
import OneCustomer from "./OneCustomer";

const RecentCustomers = () => {
  return (
    <>
      <div className="w-full lg:w-[30%] bg-white rounded-md border border-gray-200">
        <div className="flex items-center justify-between w-full mb-2 p-4">
          <div>
            <h2 className="font-semibold capitalize">Recent Customers</h2>
            <p className="text-sm text-[#38383896]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="">
            {customersData?.map((data, index)=>(
                <OneCustomer data={data} key={index}/>
            ))}
        </div>
        <button className="text-sm capitalize text-[#3333337a] flex items-center mx-6 my-2">
          see all transactions
          <span className="ml-2">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>
    </>
  );
};

export default RecentCustomers;
