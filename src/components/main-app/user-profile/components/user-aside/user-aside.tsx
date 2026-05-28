"use client";
import { useGetUser } from "@/hooks/use-get-user";

export default function UserAside() {
	const { user, error, isLoading } = useGetUser();
	return (
		<div className="min-w-50 max-w-[30vw] h-full flex flex-col justify-start items-start gap-5 bg-(--color-dark-green) py-30">
			<div>image</div>
			<div>Orders</div>
			<div></div>
		</div>
	);
}
