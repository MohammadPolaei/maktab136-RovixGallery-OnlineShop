"use client";

import { useEffect } from "react";
import { initHeaderScroll } from "../utils";

export default function ScrollInit() {
	useEffect(() => {
		const cleanup = initHeaderScroll("main-header", 200);
		return cleanup;
	}, []);

	return null;
}
