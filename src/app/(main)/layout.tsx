import Footer from "@/shared/layout/footer/footer";
import Header from "@/shared/layout/header/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "فروشگاه رویکس - Rovix Gallery",
	description: "فروشگاه اینترنتی ساعت مچی - رویکس گالری",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
