const MenuIcon = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
            className={className}
		>
			<g
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<path d="m5 7h14" />
				<path d="m5 12h14" />
				<path d="m5 17h14" />
			</g>
		</svg>
	);
};

export default MenuIcon;
