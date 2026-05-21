import { samim } from "./fonts";
import "./globals.css";

export const metadata = {
	title: "فروشگاه روویکس | Rovix Store",
	description: "بهترین ساعت‌ها و اکسسوری‌های لوکس.",
	openGraph: {
		type: "website",
		images: ["/og-main.jpg"],
	},
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
