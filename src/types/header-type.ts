// Navbar / Mobile menu

import { JSX } from "react";

export type LinkItemsType = {
	id: number;
	title: string;
	href: string;
	icon: JSX.Element | string;
};

// Single navbar/mobile menu item
export type NavbarSingleItemsType = {
	extraClasses: string;
	href: string;
	title: string;
	icon: JSX.Element | string;
};
