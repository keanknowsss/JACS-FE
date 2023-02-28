const CartIcon = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className}
		>
			<path d="m0 0h24v24h-24z" opacity="0" />
			<g fill="currentColor">
				<path  d="m21.08 7a2 2 0 0 0 -1.7-1h-12.8l-.58-2.26a1 1 0 0 0 -1-.74h-2a1 1 0 0 0 0 2h1.24l2.76 10.26a1 1 0 0 0 1 .74h9a1 1 0 0 0 .89-.55l3.28-6.56a2 2 0 0 0 -.09-1.89zm-4.7 7h-7.62l-1.63-6h12.25z" />
				<circle cx="7.5" cy="19.5" r="1.5" />
				<circle cx="17.5" cy="19.5" r="1.5" />
			</g>
		</svg>
	);
};

export default CartIcon;
