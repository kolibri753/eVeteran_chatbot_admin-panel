"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Logo from "../components/logo/logo";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleLogin = (e) => {
		e.preventDefault();

		// TODO (next-auth)
		if (username === "admin" && password === "admin") {
			router.push("/dashboard");
		} else {
			window.alert("Wrong credentials!\n-------TEMP:-------\nlogin=admin\npassword=admin\n------------------------");
		}
	};

	return (
		<div className={styles.auth}>
			<Logo />
			<h2 className={styles.auth__title}>Авторизація</h2>
			<form className={styles.auth__form} onSubmit={handleLogin}>
				<div className={styles.auth__inputGroup}>
					<label htmlFor="username" className={styles.auth__label}>
						Логін:
					</label>
					<input
						type="text"
						id="username"
						className={styles.auth__input}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className={styles.auth__inputGroup}>
					<label htmlFor="password" className={styles.auth__label}>
						Пароль:
					</label>
					<input
						type="password"
						id="password"
						className={styles.auth__input}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" className={styles.auth__button}>
					Увійти
				</button>
			</form>
		</div>
	);
};

export default Login;
