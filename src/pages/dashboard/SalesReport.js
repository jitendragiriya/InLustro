import React from "react";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { AiOutlineSave } from "react-icons/ai";

// importing temporary data
import { salesData } from "../../constants/datas";
import DaysFilterFullWidth from "./DaysFilterFullWidth";

// include after all imports
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

const SalesReport = () => {
  return (
    <>
      <div className="bg-white rounded-md w-full lg:w-[70%] border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="capitalize font-semibold">sales report</h2>
          <DaysFilterFullWidth />
          <button className="flex items-center justify-between py-1 px-2 rounded border border-gray-200 text-sm font-semibold">
            <AiOutlineSave style={{ marginRight: "4px" }} /> Export PDF
          </button>
        </div>

        <div className="kn-salesr-com-bar">
          <Bar
            data={salesData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SalesReport;
