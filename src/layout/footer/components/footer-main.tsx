import AboutUsIconFooter from "@/assets/SVG/footer-icons/about-us-icon-footer";
import BoxIcon from "@/assets/SVG/footer-icons/box-icon";
import ContactUsIconFooter from "@/assets/SVG/footer-icons/contact-us-icon-footer";
import DeliveryIcon from "@/assets/SVG/footer-icons/delivery-icon";
import EmailIconFooter from "@/assets/SVG/footer-icons/email-icon-footer";
import LocationIconFooter from "@/assets/SVG/footer-icons/location-icon-footer";
import MotorCycleIcon from "@/assets/SVG/footer-icons/motor-cycle-icon";
import PhoneIconFooter from "@/assets/SVG/footer-icons/phone-icon-footer";
import TruckIcon from "@/assets/SVG/footer-icons/truck-icon";
import {
	FooterMainSinglePart,
	FooterMainSinglePartDescription,
	FooterMainSinglePartDescriptionContainer,
	FooterMainSinglePartHeader,
} from "./footer-main-single-part";

export default function FooterMain() {
	return (
		<section className="w-full bg-linear-0 from-(--color-dark-green) to-(--color-darkest) text-(--color-bg) py-5 pb-25 mt-10">
			<div className="max-w-300 mx-auto px-6 flex flex-col lg:flex-row justify-evenly items-start gap-5">
				{/* delivery */}
				<FooterMainSinglePart>
					<FooterMainSinglePartHeader>
						<DeliveryIcon />
						ارسال سریع و مطمئن
					</FooterMainSinglePartHeader>
					<FooterMainSinglePartDescriptionContainer>
						<FooterMainSinglePartDescription>
							<TruckIcon />
							ارسال رایگان به سراسر ایران
						</FooterMainSinglePartDescription>

						<FooterMainSinglePartDescription>
							<MotorCycleIcon />
							ارسال سریع (در 1 الی 2 روز کاری)
						</FooterMainSinglePartDescription>

						<FooterMainSinglePartDescription>
							<BoxIcon />
							بسته بندی ویژه و امن
						</FooterMainSinglePartDescription>
					</FooterMainSinglePartDescriptionContainer>
				</FooterMainSinglePart>
				{/* contact-us */}
				<FooterMainSinglePart>
					<FooterMainSinglePartHeader>
						<ContactUsIconFooter />
						تماس با ما
					</FooterMainSinglePartHeader>
					<FooterMainSinglePartDescriptionContainer>
						<FooterMainSinglePartDescription>
							<PhoneIconFooter />
							021-1231231212
						</FooterMainSinglePartDescription>
						<FooterMainSinglePartDescription>
							<EmailIconFooter />
							info@rovixgallery.com
						</FooterMainSinglePartDescription>
						<FooterMainSinglePartDescription>
							<LocationIconFooter />
							تهران ، خیابان ولیعصر
						</FooterMainSinglePartDescription>
					</FooterMainSinglePartDescriptionContainer>
				</FooterMainSinglePart>
				{/* about-us */}
				<FooterMainSinglePart>
					<FooterMainSinglePartHeader>
						<AboutUsIconFooter />
						درباره ما
					</FooterMainSinglePartHeader>
					<FooterMainSinglePartDescriptionContainer>
						<FooterMainSinglePartDescription>
							<p className="text-[12px] text-gray-400 leading-5.5">
								رویکس گالری، مرجع تخصصی فروش ساعت‌های لوکس و اصل از برندهای
								معتبر جهان ما اصالت، کیفیت و رضایت شما را تضمین می‌کنیم.
							</p>
						</FooterMainSinglePartDescription>
					</FooterMainSinglePartDescriptionContainer>
				</FooterMainSinglePart>
				<div className="w-full p-5 flex flex-col justify-center items-center gap-2 border-2 border-(--color-accent-green)/80 rounded-sm">
					<span className="text-center text-white/70 text-[10px]">
						با ثبت ایمیل خود ، آخرین اخبار را اول دریافت کنید !
					</span>
					<div className="w-full flex flex-col justify-center items-center gap-3">
						<input
							type="email"
							className="w-full px-2 text-sm rounded-sm border border-white/40 outline-0 text-white py-3"
						/>
						<button className="p-3 bg-(--color-accent-green)/60 text-white rounded-sm text-[10px] w-full">
							ثبت ایمیل
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
