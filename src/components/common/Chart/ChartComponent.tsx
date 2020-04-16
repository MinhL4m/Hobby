import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

interface ChartComponentProps {
	labels: string[];
	label: string;
	data: number[];
	backgroundColor: string[];
	borderColor: string[];
}

const displayChart = (
	labels: string[],
	label: string,
	data: number[],
	backgroundColor: string[],
	borderColor: string[]
): void => {
	var skill = document.getElementById('skills') as HTMLCanvasElement;
	var ctx = skill.getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'horizontalBar',
		data: {
			labels: labels,
			datasets: [
				{
					label: label,
					data: data,
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderWidth: 1
				}
			]
		},
		options: {
			scales: {
				xAxes: [
					{
						ticks: {
							beginAtZero: true,
							max: 100
						}
					}
				]
			}
		}
	});
};
export const ChartComponent: React.FC<ChartComponentProps> = ({
	labels,
	label,
	data,
	backgroundColor,
	borderColor
}) => {
	useEffect(() => {
		displayChart(labels, label, data, backgroundColor, borderColor);
	}, []);

	return <canvas id="skills" width="200" height="100" />;
};
