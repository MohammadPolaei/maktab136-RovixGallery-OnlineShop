import watchImage from "@/assets/img/blog/image.png";
import rovixGalleryLogo from "@/assets/img/rovix-logo-2.png";
import Image from "next/image";

export default function ProductsBlog() {
	return (
		<section className="max-w-screen min-h-full mx-auto px-6 py-10 leading-relaxed text-gray-800 dark:text-gray-200 text-[12px] bg-white rounded-md relative">
			<div className="w-full flex flex-col justify-center items-center bg-white/40 backdrop-blur-[5px] rounded-b-md sticky top-0">
				<Image
					alt="Rovix Gallery"
					src={rovixGalleryLogo}
					width={2500}
					height={2500}
					className="w-10"
				/>
				<h1 className="text-sm md:text-md font-bold text-center text-emerald-700 mb-6">
					خرید ساعت مچی از رویکس گالری
				</h1>
			</div>

			<p className="mb-6 text-justify">
				فروشگاه اینترنتی <strong>RovixGallery | رویکس گالری</strong> با هدف
				ارائه مجموعه‌ای از بهترین و معتبرترین ساعت‌های مچی جهان، بستری مطمئن
				برای انتخاب و خرید ساعت اصل فراهم کرده است. در رویکس گالری می‌توانید
				تنوعی کامل از برندهای جهانی مانند
				<strong>
					{" "}
					Rolex، Omega، Casio، Citizen، Seiko، Orient، Hamilton، Longines،
					Tissot و Tag Heuer{" "}
				</strong>{" "}
				مشاهده کنید و بر اساس سبک، بودجه و سلیقه‌ی خود، بهترین گزینه را انتخاب
				نمایید.
			</p>

			<p className="mb-10 text-justify">
				رویکس گالری تلاش می‌کند تجربه‌ای فراتر از یک خرید ساده برای شما فراهم
				کند — تجربه‌ای همراه با اطمینان از اصالت کالا، پشتیبانی تخصصی، و ارسال
				سریع. چه به‌دنبال ساعت‌های <strong>لوکس و خاص</strong> باشید، چه مدل‌های{" "}
				<strong>اسپرت و روزمره</strong>، مجموعه ما پاسخگوی سلیقه‌ی شماست.
			</p>
			<div>
				<h2 className="text-sm font-semibold text-emerald-700 mb-4">
					چرا خرید از رویکس گالری؟
				</h2>
				<ul className="list-disc pr-6 mb-8 space-y-2">
					<li>تضمین اصالت کالا و ارائه کارت گارانتی معتبر</li>
					<li>تنوع بی‌نظیر از برندهای جهانی</li>
					<li>امکان فیلتر، جستجو و مرتب‌سازی پیشرفته</li>
					<li>ارسال سریع و بسته‌بندی ایمن</li>
					<li>پشتیبانی آنلاین و مشاوره انتخاب ساعت</li>
				</ul>
				<div className="rounded-2xl py-10 overflow-hidden">
					<Image
						draggable={false}
						src={watchImage}
						alt="watch"
						className="w-full rounded-2xl"
						width={2500}
						height={2500}
					/>
				</div>
			</div>

			<h2 className="text-sm font-semibold text-emerald-700 mb-4">
				راهنمای خرید ساعت مچی
			</h2>
			<p className="mb-6 text-justify">
				برای انتخاب یک ساعت مناسب، بهتر است چند نکته مهم را در نظر بگیرید:
			</p>

			<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
				۱. جنس بدنه و بند
			</h3>
			<p className="mb-4 text-justify">
				ساعت‌های استیل و تیتانیوم مناسب استفاده روزانه‌اند. مدل‌های چرمی سبک‌تر
				بوده و برای استایل رسمی گزینه‌ای زیبا هستند.
			</p>

			<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
				۲. نوع موتور (Movement)
			</h3>
			<p className="mb-4 text-justify">
				ساعت‌های <strong>کوارتز</strong> دقت بالا و هزینه نگهداری پایین‌تری
				دارند. اگر تجربه‌ای لوکس‌تر می‌خواهید، ساعت‌های{" "}
				<strong>اتوماتیک</strong> انتخابی ماندگارند.
			</p>

			<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
				۳. مقاومت در برابر آب
			</h3>
			<p className="mb-4 text-justify">
				اگر فعالیت روزانه شما شامل ورزش یا شست‌وشو است، حتماً ساعت خود را بر
				اساس درجه مقاومت در برابر آب (Water Resistance) انتخاب کنید.
			</p>

			<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
				۴. سبک و موقعیت استفاده
			</h3>
			<ul className="list-disc pr-6 mb-4 space-y-1">
				<li>کلاسیک برای استایل رسمی</li>
				<li>اسپرت برای سبک روزمره و فعالیت‌های پرتحرک</li>
				<li>لاکچری برای مناسبت‌های ویژه یا هدیه خاص</li>
			</ul>

			<h3 className="text-[12px] font-semibold text-emerald-600 mb-2">
				۵. انتخاب برند مناسب
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm md:text-base">
				<p>
					<strong>Rolex:</strong> نماد لوکس بودن و ظرافت مهندسی.
				</p>
				<p>
					<strong>Omega:</strong> محبوب کلکسیونرها و علاقه‌مندان به طراحی خاص.
				</p>
				<p>
					<strong>Casio:</strong> مقاوم، اقتصادی، با دوام بالا.
				</p>
				<p>
					<strong>Citizen:</strong> ساعت‌های دقیق و دوستدار محیط زیست با
					تکنولوژی Eco-Drive.
				</p>
				<p>
					<strong>Seiko:</strong> پیشرو در دقت و طراحی ژاپنی.
				</p>
				<p>
					<strong>Orient:</strong> انتخابی مقرون‌به‌صرفه و با اصالت.
				</p>
				<p>
					<strong>Hamilton:</strong> ترکیبی از اصالت آمریکایی و کیفیت سوئیسی.
				</p>
				<p>
					<strong>Longines:</strong> شیک، مانیفست اصالت و سبک کلاسیک.
				</p>
				<p>
					<strong>Tissot:</strong> خوش‌قیمت با استانداردهای بالای سوئیسی.
				</p>
				<p>
					<strong>Tag Heuer:</strong> اسپرت، دقیق و محبوب در میان عاشقان سرعت.
				</p>
			</div>

			<h2 className="text-sm font-semibold text-emerald-700 mb-4">جمع‌بندی</h2>
			<p className="mb-6 text-justify">
				در <strong>رویکس گالری</strong>، ما باور داریم که ساعت فقط ابزاری برای
				سنجش زمان نیست، بلکه بیانی از سبک زندگی و شخصیت شماست. اگر به دنبال خرید
				ساعت مچی اصل هستید، مجموعه‌ای از برندهای معتبر جهانی در RovixGallery
				منتظر شماست تا تجربه‌ای ویژه از کیفیت، اصالت و زیبایی را رقم بزنید.
			</p>

			<div className="text-center mt-8 border-t border-emerald-600 pt-6">
				<p className="text-lg font-semibold text-emerald-700">
					✨ با رویکس گالری، زمان را با سلیقه‌تان بسازید ✨
				</p>
			</div>
		</section>
	);
}
