import AboutUsIconFooter from "@/assets/SVG/footer-icons/about-us-icon-footer";
import BoxIcon from "@/assets/SVG/footer-icons/box-icon";
import ContactUsIconFooter from "@/assets/SVG/footer-icons/contact-us-icon-footer";
import DeliveryIcon from "@/assets/SVG/footer-icons/delivery-icon";
import MotorCycleIcon from "@/assets/SVG/footer-icons/motor-cycle-icon";
import TruckIcon from "@/assets/SVG/footer-icons/truck-icon";
import Image from "next/image";

export default function FooterMain() {
	return (
		<footer className="rovix-bg-darkest text-(--color-bg) py-16 pb-30 mt-10">
			<div className="max-w-6xl mx-auto px-6 flex flex-row justify-evenly items-start">
				{/* delivery */}
				<div className="flex flex-col justify-center items-start p-5 rounded-2xl hover:bg-(--color-dark-green) transition-all duration-800 ease-in-out">
					<h2 className="text-md mb-4 flex flex-row gap-1">
						<DeliveryIcon />
						ارسال سریع و مطمئن
					</h2>
					<div className="flex justify-center items-center gap-1">
						<TruckIcon />
						<p className="text-gray-400">این بخش آخرین محتوای صفحه است.</p>
					</div>
					<div className="flex justify-center items-center gap-1">
						<MotorCycleIcon />
						<p className="text-gray-400">این بخش آخرین محتوای صفحه است.</p>
					</div>
					<div className="flex justify-center items-center gap-1">
						<BoxIcon />
						<p className="text-gray-400">این بخش آخرین محتوای صفحه است.</p>
					</div>
				</div>
				{/* contact-us */}
				<div className="flex flex-col justify-center items-start p-5 rounded-2xl hover:bg-(--color-dark-green) transition-all duration-800 ease-in-out">
					<h2 className="text-md mb-4 flex flex-row gap-1">
						<ContactUsIconFooter />
						تماس با ما
					</h2>
					<div className="flex justify-center items-center gap-1">
						<Image alt="" src={""} width={10} height={10} />
						<p className="text-gray-400">این بخش آخرین محتوای صفحه است.</p>
					</div>
					<div className="flex justify-center items-center gap-1">
						<Image alt="" src={""} width={10} height={10} />
						<p className="text-gray-400">این بخش آخرین محتوای صفحه است.</p>
					</div>
				</div>
				{/* about-us */}
				<div className="flex flex-col justify-center items-start p-5 rounded-2xl hover:bg-(--color-dark-green) transition-all duration-800 ease-in-out">
					<h2 className="text-md mb-4 flex flex-row gap-1">
						<AboutUsIconFooter />
						درباره ما
					</h2>
					<div className="flex justify-center items-center gap-1">
						<Image alt="" src={""} width={10} height={10} />
						<p className="text-gray-400">این بخش آخرین محتوای صفحه است.</p>
					</div>
					<div className="flex justify-center items-center gap-1">
						<Image alt="" src={""} width={10} height={10} />
						<p className="text-gray-400">این بخش آخرین محتوای صفحه است.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
