"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await axios.post("/api/auth/logout");

			router.refresh();

			router.replace("/auth/login");
		} catch (err) {
			console.error("LOGOUT FAILED:", err);
		}
	};

	return (
		<button
			onClick={handleLogout}
			className="px-3 py-2 rounded-2xl flex items-center justify-between gap-2 text-center hover:bg-[#3b0f0f] active:text-white origin-center transition-all ease-in-out duration-500"
		>
			خروج از حساب
		</button>
	);
}
