import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "فروشگاه رویکس - Rovix Gallery",
	description: "فروشگاه اینترنتی ساعت مچی - رویکس گالری",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-zinc-100 flex flex-col justify-between items-center relative">
			<div className="bg-(--color-darkest) h-28 w-full absolute top-0" />

			<Header />
			<main className="pt-15 md:mt-12 mb-15">{children}</main>
			<Footer />
		</div>
	);
}
