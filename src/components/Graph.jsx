import React from "react";
import {Line} from 'react-chartjs-2';

export class Graph extends React.Component {

    render() {
        const x = this.props.data.map((item, index) => new Date(item['x'] * 1000).toDateString());
        const y = this.props.data.map((item, index) => Number.parseFloat(item['y']).toFixed(2));
        const chartData = {
            labels: x,
            datasets: [
                {
                    label: this.props.chartName,
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: this.props.backgroundColor,
                    borderColor: this.props.borderColor,
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
                    data: y
                }
            ]
        };
        return (
            <div>
                <Line data={chartData}/>
            </div>
        );
    }
}