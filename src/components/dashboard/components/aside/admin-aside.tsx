import { SidebarLinks } from "./navigation/side-bar-links";

export function AdminAside() {
	return (
		<aside
			className="
      w-64
      h-screen
      flex
      flex-col
      text-(--color-bg)
      shadow-xl
			bg-(--color-super-dark-green)
    "
		>
			{/* Logo */}
			<div className="border-b border-dark-green  py-7 flex flex-col items-center">
				<div className="text-4xl font-bold text-gold">R</div>

				<p className="mt-3 text-sm tracking-widest">ROVIXGALLERY</p>

				<span className="text-xs text-gold-dark">TIMELESS ELEGANCE</span>
			</div>

			{/* Links */}
			<SidebarLinks />
		</aside>
	);
}
