import React from "react";

export default function InputValidationError({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="absolute top-0 left-0">
			<p className="text-red-500 text-[10px] sm:text-sm">{children}</p>
		</div>
	);
}
