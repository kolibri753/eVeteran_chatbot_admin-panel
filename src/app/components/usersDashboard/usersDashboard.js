import React from "react";
// import FilterDropdown from "../filterDropdown/filterDropdown";
import Table from "../table/table";
import { exportToCSV } from "../../utils/exportUtils";
import styles from "./usersDashboard.module.css";
import data from "../../data/mockData.json";

const UsersDashboard = ({ filterParams }) => {
	const columns = [
		{ key: "id", label: "ID" },
		{ key: "name", label: "Name" },
		{ key: "sex", label: "Sex" },
		{ key: "age", label: "Age" },
		{ key: "location", label: "Location" },
		{ key: "status", label: "Status" },
		{ key: "messenger", label: "Messenger" },
		{ key: "timestamp", label: "Timestamp" },
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

	return (
		<section className={styles.dashboard}>
			{/* <FilterDropdown value={category} onChange={setCategory} options={options} /> */}
			<Table columns={columns} data={filteredData} />
			<button className={styles.csvBtn} onClick={handleExportToCSV}>Export to CSV</button>
		</section>
	);
};

export default UsersDashboard;
