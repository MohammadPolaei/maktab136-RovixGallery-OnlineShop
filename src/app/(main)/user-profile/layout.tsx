import UserAside from "@/components/main-app/user-profile/components/user-aside/user-aside";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "پنل کاربری",
	description: "فروشگاه اینترنتی ساعت مچی - رویکس گالری",
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<UserAside />
			{children}
		</div>
	);
}
