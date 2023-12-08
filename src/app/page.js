import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./components/logo/logo";

const Home = () => {
	return (
		<div className={styles.container}>
			<Logo />
			<h1 className={styles.title}>Welcome to e-Veteran Dashboard</h1>
			<p className={styles.description}>
				This is the homepage of the eVeteran Dashboard.
			</p>
			<Link href="/login" className={styles.link}>
				Go to Login Page
			</Link>
			<Link href="/dashboard" className={styles.link}>
				Go to Dashboard
			</Link>
		</div>
	);
};

export default Home;
