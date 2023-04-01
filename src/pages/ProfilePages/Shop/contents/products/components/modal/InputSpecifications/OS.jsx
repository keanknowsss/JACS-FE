import styles from "../ProductModal.module.scss";

const OS = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Microsoft"
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
				placeholder="Microsoft Windows 11 Home 64-bit - OEM (DVD)"
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
			<label htmlFor="mode">Mode: </label>
			<input
				type="text"
				id="mode"
				placeholder="64-bit"
				className={`${styles.medText} ${
					error.mode ? styles.errorClass : null
				}`}
				value={object.mode}
				onChange={(e) =>
					setObject({
						...object,
						mode: e.target.value,
					})
				}
			/>
			<label htmlFor="version">Version: </label>
			<input
				type="text"
				id="version"
				placeholder="Windows 11 Home"
				className={`${styles.medText} ${
					error.version ? styles.errorClass : null
				}`}
				value={object.version}
				onChange={(e) =>
					setObject({
						...object,
						version: e.target.value,
					})
				}
			/>
			<label htmlFor="maxSupportedMemory">Max Supported Memory: </label>
			<input
				type="number"
				id="maxSupportedMemory"
				placeholder="6"
				min={0}
				className={`${styles.smallNumber} ${
					error.maxSupportedMemory ? styles.errorClass : null
				}`}
				value={object.maxSupportedMemory}
				onChange={(e) =>
					setObject({
						...object,
						maxSupportedMemory: e.target.value,
					})
				}
			/>
            <label htmlFor="features">Features: </label>
			<textarea
				type="text"
				id="features"
				rows={3}
				placeholder="Add Additional Features"
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

export default OS;
