export function initHeaderScroll(headerId: string, offset: number = 50) {
	const header = document.getElementById(headerId);
	if (!header) return;

	const onScroll = () => {
		if (window.scrollY > offset) {
			header.classList.remove("rovix-bg-darkest", "h-12");
			header.classList.add("bg-[#1e5142]/40", "h-9");
		} else {
			header.classList.remove("bg-[#1e5142]/40", "h-9");
			header.classList.add("rovix-bg-darkest", "h-12");
		}
	};

	window.addEventListener("scroll", onScroll);

	return () => {
		window.removeEventListener("scroll", onScroll);
	};
}
