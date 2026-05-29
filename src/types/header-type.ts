// Navbar / Mobile menu

import { JSX } from "react";

export type LinkItemsType = {
	id: number;
	title: string;
	href: string;
	icon: JSX.Element | string;
	modal: boolean;
	childData?: JSX.Element;
};

// Single navbar/mobile menu item
export type NavbarSingleItemsType = {
	extraClasses: string;
	href: string;
	title: string;
	icon: JSX.Element | string;
	hasModal?: boolean;
	childData?: JSX.Element;
};
