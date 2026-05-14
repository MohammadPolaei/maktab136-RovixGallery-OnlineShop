import FooterBar from "./components/footer-bar";
import FooterMain from "./components/footer-main";
import FooterSentinel from "./components/footer-sentinel";

export default function Footer() {
	return (
		<footer className="w-full z-400">
			<div className="w-full rovix-bg-darkest rovix-text-light">
				<div className="hidden md:block">
					<FooterBar />
				</div>
				<FooterMain />
				<div className="hidden md:block">
					<FooterSentinel />
				</div>
			</div>
		</footer>
	);
}
