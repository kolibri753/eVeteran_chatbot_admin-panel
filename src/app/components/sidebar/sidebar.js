"use client";

import React, { useState } from "react";
import styles from "./sidebar.module.css";

const Sidebar = () => {
	const [activeMenu, setActiveMenu] = useState(null);

	const handleMenuClick = (menu) => {
		console.log(`Selected menu: ${menu}`);
		setActiveMenu(activeMenu === menu ? null : menu);
	};

	return (
		<div className={styles.sidebar}>
			<ul className={styles.sidebar__menu}>
				<li
					className={`${styles.sidebar__item} ${
						activeMenu === "users" ? styles.active : ""
					}`}
					onClick={() => handleMenuClick("users")}
				>
					Користувачі
					{activeMenu === "users" && (
						<ul className={styles.sidebar__submenu}>
							<li
								className={styles.submenu__item}
								onClick={(e) => {
									e.stopPropagation();
									handleMenuClick("men");
								}}
							>
								Чоловіки
							</li>
							<li
								className={styles.submenu__item}
								onClick={(e) => {
									e.stopPropagation();
									handleMenuClick("women");
								}}
							>
								Жінки
							</li>
						</ul>
					)}
				</li>
				<li
					className={`${styles.sidebar__item} ${
						activeMenu === "veterans" ? styles.active : ""
					}`}
					onClick={() => handleMenuClick("veterans")}
				>
					Ветерани
					{activeMenu === "veterans" && (
						<ul className={styles.sidebar__submenu}>
							<li
								className={styles.submenu__item}
								onClick={(e) => {
									e.stopPropagation();
									handleMenuClick("veterans_men");
								}}
							>
								Чоловіки
							</li>
							<li
								className={styles.submenu__item}
								onClick={(e) => {
									e.stopPropagation();
									handleMenuClick("veterans_women");
								}}
							>
								Жінки
							</li>
						</ul>
					)}
				</li>
				<li
					className={`${styles.sidebar__item} ${
						activeMenu === "family" ? styles.active : ""
					}`}
					onClick={() => handleMenuClick("family")}
				>
					Члени сім'ї
					{activeMenu === "family" && (
						<ul className={styles.sidebar__submenu}>
							<li
								className={styles.submenu__item}
								onClick={(e) => {
									e.stopPropagation();
									handleMenuClick("family_men");
								}}
							>
								Чоловіки
							</li>
							<li
								className={styles.submenu__item}
								onClick={(e) => {
									e.stopPropagation();
									handleMenuClick("family_women");
								}}
							>
								Жінки
							</li>
						</ul>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
