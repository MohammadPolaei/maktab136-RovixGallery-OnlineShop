import Registry from "@/components/main-app/auth/components/registry";

export default function Page() {
	return (
		<div className="min-h-screen w-full flex items-center justify-center p-4">
			<div className="w-full px-8 py-5 rounded-sm shadow-lg bg-radial from-gray-100 to-white">
				<Registry />
			</div>
		</div>
	);
}
