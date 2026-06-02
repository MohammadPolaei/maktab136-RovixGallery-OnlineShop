import UserAside from "@/components/main-app/user-profile/components/user-aside/user-aside";
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
		<OrdersProvider>
			<div className="w-screen h-full grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-3 relative">
				<div className="md:h-screen relative md:absolute -top-5 ">
					<UserAside />
				</div>
				<div className="hidden md:flex"></div>
				<div className="w-full overflow-auto">{children}</div>
			</div>
		</OrdersProvider>
	);
}
