import { OrdersProvider } from "@/utils/orders-context";
import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
	title: "پنل کاربری",
	description: "فروشگاه اینترنتی ساعت مچی - رویکس گالری",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full grid grid-cols-1 relative">
			<OrdersProvider>
				<div className="fixed top-0 right-0 h-screen">
					{/* <UserAside /> */}
				</div>
				{children}
			</OrdersProvider>
		</div>
	);
}
