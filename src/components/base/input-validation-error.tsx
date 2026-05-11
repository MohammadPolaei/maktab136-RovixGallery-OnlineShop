import React from "react";

export default function InputValidationError({
	children,
	extraClasses,
}: {
	children: React.ReactNode;
	extraClasses: string;
}) {
	return (
		<div className="">
			<p className={`w-full text-red-500 ${extraClasses}`}>{children}</p>
		</div>
	);
}
