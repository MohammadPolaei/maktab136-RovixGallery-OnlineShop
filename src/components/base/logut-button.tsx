"use client";

import LogoutIcon from "@/assets/SVG/logout-icon";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await axios.post("/api/auth/logout");

			router.replace("/auth/login");
			router.refresh();
		} catch (err) {
			console.error("LOGOUT FAILED:", err);
		}
	};

	return (
		<button
			onClick={handleLogout}
			className="w-4/5 px-3 py-2 rounded-2xl flex items-center justify-center gap-2 text-[10px] text-center cursor-pointer m-2 bg-[#3b0f0f]  hover:bg-red-600/40 active:text-white origin-center transition-all ease-in-out duration-500"
		>
			<LogoutIcon />
			خروج از حساب
		</button>
	);
}
