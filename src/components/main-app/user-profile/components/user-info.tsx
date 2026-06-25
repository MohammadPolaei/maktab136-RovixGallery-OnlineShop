"use client";

import { useGetUser } from "@/hooks/use-get-user";

export default function UserInfo() {
	const userData = useGetUser();
	return (
		<div>
			<div>
				<span>نام کاربر</span>
				<span>{userData.user?.name}</span>
			</div>
			<div>
				<span>شماره همراه</span>
				<span>{userData.user?.phone}</span>
			</div>
			<div>
				<span>ایمیل کاربر</span>
				<span>{userData.user?.email}</span>
			</div>
		</div>
	);
}
