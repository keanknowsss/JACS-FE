import styles from "./Search.module.scss";

const Search = () => {
	return (
		<section aria-label="searchbar" className={styles.searchSection}>
			<form className="basis-3/5 flex justify-between">
				<input
					className={styles.searchInput}
					type="text"
					name="searchQuery"
					placeholder="Search JACS"
				/>
				<select name="category">
					<option value="">Any</option>
					<option value="">JACS Shop</option>
					<option value="">JACS Build Community</option>
					<option value="">JACS Forum</option>
					<option value="">JACS Tech101</option>
					<option value="">JACS Repair</option>
				</select>
			</form>
		</section>
	);
};

export default Search;
