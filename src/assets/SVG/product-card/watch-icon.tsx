import { SVGProps } from "react";

// آیکون صفحه ساعت (Dial)

export const WatchDialIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		{/* صفحه ساعت */}
		<circle cx="12" cy="12" r="9" />

		{/* عقربه‌ها */}
		<rect x="11.25" y="6.5" width="1.5" height="6" rx="0.75" fill="white" />
		<rect x="12" y="12" width="4.5" height="1.5" rx="0.75" fill="white" />
	</svg>
);

// آیکون بند ساعت (Strap/Band)

export const WatchStrapIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		{/* بدنه بند ضخیم و صاف */}
		<rect x="7" y="2" width="10" height="20" rx="4" />

		{/* سوراخ‌های بند */}
		<circle cx="12" cy="7" r="1.4" fill="white" />
		<circle cx="12" cy="12" r="1.4" fill="white" />
		<circle cx="12" cy="17" r="1.4" fill="white" />
	</svg>
);
