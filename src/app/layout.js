import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "eVeteran (bot) Dashboard",
	description:
		"Centralized dashboard providing insights and support for veterans through the eVeteran chatbot. Analyze user interactions, manage support groups, and enhance the overall experience for veteran community.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
