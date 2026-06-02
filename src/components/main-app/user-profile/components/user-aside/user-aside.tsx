"use client";
import userAvatar from "@/assets/img/user-avatar.png";
import OrdersIcon from "@/assets/SVG/dashboard-icons/orders-icon";
import UsersIcon from "@/assets/SVG/dashboard-icons/users-icon";
import { FavoriteFilled } from "@/assets/SVG/product-card/favorite-icon";
import LogoutButton from "@/components/base/logut-button";
import { useGetUser } from "@/hooks/use-get-user";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const userProfileURL = "/user-profile";
const links = [
	{
		href: `${userProfileURL}`,
		label: "داشبورد",
		icon: <UsersIcon />,
	},
	{
		href: `${userProfileURL}/orders`,
		label: "سفارشات",
		icon: <OrdersIcon />,
	},
	{
		href: `${userProfileURL}/favorites`,
		label: "پسندیده ها",
		icon: <FavoriteFilled size={18} />,
	},
];
export default function UserAside() {
	const pathname = usePathname();
	const { user, error, isLoading } = useGetUser();
	return (
		<div className="min-w-30 max-w-full md:w-[20vw] h-full md:h-screen flex flex-col justify-start items-start gap-2 bg-(--color-darkest) text-white/70  py-5 px-2">
			<div className="w-full flex flex-col justify-center items-center">
				<Image
					alt="user-profile-picture"
					src={userAvatar}
					width={200}
					height={200}
					className="w-30"
				/>
			</div>
			<div className="w-full flex justify-center items-center gap-5 border-b border-b-white/20 py-5">
				<span>{user?.name}</span>
			</div>

			<nav className="flex flex-col items-center gap-2 px-3 mt-6 w-full">
				{links.map((item) => {
					const active =
						item.href === `${userProfileURL}`
							? pathname === `${userProfileURL}`
							: pathname.startsWith(item.href);

					return (
						<Link
							// onClick={() => setOpenSidebar(false)}
							key={item.href}
							href={item.href}
							className={`
								w-full
              flex justify-between items-center gap-3
              px-3 py-3
              rounded-sm
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
							{item.label}
							{item.icon}
						</Link>
					);
				})}
				<LogoutButton />
			</nav>
		</div>
	);
}
