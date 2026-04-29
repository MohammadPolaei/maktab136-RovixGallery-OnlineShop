import localFont from "next/font/local";

export const samim = localFont({
	src: [
		{
			path: "../assets/fonts/Samim.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/Samim-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-samim",
	display: "swap",
});
