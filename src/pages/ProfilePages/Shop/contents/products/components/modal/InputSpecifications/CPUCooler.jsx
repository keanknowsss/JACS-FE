import styles from "../ProductModal.module.scss";

const CPUCooler = ({ object, setObject }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Cooler Master"
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
			<label htmlFor="model">Model: </label>
			<input
				type="text"
				id="model"
				placeholder="Hyper 212 RGB Black Edition"
				value={object.model}
				onChange={(e) =>
					setObject({
						...object,
						model: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="fanRPM">Fan Speed (RPM): </label>
			<input
				type="text"
				id="fanRPM"
				className={styles.medText}
				placeholder="650 - 2000"
				value={object.fanRPM}
				onChange={(e) =>
					setObject({
						...object,
						fanRPM: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="noiseLevel">Noise Level (dB): </label>
			<input
				type="text"
				id="noiseLevel"
				className={styles.medText}
				placeholder="8 -30"
				value={object.noiseLevel}
				onChange={(e) =>
					setObject({
						...object,
						noiseLevel: e.target.value,
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
			<label htmlFor="height">Height (mm): </label>
			<input
				type="number"
				id="height"
				placeholder="159"
				min={1}
				className={styles.smallNumber}
				value={object.height}
				onChange={(e) =>
					setObject({
						...object,
						height: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="cpuSocket">CPU Socket: </label>
			<input
				type="text"
				id="cpuSocket"
				className={styles.medText}
				placeholder="AM4"
				value={object.cpuSocket}
				onChange={(e) =>
					setObject({
						...object,
						cpuSocket: e.target.value,
					})
				}
				required
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
				required
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
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</>
	);
};

export default CPUCooler;
