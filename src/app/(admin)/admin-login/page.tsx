import AdminLogin from "@/components/dashboard/components/admin-login/admin-login";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Admin Login",
	description: "فروشگاه اینترنتی ساعت مچی - رویکس گالری",
};
export default function AdminLoginPage() {
	return <AdminLogin />;
}
