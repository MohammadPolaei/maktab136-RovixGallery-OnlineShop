import { AdminAside } from "@/components/dashboard/components/aside/admin-aside";
import QueryProvider from "@/providers/query-provider";
import { OrdersProvider } from "@/utils/orders-context";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "داشبورد - Dashboard",
	description: "پنل مدیریت",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div id="dashboard-container" className="flex min-h-screen bg-bg">
			<div className="overflow-y-auto">
				<AdminAside />
			</div>
			<QueryProvider>
				<OrdersProvider>
					<main className="flex-1 py-4 md:py-4 md:px-8 h-screen overflow-y-auto bg-(--color-bg)">
						{children}
					</main>
				</OrdersProvider>
			</QueryProvider>
		</div>
	);
}
