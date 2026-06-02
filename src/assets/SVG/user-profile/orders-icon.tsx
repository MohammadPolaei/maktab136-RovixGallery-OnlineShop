import React from "react";

interface OrdersIconProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
	color?: string;
}

const OrdersIcon: React.FC<OrdersIconProps> = ({
	size = 24,
	color = "currentColor",
	...props
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			{/* بدنه اصلی جعبه */}
			<path
				d="M11.2386 3.12599C11.7107 2.85244 12.2893 2.85244 12.7614 3.12599L19.5085 7.03456C19.9868 7.3117 20.2812 7.81882 20.2812 8.36834V15.6317C20.2812 16.1812 19.9868 16.6883 19.5085 16.9654L12.7614 20.874C12.2893 21.1476 11.7107 21.1476 11.2386 20.874L4.49148 16.9654C4.01317 16.6883 3.71875 16.1812 3.71875 15.6317V8.36834C3.71875 7.81882 4.01317 7.3117 4.49148 7.03456L11.2386 3.12599Z"
				fill={color}
			/>
			{/* ایجاد سایه ملایم برای حالت سه بعدی و توپُر */}
			<path
				d="M12 11.25V20.7236L4.53613 16.4019C4.19532 16.2045 4 15.8601 4 15.5V8.5L12 11.25Z"
				fill="white"
				fillOpacity="0.2"
			/>
			<path
				d="M12 11.25L20 8.5V15.5C20 15.8601 19.8047 16.2045 19.4639 16.4019L12 20.7236V11.25Z"
				fill="white"
				fillOpacity="0.1"
			/>
		</svg>
	);
};

export default OrdersIcon;
