export default function StatusBadge({ status }: { status: string }) {
	const styles: Record<string, string> = {
		"در حال پردازش": "bg-yellow-300 text-yellow-900",
		"تکمیل شده": "bg-green-300 text-green-900",
		"در انتظار پرداخت": "bg-yellow-200 text-yellow-700",
		"لغو شده": "bg-red-300 text-red-900",
	};

	return (
		<span className={`px-3 py-1 rounded text-xs font-medium ${styles[status]}`}>
			{status}
		</span>
	);
}
