import Login from "@/components/main-app/auth/components/login";

export default function Page() {
	return (
		<div className="min-h-full w-full flex flex-col items-center justify-start p-0 relative">
			<div className="sticky top-15 bottom-0 md:top-[25%] h-full w-screen md:w-fit px-1 md:px-8 py-5 rounded-sm shadow shadow-black/5 bg-radial from-gray-100 to-white">
				<Login />
			</div>
		</div>
	);
}
