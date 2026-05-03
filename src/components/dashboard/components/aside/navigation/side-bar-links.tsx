"use client";

import DashboardIcon from "@/assets/SVG/dashboard-icons/dashboard-icon";
import DiscountIcon from "@/assets/SVG/dashboard-icons/discount-icon";
import OrdersIcon from "@/assets/SVG/dashboard-icons/orders-icon";
import ProductsIcon from "@/assets/SVG/dashboard-icons/products-icon";
import ReportsIcon from "@/assets/SVG/dashboard-icons/reports-icon";
import SettingsIcon from "@/assets/SVG/dashboard-icons/settings-icon";
import UsersIcon from "@/assets/SVG/dashboard-icons/users-icon";
import WarehouseIcon from "@/assets/SVG/dashboard-icons/ware-house-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "داشبورد", icon: <DashboardIcon /> },
	{ href: "/products", label: "محصولات", icon: <ProductsIcon /> },
	{ href: "/orders", label: "سفارش‌ها", icon: <OrdersIcon /> },
	{ href: "/users", label: "کاربران", icon: <UsersIcon /> },
	{ href: "/discounts", label: "تخفیف‌ها", icon: <DiscountIcon /> },
	{ href: "/warehouse", label: "انبار", icon: <WarehouseIcon /> },
	{ href: "/reports", label: "گزارش‌ها", icon: <ReportsIcon /> },
	{ href: "/settings", label: "تنظیمات", icon: <SettingsIcon /> },
];

export function SidebarLinks() {
	const pathname = usePathname();

	return (
		<nav className="flex flex-col gap-2 px-3 mt-6">
			{links.map((item) => {
				const Icon = item.icon;

				const active =
					item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

				return (
					<Link
						key={item.href}
						href={item.href}
						className={`
              flex items-center gap-3
              px-3 py-2.5
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
