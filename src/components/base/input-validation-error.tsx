import React from "react";

export default function InputValidationError({
	children,
	extraClasses,
}: {
	children: React.ReactNode;
	extraClasses: string;
}) {
	return (
		<div className="absolute top-0 left-0">
			<p className={`text-red-500 ${extraClasses}`}>{children}</p>
		</div>
	);
}
