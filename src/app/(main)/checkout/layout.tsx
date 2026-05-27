import { CheckoutProvider } from "@/components/main-app/checkout/utils/checkout-context";
import CheckoutProgress from "@/components/shared/checkout-progress";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<CheckoutProvider>
				<div className="w-full flex flex-col justify-start items-center">
					<div className="w-full pt-5">
						<CheckoutProgress />
					</div>

					{children}
				</div>
			</CheckoutProvider>
		</div>
	);
}
