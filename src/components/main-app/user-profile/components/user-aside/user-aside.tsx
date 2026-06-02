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
	const { user, isLoading } = useGetUser();
	return (
		<>
			{isLoading ? (
				<div className="min-w-30 max-w-full md:w-[20vw] h-full flex flex-col justify-start items-start gap-2 bg-(--color-darkest) text-white/70 py-5 px-2">
					{/* Avatar */}
					<div className="w-full flex flex-col justify-center items-center">
						<div className="w-30 h-30 rounded-full bg-white/10 animate-pulse" />
					</div>

					{/* Name */}
					<div className="w-full flex justify-center items-center gap-5 border-b border-b-white/20 py-5">
						<div className="h-3 w-24 rounded bg-white/10 animate-pulse" />
					</div>

					{/* Nav items */}
					<nav className="flex flex-col items-center gap-2 px-3 mt-6 w-full">
						{Array.from({ length: 2 }).map((_, idx) => (
							<div
								key={idx}
								className="w-full flex justify-between items-center gap-3 px-3 py-3 rounded-sm bg-white/5"
							>
								{/* label skeleton */}
								<div className="h-3 w-[55%] rounded bg-white/10 animate-pulse" />

								{/* icon skeleton (15x15) */}
								<div className="w-3.75 h-3.75 rounded bg-white/10 animate-pulse" />
							</div>
						))}

						{/* Logout button skeleton */}
						<div className="w-full mt-2 flex justify-between items-center gap-3 px-3 py-3 rounded-sm bg-white/5">
							<div className="h-3 w-[40%] rounded bg-white/10 animate-pulse" />
							<div className="w-3.75 h-3.75 rounded bg-white/10 animate-pulse" />
						</div>
					</nav>
				</div>
			) : (
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
			)}
		</>
	);
}
