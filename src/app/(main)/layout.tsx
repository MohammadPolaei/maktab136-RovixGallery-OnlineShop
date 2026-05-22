import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "فروشگاه رویکس - Rovix Gallery",
	description: "فروشگاه اینترنتی ساعت مچی - رویکس گالری",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-zinc-100 flex flex-col justify-between items-center relative">
			<Header />
			<main className="pt-15 md:mt-12">{children}</main>
			<Footer />
		</div>
	);
}
