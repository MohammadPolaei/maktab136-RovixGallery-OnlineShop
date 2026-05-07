"use client";

import { useState } from "react";

export default function ProductsSearch() {
	const [query, setQuery] = useState("");

	return (
		<input
			placeholder="جستجوی محصول..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			className="w-full lg:max-w-1/3 px-4 py-2 rounded-md border text-sm outline-none
                 border-black/10 focus:border-(--color-gold)"
		/>
	);
}
