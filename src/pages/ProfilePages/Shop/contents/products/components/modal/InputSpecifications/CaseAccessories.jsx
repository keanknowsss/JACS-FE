import styles from "../ProductModal.module.scss";

const CaseAccessories = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="NZXT"
				className={`${styles.medText} ${
					error.manufacturer ? styles.errorClass : null
				}`}
				value={object.manufacturer}
				onChange={(e) =>
					setObject({
						...object,
						manufacturer: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="model">Model: </label>
			<input
				type="text"
				id="model"
				placeholder="Hue"
				className={`${
					error.model ? styles.errorClass : null
				}`}
				value={object.model}
				onChange={(e) =>
					setObject({
						...object,
						model: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="type">Type: </label>
			<input
				type="text"
				id="type"
				placeholder="LED Controller"
				className={`${
					error.type ? styles.errorClass : null
				}`}
				value={object.type}
				onChange={(e) =>
					setObject({
						...object,
						type: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="formFactor">Form Factor: </label>
			<input
				type="text"
				id="formFactor"
				placeholder='5.25"'
				className={`${styles.medText} ${
					error.formFactor ? styles.errorClass : null
				}`}
				value={object.formFactor}
				onChange={(e) =>
					setObject({
						...object,
						formFactor: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="features">Features: </label>
			<textarea
				type="text"
				id="features"
				placeholder="Add Additional Features"
				rows={3}
				value={object.features}
				onChange={(e) =>
					setObject({
						...object,
						features: e.target.value,
					})
				}
			/>
		</>
	);
};

export default CaseAccessories;
