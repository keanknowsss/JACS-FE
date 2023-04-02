import styles from "../ProductModal.module.scss";

const OpticalDrive = ({ object, setObject, error }) => {
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
			/>
			<label htmlFor="model">Model: </label>
			<input
				type="text"
				id="model"
				placeholder="Add Model Name"
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
			<label htmlFor="formFactor">Form Factor: </label>
			<input
				type="text"
				id="formFactor"
				placeholder='5.25"'
				className={styles.medText}
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
				placeholder="SATA 6.0 Gb/s"
				className={styles.medText}
				value={object.interface}
				onChange={(e) =>
					setObject({
						...object,
						interface: e.target.value,
					})
				}
			/>
			<label htmlFor="bufferCache">Buffer Cache (MB): </label>
			<input
				type="number"
				id="bufferCache"
				placeholder="5"
				min={1}
				className={`${styles.smallNumber}`}
				value={object.bufferCache}
				onChange={(e) =>
					setObject({
						...object,
						bufferCache: e.target.value,
					})
				}
			/>
			<label htmlFor="dvd_romSpeed">DVD ROM Speed Multiplier: </label>
			<input
				type="number"
				id="dvd_romSpeed"
				placeholder="4"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.dvd_romSpeed}
				onChange={(e) =>
					setObject({
						...object,
						dvd_romSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="cd_romSpeed">CD ROM Speed Multiplier: </label>
			<input
				type="number"
				id="cd_romSpeed"
				placeholder="4"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.cd_romSpeed}
				onChange={(e) =>
					setObject({
						...object,
						cd_romSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="bd_rSpeed">BD RSpeed Multiplier: </label>
			<input
				type="number"
				id="bd_rSpeed"
				placeholder="12"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.bd_rSpeed}
				onChange={(e) =>
					setObject({
						...object,
						bd_rSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="bd_rDualLayerSpeed">
				BD RDual Layer Speed Multiplier:{" "}
			</label>
			<input
				type="number"
				id="bd_rDualLayerSpeed"
				placeholder="6"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.bd_rDualLayerSpeed}
				onChange={(e) =>
					setObject({
						...object,
						bd_rDualLayerSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="bd_reSpeed">BD RE Speed Multiplier: </label>
			<input
				type="number"
				id="bd_reSpeed"
				placeholder="8"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.bd_reSpeed}
				onChange={(e) =>
					setObject({
						...object,
						bd_reSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="bd_reDualLayerSpeed">BD REDual Speed Multiplier: </label>
			<input
				type="number"
				id="bd_reDualLayerSpeed"
				placeholder="6"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.bd_reDualLayerSpeed}
				onChange={(e) =>
					setObject({
						...object,
						bd_reDualLayerSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="dvdRWSpeed">DVD RW Speed Multiplier: </label>
			<input
				type="number"
				id="dvdRWSpeed"
				placeholder="8"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.dvdRWSpeed}
				onChange={(e) =>
					setObject({
						...object,
						dvdRWSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="dvdRDualLayerSpeed">DVD RDual Speed Multiplier: </label>
			<input
				type="number"
				id="dvdRDualLayerSpeed"
				placeholder="8"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.dvdRDualLayerSpeed}
				onChange={(e) =>
					setObject({
						...object,
						dvdRDualLayerSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="dvd_rSpeed">DVD R Speed Multiplier: </label>
			<input
				type="number"
				id="dvd_rSpeed"
				placeholder="6"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.dvd_rSpeed}
				onChange={(e) =>
					setObject({
						...object,
						dvd_rSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="dvd_rwSpeed">DVD RW Speed Multiplier: </label>
			<input
				type="number"
				id="dvd_rwSpeed"
				placeholder="12"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.dvd_rwSpeed}
				onChange={(e) =>
					setObject({
						...object,
						dvd_rwSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="dvd_rDualLayerSpeed">DVD RDual Speed Multiplier: </label>
			<input
				type="number"
				id="dvd_rDualLayerSpeed"
				placeholder="8"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.dvd_rDualLayerSpeed}
				onChange={(e) =>
					setObject({
						...object,
						dvd_rDualLayerSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="dvd_ramSpeed">DVD RAM Speed Multiplier: </label>
			<input
				type="number"
				id="dvd_ramSpeed"
				placeholder="5"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.dvd_ramSpeed}
				onChange={(e) =>
					setObject({
						...object,
						dvd_ramSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="cd_rSpeed">CD R Speed Multiplier: </label>
			<input
				type="number"
				id="cd_rSpeed"
				placeholder="48"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.cd_rSpeed}
				onChange={(e) =>
					setObject({
						...object,
						cd_rSpeed: e.target.value,
					})
				}
			/>
			<label htmlFor="cd_rwSpeed">CD RW Speed Multiplier: </label>
			<input
				type="number"
				id="cd_rwSpeed"
				placeholder="24"
				min={0}
				className={`${styles.smallNumber}`}
				value={object.cd_rwSpeed}
				onChange={(e) =>
					setObject({
						...object,
						cd_rwSpeed: e.target.value,
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

export default OpticalDrive;
