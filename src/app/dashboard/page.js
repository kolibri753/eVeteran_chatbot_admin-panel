import React from "react";
import UsersDashboard from "../components/usersDashboard/usersDashboard";
import CustomSidebar from "../components/sidebar/sidebar";
import styles from "./page.module.css";
import Logo from "../components/logo/logo";

const MainPage = () => {
	return (
		<div className={styles.container}>
			<Logo />

			<CustomSidebar />

			<UsersDashboard />
		</div>
	);
};

export default MainPage;
