export default function SubmitButton({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<button
			type="submit"
			className="w-full bg-(--color-dark-green) rounded-md py-3 text-sm text-(--color-gold) font-semibold cursor-pointer"
		>
			{children}
		</button>
	);
}
