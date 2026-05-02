import FooterBar from "./components/footer-bar";
import FooterMain from "./components/footer-main";
import FooterSentinel from "./components/footer-sentinel";

export default function Footer() {
	return (
		<footer className="w-full">
			<div className="w-full rovix-bg-darkest rovix-text-light">
				<FooterBar />
				<FooterMain />
				<FooterSentinel />
			</div>
		</footer>
	);
}
