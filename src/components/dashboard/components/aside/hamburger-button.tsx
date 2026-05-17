"use client";
import { HamburgerIcon } from "./overal-view/hamburger-icon";

export default function HamburgerButton({ onclick }: { onclick: () => void }) {
	return (
		<div
			onClick={onclick}
			className="fixed z-20 top-2 right-2 p-2 rounded-sm active:bg-(--color-accent-green) transition-all duration-300 ease-in-out
      md:hidden
      "
		>
			<HamburgerIcon />
		</div>
	);
}
