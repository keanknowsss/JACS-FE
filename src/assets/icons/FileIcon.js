const FileIcon = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			className={className}
		>
			<path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
			<path d="m19.74 8.33-5.44-6a1 1 0 0 0 -.74-.33h-7a2.53 2.53 0 0 0 -2.56 2.5v15a2.53 2.53 0 0 0 2.56 2.5h10.88a2.53 2.53 0 0 0 2.56-2.5v-10.5a1 1 0 0 0 -.26-.67zm-2.09.67h-3.94a.79.79 0 0 1 -.71-.85v-4.15h.11zm-.21 11h-10.88a.53.53 0 0 1 -.56-.5v-15a.53.53 0 0 1 .56-.5h4.44v4.15a2.79 2.79 0 0 0 2.71 2.85h4.29v8.5a.53.53 0 0 1 -.56.5z" />
		</svg>
	);
};

export default FileIcon;
