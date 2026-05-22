import AdminLogin from "@/components/dashboard/components/admin-login/admin-login";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Admin Login",
	description: "فروشگاه اینترنتی ساعت مچی - رویکس گالری",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function AdminLoginPage() {
	return <AdminLogin />;
}
