// FavoriteOutlined.tsx
export const FavoriteOutlined = ({
	color = "currentColor",
	size,
}: {
	color?: string;
	size: number;
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 17.5L8.79167 16.4C4.5 12.5083 1.66667 9.94167 1.66667 6.79167C1.66667 4.225 3.68333 2.20833 6.25 2.20833C7.7 2.20833 9.09167 2.88333 10 3.95C10.9083 2.88333 12.3 2.20833 13.75 2.20833C16.3167 2.20833 18.3333 4.225 18.3333 6.79167C18.3333 9.94167 15.5 12.5083 11.2083 16.4083L10 17.5Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

// FavoriteFilled.tsx
export const FavoriteFilled = ({ size }: { size: number }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 17.5L8.79167 16.4C4.5 12.5083 1.66667 9.94167 1.66667 6.79167C1.66667 4.225 3.68333 2.20833 6.25 2.20833C7.7 2.20833 9.09167 2.88333 10 3.95C10.9083 2.88333 12.3 2.20833 13.75 2.20833C16.3167 2.20833 18.3333 4.225 18.3333 6.79167C18.3333 9.94167 15.5 12.5083 11.2083 16.4083L10 17.5Z"
				fill="currentColor"
			/>
		</svg>
	);
};
