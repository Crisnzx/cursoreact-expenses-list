import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

   return (
      <div className="chart">
         {props.dataPoints.map((dataPoint) => {
            return <ChartBar
               key={dataPoint.label}
               value={dataPoint.value}
               maxValue={props.totalValue}
               label={dataPoint.label}
            />
         })}
      </div>
   );
}

export default Chart;