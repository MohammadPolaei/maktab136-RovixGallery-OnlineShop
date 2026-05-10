export default function AddProductInputContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative p-0 flex items-center justify-between">
			{children}
		</div>
	);
}
