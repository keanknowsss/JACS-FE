const ErrorIcon = ({ className }) => {
	return (
		<svg
            className={className}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
		>
			<g fillRule="evenodd">
				<circle cx="8" cy="8" fill="#f95f5b" r="8" />
				<path
					d="m8.07106781 6.65685425 2.82842709-2.82842713 1.4142136 1.41421357-2.82842713 2.82842712 2.82842713 2.82842709-1.4142136 1.4142136-2.82842709-2.82842713-2.82842712 2.82842713-1.41421357-1.4142136 2.82842713-2.82842709-2.82842713-2.82842712 1.41421357-1.41421357z"
					fill="#fff"
				/>
			</g>
		</svg>
	);
};

export default ErrorIcon;
