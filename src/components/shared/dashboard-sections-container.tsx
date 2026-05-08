import React from "react";

export default function DashboardSectionsContainer({
	children,
	extraClasses,
}: {
	children: React.ReactNode;
	extraClasses?: string;
}) {
	return <div className={`${extraClasses} space-y-3`}>{children}</div>;
}
