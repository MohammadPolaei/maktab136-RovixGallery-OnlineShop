import MobileMenu from "./components/mobile-menu";
import Navbar from "./components/navbar";
import ScrollInit from "./components/scroll-init";
import HeaderTop from "./components/top-header";

export default function Header() {
	return (
		<header className="fixed top-0 w-full">
			<HeaderTop />
			<div className="hidden md:block">
				<Navbar />
			</div>
			<div className="block fixed -bottom-1 w-full md:hidden">
				<MobileMenu />
			</div>
			<ScrollInit />
		</header>
	);
}
