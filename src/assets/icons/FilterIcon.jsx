
const FilterIcon = ({className}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enableBackground="new 0 0 100 100"
			viewBox="0 0 100 100"
            className={className}
		>
			<path d="m90 22.292c0-3.508-2.781-6.359-6.258-6.488v-.012h-66.894v.018c-.116-.006-.231-.018-.348-.018-3.59 0-6.5 2.91-6.5 6.5 0 2.045.946 3.867 2.423 5.059l30.14 30.139-.001 18.599v.154h.015c.054 1.204.727 2.236 1.713 2.8l-.009.016 7.872 4.545c.066.046.139.079.208.12l.028.016v-.001c.502.29 1.078.469 1.7.469 1.887 0 3.417-1.529 3.416-3.416 0-.09-.02-.175-.026-.263h.026v-23.011l30.417-30.416-.03-.03c1.293-1.188 2.108-2.887 2.108-4.78zm-57.751 6.5h.014l.001.015z" />
		</svg>
	);
};

export default FilterIcon;