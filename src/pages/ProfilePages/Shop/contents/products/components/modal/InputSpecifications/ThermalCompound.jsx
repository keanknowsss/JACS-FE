import styles from "../ProductModal.module.scss";

const ThermalCompound = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Thermaltake"
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
			/>
			<label htmlFor="model">Model: </label>
			<input
				type="text"
				id="model"
				placeholder="Commander F6 RGB"
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
			/>
			<label htmlFor="amount">Amount (gram/s): </label>
			<input
				type="number"
				id="amount"
				placeholder="4"
				step={1}
				className={`${styles.smallNumber} ${
					error.amount ? styles.errorClass : null
				}`}
				value={object.amount}
				onChange={(e) =>
					setObject({
						...object,
						amount: e.target.value,
					})
				}
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

export default ThermalCompound;
