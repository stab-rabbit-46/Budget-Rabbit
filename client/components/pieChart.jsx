import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import utils from "../utils";

export default function pieChart({ categoryPercent, currentLabels, title }) {
  const pieChartObject = {
    labels: currentLabels,
    datasets: [
      {
        data: categoryPercent,
        label: "Rainfall",
        backgroundColor: [
          "#646FA9", //Housing
          "#49A9B4", //Utilities
          "#6BCD69", //Gas
          "#DBDCB8", //Groceries
          "#CBA18C", //Dining Out
          "#C4737C", //Drinks
          "#AA8D90", //Entertainment
          "#735558", //Savings
          "#787D96", //Other
        ],
        hoverBackgroundColor: [
          "#454E7D", //Housing
          "#357A81", //Utilities
          "#39A738", //Gas
          "#B3B66A", //Groceries
          "#A86B4C", //Dining Out
          "#9D424C", //Drinks
          "#805E62", //Entertainment
          "#523C3F", //Savings
          "#54586D", //Other
        ],
      },
    ],
  };

  return (
    <div className="pieChartContainer">
      <center>
        <h3>{title}</h3>
        <Doughnut
          data={pieChartObject}
          options={utils.pieChartOptions}
          plugins={utils.plugins}
        />
      </center>
    </div>
  );
}
