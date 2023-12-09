import React from "react";
// import FilterDropdown from "../filterDropdown/filterDropdown";
import Table from "../table/table";
import { exportToCSV } from "../../utils/exportUtils";
import styles from "./usersDashboard.module.css";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import data from "../../data/mockData.json";

const UsersDashboard = ({ filterParams }) => {
	const columns = [
		{ key: "id", label: "Мобільний номер" },
		{ key: "name", label: "Ім'я користувача" },
		{ key: "sex", label: "Стать" },
		{ key: "age", label: "Вік" },
		{ key: "location", label: "Місце проживання" },
		{ key: "status", label: "Тип користувача" },
		{ key: "messenger", label: "Месенджер" },
		{ key: "timestamp", label: "Мітка часу" },
	];

	const filteredData = data.users.filter((user) => {
		console.log("Filter " + filterParams);
		if (filterParams === "all") {
			return true;
		}

		if (filterParams !== null) {
			const [status, sex] = filterParams.split(" ");

			if (status && sex) {
				console.log(user.status === status && user.sex === sex);
				if (status === "all") {
					return user.sex === sex;
				}

				return user.status === status && user.sex === sex;
			} else {
				return user.status === filterParams;
			}
		}

		return false;
	});

	const handleExportToCSV = () => {
		exportToCSV(filteredData);
	};

	const maleCount = filteredData.filter((user) => user.sex === "male").length;
	const femaleCount = filteredData.filter(
		(user) => user.sex === "female"
	).length;
	const totalUsers = maleCount + femaleCount;

	const doughnutData = {
		labels: ["Male", "Female"],
		datasets: [
			{
				data: [maleCount, femaleCount],
				backgroundColor: ["blue", "yellow"],
				hoverOffset: 4,
			},
		],
	};

	Chart.defaults.font.size = 20;

	return (
		<section className={styles.dashboard}>
			{/* <FilterDropdown value={category} onChange={setCategory} options={options} /> */}
			<Table columns={columns} data={filteredData} />
			<div className={styles.chart}>
				<Doughnut data={doughnutData} />
				<span className={styles.chart__center}>{totalUsers}</span>
			</div>

			<button className={styles.csvBtn} onClick={handleExportToCSV}>
				Експорт (CVS)
			</button>
		</section>
	);
};

export default UsersDashboard;
