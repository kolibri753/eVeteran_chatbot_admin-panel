"use client";

import React, { useState } from "react";
import FilterDropdown from "../filterDropdown/filterDropdown";
import Table from "../table/table";
import DoughnutChart from "../doughnutChart/doughnutChart";
import { exportToCSV } from "../../utils/exportUtils";
import { isInSelectedPeriod } from "../../utils/dateUtils";
import styles from "./usersDashboard.module.css";

import data from "../../data/mockData.json";

const UsersDashboard = ({ filterParams }) => {
	const [selectedPeriod, setSelectedPeriod] = useState("7 days");

	const periodOptions = [
		{ value: "7 days", label: "Last 7 days" },
		{ value: "14 days", label: "Last 14 days" },
		{ value: "21 days", label: "Last 21 days" },
		{ value: "1 month", label: "Last 1 month" },
		{ value: "3 months", label: "Last 3 months" },
		{ value: "6 months", label: "Last 6 months" },
		{ value: "1 year", label: "Last 1 year" },
	];

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
		if (filterParams === "all") {
			return isInSelectedPeriod(user.timestamp, selectedPeriod);
		}

		if (filterParams !== null) {
			const [status, sex] = filterParams.split(" ");

			if (status === "all") {
				return (
					(sex === "all" || user.sex === sex) &&
					isInSelectedPeriod(user.timestamp, selectedPeriod)
				);
			} else if (sex) {
				return (
					user.status === status &&
					(sex === "all" || user.sex === sex) &&
					isInSelectedPeriod(user.timestamp, selectedPeriod)
				);
			} else {
				return (
					user.status === filterParams &&
					isInSelectedPeriod(user.timestamp, selectedPeriod)
				);
			}
		}

		return false;
	});

	const handleExportToCSV = () => {
		exportToCSV(filteredData);
	};

	return (
		<section className={styles.dashboard}>
			<FilterDropdown
				value={selectedPeriod}
				onChange={setSelectedPeriod}
				options={periodOptions}
			/>
			<Table columns={columns} data={filteredData} />
			<DoughnutChart data={filteredData} />
			<button className={styles.csvBtn} onClick={handleExportToCSV}>
				Експорт (CVS)
			</button>
		</section>
	);
};

export default UsersDashboard;
