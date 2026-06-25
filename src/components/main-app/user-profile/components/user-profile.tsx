import UserFavourites from "./user-favourites";
import UserInfo from "./user-info";
import UserOrdersSummary from "./user-orders-summary";

export default function UserProfile() {
	return (
		<div className="w-full bg-red-200 flex flex-col md:flex-row justify-center items-center">
			<div className="flex-1">
				<UserInfo />
			</div>
			<div className="flex-2">
				<div>
					<UserOrdersSummary />
				</div>
				<div>
					<UserFavourites />
				</div>
			</div>
		</div>
	);
}
