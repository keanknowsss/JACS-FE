import styles from "../ProductModal.module.scss";

const ExternalStorage = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Western Digital"
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
				className={`${
					error.manufacturer ? styles.errorClass : null
				}`}
				placeholder="WD_BLACK P10"
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
				placeholder="Portable"
				className={`${styles.medText} ${
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
            <label htmlFor="interface">Interface: </label>
			<input
				type="text"
				id="interface"
				placeholder="USB Type-A 3.2 Gen 1"
				className={`${styles.medText} ${
					error.interface ? styles.errorClass : null
				}`}
				value={object.interface}
				onChange={(e) =>
					setObject({
						...object,
						interface: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="capacity">Capacity (GB): </label>
			<input
				type="number"
				id="capacity"
				placeholder="5000"
				step={1}
				className={`${styles.smallNumber} ${
					error.capacity ? styles.errorClass : null
				}`}
				value={object.capacity}
				onChange={(e) =>
					setObject({
						...object,
						capacity: e.target.value,
					})
				}
				required
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
				required
			/>
            <label htmlFor="rpm">RPM: </label>
			<input
				type="number"
				id="rpm"
				placeholder="7200"
				step={1}
				className={`${styles.smallNumber}`}
				value={object.rpm}
				onChange={(e) =>
					setObject({
						...object,
						rpm: e.target.value,
					})
				}
				required
			/>
		</>
	);
};

export default ExternalStorage;
