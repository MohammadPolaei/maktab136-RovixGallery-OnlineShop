export default function NotFoundIcon() {
	return (
		<svg
			width="360"
			height="310"
			viewBox="0 0 360 310"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g>
				<path
					d="M70 180
         C20 180 20 120 80 120
         C90 70 160 60 190 95
         C240 60 320 90 310 140
         C350 150 350 210 290 210
         H110
         C90 210 70 200 70 180 Z"
					fill="#1e514210"
				>
					<animateTransform
						attributeName="transform"
						type="translate"
						dur="6s"
						values="0 0; 10 0; 0 0"
						repeatCount="indefinite"
					/>
				</path>
			</g>

			<ellipse cx="180" cy="250" rx="90" ry="14" fill="#1e514233" />

			<text
				x="50%"
				y="32%"
				textAnchor="middle"
				fontSize="95"
				fontWeight="800"
				fill="#1e5142"
				fontFamily="sans-serif"
			>
				404
			</text>

			<circle
				cx="180"
				cy="160"
				r="55"
				fill="#ffffff"
				stroke="#1e5142"
				strokeWidth="6"
			/>

			<g stroke="#1e5142" strokeWidth="4" strokeLinecap="round">
				<line x1="180" y1="110" x2="180" y2="122" />
				<line x1="180" y1="208" x2="180" y2="198" />
				<line x1="130" y1="160" x2="142" y2="160" />
				<line x1="230" y1="160" x2="218" y2="160" />
			</g>

			<line
				x1="180"
				y1="160"
				x2="180"
				y2="110"
				stroke="#1e5142"
				strokeWidth="6"
				strokeLinecap="round"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					dur="4s"
					values="0 180 160;360 180 160"
					repeatCount="indefinite"
					calcMode="spline"
					keySplines="0.4 0 0.2 1"
				/>
			</line>

			<line
				x1="180"
				y1="160"
				x2="218"
				y2="160"
				stroke="#1e5142"
				strokeWidth="6"
				strokeLinecap="round"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					dur="12s"
					values="0 180 160;360 180 160"
					repeatCount="indefinite"
					calcMode="spline"
					keySplines="0.4 0 0.2 1"
				/>
			</line>

			<text
				x="50%"
				y="295"
				textAnchor="middle"
				fontSize="20"
				fill="#1e5142"
				fontFamily="sans-serif"
			>
				صفحه مورد نظر پیدا نشد
			</text>
		</svg>
	);
}
