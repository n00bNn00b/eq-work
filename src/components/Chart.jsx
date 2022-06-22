import axios from "axios";
import React, { useEffect, useState } from "react";
import Graph from "./Graph";

const Chart = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("https://eq-works-task.glitch.me/stats/daily")
      .then((res) => {
        setStats(res.data);
        // setData(stats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(stats);
  return (
    <div>
      {stats.splice(0, 1).map((stat, index) => (
        <Graph key={index} stat={stat} stats={stats} />
      ))}
    </div>
  );
};

export default Chart;
