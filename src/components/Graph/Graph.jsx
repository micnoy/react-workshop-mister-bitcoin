import React from "react";
import {Line} from 'react-chartjs-2';

const Graph = (props) => {
    const xAxisData = props.data.map((item) => new Date(item['x'] * 1000).toDateString());
    const yAxisData = props.data.map((item) => Number.parseFloat(item['y']).toFixed(2));

    const {chartName, backgroundColor, borderColor} = props;

    const chartData = {
        labels: xAxisData,
        datasets: [
            {
                label: chartName,
                fill: true,
                lineTension: 0.2,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#000000',
                pointBorderWidth: 2,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: yAxisData
            }
        ]
    };
    return (
        <Line data={chartData}/>
    );
};

export default Graph;

