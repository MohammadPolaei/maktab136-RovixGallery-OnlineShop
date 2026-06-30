import UserFavourites from "./user-favourites";
import UserInfo from "./user-info";
import UserOrdersSummary from "./user-orders-summary";

export default function UserProfile() {
	return (
		<div className="w-full flex flex-col md:flex-row justify-center gap-3 md:justify-start items-center md:items-start py-2">
			<div className="flex-3 h-full">
				<UserInfo />
			</div>
			<div className="flex-3 w-3/5">
				<div className="overflow-auto">
					<UserOrdersSummary />
				</div>
				<div>
					<UserFavourites />
				</div>
			</div>
		</div>
	);
}
