import styles from "../ProductModal.module.scss";

const Mice = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Logitech"
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
				placeholder="G502 HERO"
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
			<label htmlFor="trackingMethod">Tracking Method: </label>
			<input
				type="text"
				id="trackingMethod"
				placeholder="Optical"
				className={`${styles.medText} ${
					error.trackingMethod ? styles.errorClass : null
				}`}
				value={object.trackingMethod}
				onChange={(e) =>
					setObject({
						...object,
						trackingMethod: e.target.value,
					})
				}
			/>
			<label htmlFor="connectionType">Connection Type: </label>
			<input
				type="text"
				id="connectionType"
				placeholder="Wired"
				className={`${styles.medText} ${
					error.connectionType ? styles.errorClass : null
				}`}
				value={object.connectionType}
				onChange={(e) =>
					setObject({
						...object,
						connectionType: e.target.value,
					})
				}
			/>
			<label htmlFor="maxDPI">Max DPI: </label>
			<input
				type="number"
				id="maxDPI"
				placeholder="25600"
				min={1}
				className={`${styles.medNumber} ${
					error.maxDPI ? styles.errorClass : null
				}`}
				value={object.maxDPI}
				onChange={(e) =>
					setObject({
						...object,
						maxDPI: e.target.value,
					})
				}
			/>
            <label htmlFor="handOrientation">Hand Orientation: </label>
			<input
				type="text"
				id="handOrientation"
				placeholder="Right"
				className={`${styles.medNumber} ${
					error.handOrientation ? styles.errorClass : null
				}`}
				value={object.handOrientation}
				onChange={(e) =>
					setObject({
						...object,
						handOrientation: e.target.value,
					})
				}
			/>
            <label htmlFor="color">Color: </label>
			<input
				type="text"
				id="color"
				placeholder="Black"
				className={styles.medText}
				value={object.color}
				onChange={(e) =>
					setObject({
						...object,
						color: e.target.value,
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

export default Mice;
