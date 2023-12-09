import React from "react";
import styles from "./lineChart.module.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-moment";
import moment from "moment";
Chart.register(...registerables);

const LineChart = ({ data }) => {
	console.log("Data received:", data);

	const messengerData = {};

	data.forEach((user) => {
		const date = moment(user.timestamp).format("YYYY-MM-DD");
		const messenger = user.messenger;

		if (!messengerData[messenger]) {
			messengerData[messenger] = {};
		}

		if (!messengerData[messenger][date]) {
			messengerData[messenger][date] = 0;
		}

		messengerData[messenger][date]++;
	});

	// Convert grouped data to datasets
	const datasets = Object.keys(messengerData).map((messenger, index) => ({
		label: `${messenger} кількість реєстрацій`,
		data: Object.keys(messengerData[messenger]).map((date) => ({
			x: moment(date),
			y: messengerData[messenger][date],
		})),
		fill: false,
		borderColor: getRandomColor(index),
		tension: 0.1,
	}));

	const formattedData = {
		labels: datasets[0]?.data.map((point) => point.x) || [],
		datasets,
	};

	const chartOptions = {
		scales: {
			x: {
				type: "time",
				time: {
					parser: "YYYY-MM-DD",
					tooltipFormat: "ll HH:mm",
					displayFormats: {
						quarter: "MMM YYYY",
					},
				},
				title: {
					display: true,
					text: "Дата",
				},
			},
			y: {
				title: {
					display: true,
					text: "Кількість реєстрацій",
				},
			},
		},
	};

	return (
		<div className={styles.chart}>
			<Line data={formattedData} options={chartOptions} />
		</div>
	);
};

export default LineChart;

function getRandomColor(index) {
	const colors = ["red", "green", "blue"]; // Add more colors if needed
	return colors[index % colors.length];
}
