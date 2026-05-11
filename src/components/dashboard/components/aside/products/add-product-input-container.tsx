export default function AddProductInputContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full relative p-0 flex flex-col items-center justify-between gap-1">
			{children}
		</div>
	);
}
