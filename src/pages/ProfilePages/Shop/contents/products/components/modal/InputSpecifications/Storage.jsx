import styles from "../ProductModal.module.scss";

const Storage = ({ object, setObject }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Corsair"
				className={styles.medText}
				value={object.manufacturer}
				onChange={(e) =>
					setObject({
						...object,
						manufacturer: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="capacity">Capacity (GB): </label>
			<input
				type="number"
				id="capacity"
				placeholder="1000"
				min={0}
				className={styles.smallNumber}
				value={object.capacity}
				onChange={(e) =>
					setObject({
						...object,
						capacity: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="type">Type: </label>
			<input
				type="text"
				id="type"
				placeholder="SSD"
				className={styles.medText}
				value={object.type}
				onChange={(e) =>
					setObject({
						...object,
						type: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="cache">Cache (MB): </label>
			<input
				type="number"
				id="cache"
				placeholder="256"
				min={0}
				className={styles.smallNumber}
				value={object.cache}
				onChange={(e) =>
					setObject({
						...object,
						cache: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="formFactor">Type: </label>
			<input
				type="text"
				id="formFactor"
				placeholder="3.5"
				className={styles.medText}
				value={object.formFactor}
				onChange={(e) =>
					setObject({
						...object,
						formFactor: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="interface">Interface: </label>
			<input
				type="text"
				id="interface"
				placeholder="SATA 6.0 GB/s"
				className={styles.medText}
				value={object.interface}
				onChange={(e) =>
					setObject({
						...object,
						interface: e.target.value,
					})
				}
				required
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
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</>
	);
};

export default Storage;
