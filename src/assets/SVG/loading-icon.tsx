export default function RovixLuxuryLoader() {
	return (
		<div style={{ width: "100%", maxWidth: 260, margin: "0 auto" }}>
			<svg
				viewBox="0 0 260 170"
				width="100%"
				height="100%"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#ffffff70" />
						<stop offset="100%" stopColor="#ffffff00" />
					</linearGradient>

					<filter id="blur">
						<feGaussianBlur stdDeviation="1" />
					</filter>
				</defs>

				{/* very subtle cloud */}
				<g opacity="0.08">
					<path
						d="M0 85 C40 60 90 60 120 85 C160 70 200 75 190 105 C230 115 230 130 170 130 H60 C20 130 0 110 0 85Z"
						fill="#1e5142"
					>
						<animateTransform
							attributeName="transform"
							type="translate"
							dur="80s"
							values="-260 0;260 0"
							repeatCount="indefinite"
						/>
					</path>
				</g>

				{/* outer ring */}
				<circle
					cx="130"
					cy="95"
					r="52"
					fill="none"
					stroke="#1e5142"
					strokeWidth="0.7"
					strokeDasharray="4 10"
					strokeLinecap="round"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						dur="6s"
						values="0 130 95;360 130 95"
						repeatCount="indefinite"
					/>
				</circle>

				{/* inner ring */}
				<circle
					cx="130"
					cy="95"
					r="45"
					fill="none"
					stroke="#1e5142"
					strokeWidth="0.6"
					strokeDasharray="2 8"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						dur="9s"
						values="360 130 95;0 130 95"
						repeatCount="indefinite"
					/>
				</circle>

				{/* small gear */}
				<g stroke="#1e5142" strokeWidth="0.8" fill="none">
					<circle cx="100" cy="125" r="9">
						<animateTransform
							attributeName="transform"
							type="rotate"
							dur="6s"
							values="0 100 125;360 100 125"
							repeatCount="indefinite"
						/>
					</circle>
				</g>

				{/* clock body */}
				<circle
					cx="130"
					cy="95"
					r="28"
					fill="white"
					stroke="#1e5142"
					strokeWidth="1.5"
				/>

				{/* markers */}
				<g stroke="#1e5142" strokeWidth="1.1" strokeLinecap="round">
					<line x1="130" y1="67" x2="130" y2="75" />
					<line x1="130" y1="123" x2="130" y2="115" />
					<line x1="102" y1="95" x2="110" y2="95" />
					<line x1="158" y1="95" x2="150" y2="95" />
				</g>

				{/* minute hand */}
				<line
					x1="130"
					y1="95"
					x2="130"
					y2="72"
					stroke="#1e5142"
					strokeWidth="1.5"
					strokeLinecap="round"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						dur="3s"
						values="0 130 95;360 130 95"
						repeatCount="indefinite"
					/>
				</line>

				{/* hour hand */}
				<line
					x1="130"
					y1="95"
					x2="150"
					y2="95"
					stroke="#1e5142"
					strokeWidth="1.5"
					strokeLinecap="round"
				>
					<animateTransform
						attributeName="transform"
						type="rotate"
						dur="10s"
						values="0 130 95;360 130 95"
						repeatCount="indefinite"
					/>
				</line>

				{/* reflection */}
				<ellipse
					cx="138"
					cy="86"
					rx="16"
					ry="6"
					fill="url(#glass)"
					transform="rotate(-25 138 86)"
					opacity="0.5"
					filter="url(#blur)"
				/>

				{/* shadow */}
				<ellipse cx="130" cy="150" rx="40" ry="5" fill="#1e514220" />
			</svg>
		</div>
	);
}
