const InformationModal = ({ className }) => {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
		>
			<circle cx="32" cy="32" fill="#0066FF" r="30" />
			<g fill="#112B3C">
				<path d="m27 27.8h10v24h-10z" />
				<circle cx="32" cy="17.2" r="5" />
			</g>
		</svg>
	);
};

export default InformationModal;
