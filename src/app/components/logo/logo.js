import React from "react";
import Image from "next/image";
import styles from "./logo.module.css";

import logoImg from "/public/images/logoImg.svg";

const Logo = () => {
	return (
		<a className={styles.logo} href="/" alt="Go to home page">
			<Image
				src={logoImg}
        className={styles.logo__img}
				alt="Логотип міністерства у справах ветеранів України"
			/>
		</a>
	);
};

export default Logo;
