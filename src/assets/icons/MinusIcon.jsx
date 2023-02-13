const MinusIcon = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className}
		>
			<path
				d="m0 0h24v24h-24z"
				fill="none"
				transform="matrix(-1 0 0 -1 24 24)"
			/>
			<path d="m19 13h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
		</svg>
	);
};

export default MinusIcon;
