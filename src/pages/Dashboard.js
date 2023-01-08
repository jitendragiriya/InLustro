import React from "react";
import { cardDatas } from "../constants/datas";
import Card from "./dashboard/Card";
import RecentCustomers from "./dashboard/RecentCustomers";
import SalesReport from "./dashboard/SalesReport";
import TrafficSource from "./dashboard/TrafficSource";
import Transactions from "./dashboard/Transactions";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen p-4 max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-start">
          <h1 className="font-semibold text-xl text-black">Hey Mariana - </h1>
          <p className="text-[#535457]"> here's whats heppening with your story today</p>
        </div>
        {/* card */}
        <div className="my-6 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardDatas?.map((data, index)=>(
            <Card key={index} data={data}/>
          ))}
        </div>
        {/* sales report */}
        <div className="w-full gap-6 flex flex-col lg:flex-row">
          <SalesReport/>
          <TrafficSource/>
        </div>
        <div className="w-full gap-6 flex flex-col lg:flex-row my-6">
          <Transactions/>
          <RecentCustomers/>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
