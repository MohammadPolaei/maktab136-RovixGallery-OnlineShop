export default function SubmitButton({
	children,
	disabaled,
}: {
	children: React.ReactNode;
	disabaled?: boolean;
}) {
	return (
		<button
			type="submit"
			className="w-full bg-(--color-dark-green) rounded-md py-3 text-sm text-(--color-gold) font-semibold cursor-pointer"
			disabled={disabaled || false}
		>
			{children}
		</button>
	);
}
