import styles from "../ProductModal.module.scss";

const Storage = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Corsair"
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
            <label htmlFor="capacity">Capacity (GB): </label>
			<input
				type="number"
				id="capacity"
				placeholder="1000"
				min={0}
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
			/>
            <label htmlFor="type">Type: </label>
			<input
				type="text"
				id="type"
				placeholder="SSD"
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
			/>
            <label htmlFor="cache">Cache (MB): </label>
			<input
				type="number"
				id="cache"
				placeholder="256"
				min={0}
				className={`${styles.smallNumber} ${
					error.cache ? styles.errorClass : null
				}`}
				value={object.cache}
				onChange={(e) =>
					setObject({
						...object,
						cache: e.target.value,
					})
				}
			/>
            <label htmlFor="formFactor">Form Factor: </label>
			<input
				type="text"
				id="formFactor"
				placeholder="3.5"
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
			/>
            <label htmlFor="interface">Interface: </label>
			<input
				type="text"
				id="interface"
				placeholder="SATA 6.0 GB/s"
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
			/>
            <label htmlFor="nvme">NVME: </label>
			<select
				id="nvme"
				className={styles.smallSelect}
				value={object.nvme}
				onChange={(e) =>
					setObject({
						...object,
						nvme: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</>
	);
};

export default Storage;
