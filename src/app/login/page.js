"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const auth = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleLogin = (e) => {
    e.preventDefault();

		// TODO (next-auth)
		if (username === "admin" && password === "admin") {
			router.push("/dashboard");
		} else {
      window.alert('Wrong credentials!');
    }
	};

	return (
		<div className={styles.auth}>
			<h2 className={styles.auth__title}>Login</h2>
			<form className={styles.auth__form} onSubmit={handleLogin}>
				<div className={styles.auth__inputGroup}>
					<label htmlFor="username" className={styles.auth__label}>
						Username:
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
						Password:
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
					Login
				</button>
			</form>
		</div>
	);
};

export default auth;
