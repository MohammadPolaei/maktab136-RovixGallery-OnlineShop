import LoadingIcon from "@/assets/SVG/loading-icon";

export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen w-full bg-(--color-accent-green)/20">
			<LoadingIcon />
		</div>
	);
}
