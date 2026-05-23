import QueryProvider from "@/providers/query-provider";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "سبد خرید",
	description: "سبد خرید کاربر",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};
export default function Layout({ children }: { children: React.ReactNode }) {
	return <QueryProvider>{children}</QueryProvider>;
}
