import Navbar from "./components/navbar";
import ScrollInit from "./components/scroll-init";
import HeaderTop from "./components/top-header";

export default function Header() {
	return (
		<div className="fixed top-0 w-full">
			<HeaderTop />
			<Navbar />
			<ScrollInit />
		</div>
	);
}
