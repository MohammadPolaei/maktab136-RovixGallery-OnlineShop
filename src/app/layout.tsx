import type { Metadata } from "next";
import { samim } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "فروشگاه رویکس - Rovix Gallery",
	description: "فروشگاه اینترنتی ساعت مچی - رویکس گالری",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl" className={`h-full antialiased`}>
			<body className={`${samim.className} min-h-full flex flex-col`}>
				{children}
			</body>
		</html>
	);
}
