export function CrownLogin() {
	return (
		<svg
			width="80"
			height="80"
			viewBox="0 0 200 200"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* 5 پر بلند تاج */}
			<path
				fill="#0f3b2e"
				d="
          M20 120
          L45 60
          L75 95
          L100 40
          L125 95
          L155 60
          L180 120
          Z
        "
			/>

			{/* دور تاج باریک (Base) */}
			<rect x="35" y="125" width="130" height="12" rx="3" fill="#0f3b2e" />
		</svg>
	);
}
