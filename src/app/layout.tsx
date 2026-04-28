import Footer from "@/shared/layout/footer/footer";
import Header from "@/shared/layout/header/header";
import type { Metadata } from "next";
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
		<html lang="en" dir="rtl" className={` h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
