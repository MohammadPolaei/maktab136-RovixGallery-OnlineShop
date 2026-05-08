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
			className="w-full bg-(--color-dark-green) rounded-md py-3 my-3 text-sm text-(--color-gold) font-semibold cursor-pointer disabled:bg-(--color-dark-green)/20 disabled:text-black/80"
			disabled={disabaled || false}
		>
			{children}
		</button>
	);
}
