import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Chart = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    axios
      .get("https://eq-works-task.glitch.me/stats/daily")
      .then((res) => setStats(res.data));
  }, []);
  console.log(stats);
  return (
    <div>
      {stats.map((stat, index) => (
        <BarChart key={index} width={600} height={300} data={stat}>
          <XAxis dataKey={stat.revenue} stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey={stat.impressions} fill="#8884d8" barSize={30} />
        </BarChart>
      ))}
    </div>
  );
};

export default Chart;
