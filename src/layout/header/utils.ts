export function initHeaderScroll(headerId: string, offset: number = 50) {
	const header = document.getElementById(headerId);
	if (!header) return;

	const onScroll = () => {
		if (window.scrollY > offset) {
			header.classList.remove("h-20");
			header.classList.add("h-10");
		} else {
			header.classList.remove("h-10");
			header.classList.add("h-20");
		}
	};

	window.addEventListener("scroll", onScroll);

	return () => {
		window.removeEventListener("scroll", onScroll);
	};
}
