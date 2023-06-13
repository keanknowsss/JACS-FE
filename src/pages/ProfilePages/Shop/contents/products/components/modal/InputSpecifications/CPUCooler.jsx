import styles from "../ProductModal.module.scss";

const CPUCooler = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Cooler Master"
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
				className={`${
					error.model ? styles.errorClass : null
				}`}
				placeholder="Hyper 212 RGB Black Edition"
				value={object.model}
				onChange={(e) =>
					setObject({
						...object,
						model: e.target.value,
					})
				}
			/>
			<label htmlFor="fanRPM">Fan Speed (RPM): </label>
			<input
				type="text"
				id="fanRPM"
				className={`${styles.medText} ${
					error.fanRPM ? styles.errorClass : null
				}`}
				placeholder="650 - 2000"
				value={object.fanRPM}
				onChange={(e) =>
					setObject({
						...object,
						fanRPM: e.target.value,
					})
				}
			/>
			<label htmlFor="noiseLevel">Noise Level (dB): </label>
			<input
				type="text"
				id="noiseLevel"
				className={`${styles.medText} ${
					error.noiseLevel ? styles.errorClass : null
				}`}
				placeholder="8 -30"
				value={object.noiseLevel}
				onChange={(e) =>
					setObject({
						...object,
						noiseLevel: e.target.value,
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
			<label htmlFor="height">Height (mm): </label>
			<input
				type="number"
				id="height"
				placeholder="159"
				min={1}
				className={`${styles.smallNumber} ${
					error.height ? styles.errorClass : null
				}`}
				value={object.height}
				onChange={(e) =>
					setObject({
						...object,
						height: e.target.value,
					})
				}
			/>
			<label htmlFor="cpuSocket">CPU Socket: </label>
			<input
				type="text"
				id="cpuSocket"
				placeholder="AM4"
				className={`${styles.medText} ${
					error.cpuSocket ? styles.errorClass : null
				}`}
				value={object.cpuSocket}
				onChange={(e) =>
					setObject({
						...object,
						cpuSocket: e.target.value,
					})
				}
			/>
			<label htmlFor="waterCooled">Water Cooling: </label>
			<select
				id="waterCooled"
				className={styles.smallSelect}
				value={object.waterCooled}
				onChange={(e) =>
					setObject({
						...object,
						waterCooled: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
			<label htmlFor="fanless">Fanless: </label>
			<select
				id="fanless"
				className={styles.smallSelect}
				value={object.fanless}
				onChange={(e) =>
					setObject({
						...object,
						fanless: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</>
	);
};

export default CPUCooler;
