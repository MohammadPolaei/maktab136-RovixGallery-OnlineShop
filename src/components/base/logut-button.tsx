"use client";

import LogoutIcon from "@/assets/SVG/logout-icon";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton({
	setIsLogged,
}: {
	setIsLogged?: (val: boolean) => void;
}) {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await axios.post("/api/auth/logout");
			router.refresh();
			if (setIsLogged) {
				setIsLogged!(false);
			}
			toast.message("خروج از حساب موفقیت‌آمیز بود");
		} catch (err) {
			console.error("LOGOUT FAILED:", err);
		}
	};

	return (
		<button
			onClick={handleLogout}
			className="w-full px-3 py-2 rounded-sm flex items-center justify-center gap-2 text-[10px] text-center cursor-pointer my-2 bg-[#3b0f0f] hover:bg-red-600/40 active:text-white origin-center transition-all ease-in-out duration-500"
		>
			<LogoutIcon />
			خروج از حساب
		</button>
	);
}
