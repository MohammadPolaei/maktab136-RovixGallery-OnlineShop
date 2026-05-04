"use client";

import DashboardIcon from "@/assets/SVG/dashboard-icons/dashboard-icon";
import DiscountIcon from "@/assets/SVG/dashboard-icons/discount-icon";
import OrdersIcon from "@/assets/SVG/dashboard-icons/orders-icon";
import ProductPriceIcon from "@/assets/SVG/dashboard-icons/product-price-icon";
import ProductsIcon from "@/assets/SVG/dashboard-icons/products-icon";
import ReportsIcon from "@/assets/SVG/dashboard-icons/reports-icon";
import SettingsIcon from "@/assets/SVG/dashboard-icons/settings-icon";
import UsersIcon from "@/assets/SVG/dashboard-icons/users-icon";
import { DASHBOARD_BASE_URL } from "@/components/dashboard/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: `${DASHBOARD_BASE_URL}`, label: "داشبورد", icon: <DashboardIcon /> },
	{
		href: `${DASHBOARD_BASE_URL}/products`,
		label: "محصولات",
		icon: <ProductsIcon />,
	},
	{
		href: `${DASHBOARD_BASE_URL}/quantity`,
		label: "قیمت و موجودی",
		icon: <ProductPriceIcon />,
	},
	{
		href: `${DASHBOARD_BASE_URL}/orders`,
		label: "سفارش‌ها",
		icon: <OrdersIcon />,
	},
	{
		href: `${DASHBOARD_BASE_URL}/users`,
		label: "کاربران",
		icon: <UsersIcon />,
	},
	{
		href: `${DASHBOARD_BASE_URL}/discounts`,
		label: "تخفیف‌ها",
		icon: <DiscountIcon />,
	},
	{
		href: `${DASHBOARD_BASE_URL}/reports`,
		label: "گزارش‌ها",
		icon: <ReportsIcon />,
	},
	{
		href: `${DASHBOARD_BASE_URL}/settings`,
		label: "تنظیمات",
		icon: <SettingsIcon />,
	},
];

export function SidebarLinks() {
	const pathname = usePathname();

	return (
		<nav className="flex flex-col gap-2 px-3 mt-6">
			{links.map((item) => {
				const active =
					item.href === `${DASHBOARD_BASE_URL}`
						? pathname === `${DASHBOARD_BASE_URL}`
						: pathname.startsWith(item.href);

				return (
					<Link
						key={item.href}
						href={item.href}
						className={`
              flex items-center gap-3
              px-3 py-3
              rounded-xl
              text-[12px]
              transition-all
							ease-in-out
							duration-500
              ${
								active
									? "bg-(--color-accent-green) text-(--color-gold)"
									: "text-gold/80 hover:bg-(--color-dark-green)"
							}
            `}
					>
						{item.icon}

						{item.label}
					</Link>
				);
			})}
		</nav>
	);
}
