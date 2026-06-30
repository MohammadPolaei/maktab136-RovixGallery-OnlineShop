"use client";

import { useGetUser } from "@/hooks/use-get-user";

export default function UserInfo() {
	const userData = useGetUser();
	return (
		<div className="grid grid-cols-2 gap-5 h-full overflow-auto w-full bg-white rounded-sm p-3">
			<div className="font-semibold border-b border-b-black/20 w-full col-span-2 pb-3">
				{"اطلاعات کاربر"}
			</div>
			<span>نام کاربر</span>
			<span>{userData.user?.name}</span>
			<span>شماره همراه</span>
			<span>{userData.user?.phone}</span>
			<span>ایمیل کاربر</span>
			<span>{userData.user?.email}</span>
		</div>
	);
}
