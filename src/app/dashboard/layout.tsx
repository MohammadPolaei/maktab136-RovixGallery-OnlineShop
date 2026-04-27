import AdminAside from "@/components/dashboard/components/aside/admin-aside";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "داشبورد - Dashboard",
	description: "پنل مدیریت",
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<AdminAside />
			{children}
		</div>
	);
}
