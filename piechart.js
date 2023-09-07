import React from 'react';
import { Pie } from 'react-chartjs-2';
import {

  Chart as ChartJS,

  ArcElement,

  Tooltip,

  Legend

} from "chart.js";
ChartJS.register(ArcElement,

  Tooltip,

  Legend);

const PieChart = () => {
  const data = {
    labels: [ 'Novels', 'Technical','Management'],
    datasets: [
      {
        data: [50,20,20],
        backgroundColor: ['Slateblue','Orange','Gray'],
        // hoverBackgroundColor: ['Slateblue','Orange','Gray','Violet','tomato','MediumSeaGreen'],
      },
    ],
  };

  return (
  <div >
      <div style={{height:'20rem',width:'25rem',float:'center'}}>
      <Pie data={data} /></div>
    </div>
  );
};

export default PieChart;
