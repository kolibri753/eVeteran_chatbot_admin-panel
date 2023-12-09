"use client";

import React, { useState } from "react";
import UsersDashboard from "../components/usersDashboard/usersDashboard";
import Sidebar from "../components/sidebar/sidebar";
import styles from "./page.module.css";
import Logo from "../components/logo/logo";

const MainPage = () => {
	const [filterParams, setFilterParams] = useState("all");

	const handleMenuClick = (menu, submenu) => {
		if (submenu) {
      setFilterParams(submenu);
    } else {
      setFilterParams(menu);
    }
	};

	const generateSubmenu = (sex) => [
		{ key: `${sex}_male`, value: "male", label: "Чоловіки" },
		{ key: `${sex}_female`, value: "female", label: "Жінки" },
	];

	const menuOptions = [
		{
			key: "users",
			value: "all",
			label: "Користувачі",
			submenu: generateSubmenu(""),
		},
		{
			key: "veterans",
			value: "veteran",
			label: "Ветерани",
			submenu: generateSubmenu("veterans"),
		},
		{
			key: "family",
			value: "family",
			label: "Члени сім'ї",
			submenu: generateSubmenu("family"),
		},
	];

	return (
		<section className={styles.container}>
			<Logo />
			<Sidebar onMenuClick={handleMenuClick} menuOptions={menuOptions} />
			<UsersDashboard filterParams={filterParams}/>
		</section>
	);
};

export default MainPage;
