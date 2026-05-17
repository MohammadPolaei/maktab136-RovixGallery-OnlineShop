"use client";

import { useEffect } from "react";
import { initHeaderScroll } from "../utils";

export default function ScrollInit() {
	useEffect(() => {
		const cleanup = initHeaderScroll("main-header", 20);
		return cleanup;
	}, []);

	return null;
}
