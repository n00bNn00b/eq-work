import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = ({ stats }) => {
  // const { impressions, clicks, date, revenue } = stats;

  return (
    <div id="stat" className="my-20 sm:my-40 pb-10 lg:w-full  sm:w-96">
      <h1 className="text-center text-secondary font-bold text-2xl">
        Daily Statistics
      </h1>
      <div className="mt-20 flex justify-center align-center">
        <ComposedChart
          width={400}
          height={500}
          data={stats}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" />
          <YAxis dataKey="revenue" />
          <Tooltip />
          <Legend />
          <Bar dataKey="impressions" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="clicks" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Graph;
