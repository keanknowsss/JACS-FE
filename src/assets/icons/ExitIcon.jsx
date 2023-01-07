const ExitIcon = ({ className, onClick }) => {
	return (
		<svg
            className={className}
            onClick={onClick}
			xmlns="http://www.w3.org/2000/svg"
			height="16"
			viewBox="0 0 16 16"
			width="16"
		>
			<path
				d="m19 5-14 14m14 0-14-14"
				stroke="#000"
				transform="translate(-4 -4)"
			/>
		</svg>
	);
};

export default ExitIcon;
