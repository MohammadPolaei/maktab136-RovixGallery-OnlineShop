import Navbar from "./components/navbar";
import HeaderTop from "./components/top-header";

export default function Header() {
	return (
		<div className="sticky top-0">
			<HeaderTop />
			<Navbar />
		</div>
	);
}
