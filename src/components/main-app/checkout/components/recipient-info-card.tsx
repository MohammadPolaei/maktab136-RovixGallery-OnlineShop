import { User } from "./checkout-layout";

export default function RecipientInfoCard({ userData }: { userData: User }) {
	return (
		<div className="rounded-sm border border-gray-200 bg-white p-5">
			<h2 className="mb-4 text-lg font-semibold">اطلاعات گیرنده</h2>

			<div className="grid gap-3 sm:grid-cols-2">
				<Field label="نام" value={userData ? userData.name : ""} />
				<Field label="شماره تماس" value={userData ? userData.phone : ""} />
			</div>
		</div>
	);
}

function Field({ label, value }: { label: string; value: string | number }) {
	return (
		<div className="rounded-sm bg-gray-50 p-3">
			<div className="text-xs text-gray-500">{label}</div>
			<div className="mt-1 font-medium text-gray-900">{value}</div>
		</div>
	);
}
