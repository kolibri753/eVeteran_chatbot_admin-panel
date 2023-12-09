import Link from "next/link";
import styles from "./page.module.css";
import Logo from "./components/logo/logo";

const Home = () => {
	return (
		<div className={styles.container}>
			<Logo />
			<h1 className={styles.title}>
				Вітаємо у адміністративній панелі для чат-бота &quot;е-Ветеран&quot;!
			</h1>
			<p className={styles.description}>
				Тут ви матимете повний контроль над інтерфейсом та аналітикою. Слідкуйте за
				активністю підписників, аналізуйте їх статуси та області звернень.
				Переглядайте статистику груп користувачів та активність їхньої взаємодії.{" "}
			</p>
			<Link href="/login" className={styles.link}>
				Перейти до Адміністративної Панелі
			</Link>
		</div>
	);
};

export default Home;
