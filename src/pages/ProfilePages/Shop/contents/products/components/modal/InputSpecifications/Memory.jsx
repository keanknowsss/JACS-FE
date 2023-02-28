import styles from "../ProductModal.module.scss";

const Memory = ({ object, setObject }) => {
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
			<label htmlFor="memorySpeed">Speed: </label>
			<input
				type="text"
				id="memorySpeed"
				placeholder="DDR4-2400"
				className={styles.medText}
				value={object.memorySpeed}
				onChange={(e) =>
					setObject({
						...object,
						memorySpeed: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="formFactor">Form Factor: </label>
			<input
				type="text"
				id="formFactor"
				placeholder="288-pin DIMM (DDR4)"
				value={object.formFactor}
				onChange={(e) =>
					setObject({
						...object,
						formFactor: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="modules">Modules: </label>
			<input
				type="text"
				id="modules"
				placeholder="2 x 16 GB"
				className={styles.medText}
				value={object.modules}
				onChange={(e) =>
					setObject({
						...object,
						modules: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="firstWordLatency">First Word Latency (ns): </label>
			<input
				type="number"
				id="firstWordLatency"
				placeholder="10"
				min={0}
				className={styles.smallNumber}
				value={object.firstWordLatency}
				onChange={(e) =>
					setObject({
						...object,
						firstWordLatency: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="CASLatency">CAS Latency (ns): </label>
			<input
				type="number"
				id="CASLatency"
				placeholder="18"
				min={0}
				className={styles.smallNumber}
				value={object.CASLatency}
				onChange={(e) =>
					setObject({
						...object,
						CASLatency: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="voltage">Voltage (Volts): </label>
			<input
				type="number"
				id="voltage"
				placeholder="1.35"
                step="0.01"
				min={0}
				className={styles.smallNumber}
				value={object.voltage}
				onChange={(e) =>
					setObject({
						...object,
						voltage: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="timing">Timing: </label>
			<input
				type="text"
				id="timing"
				placeholder="18-22-22-42"
				className={styles.medText}
				value={object.timing}
				onChange={(e) =>
					setObject({
						...object,
						timing: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="eccRegistered">ECC / Registered: </label>
			<input
				type="text"
				id="eccRegistered"
				placeholder="Non-ECC / Unbuffered"
				className={styles.medText}
				value={object.eccRegistered}
				onChange={(e) =>
					setObject({
						...object,
						eccRegistered: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="heatSpreader">Heat Spreader: </label>
			<select
				id="heatSpreader"
				className={styles.smallSelect}
				value={object.heatSpreader}
				onChange={(e) =>
					setObject({
						...object,
						heatSpreader: e.target.value,
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

export default Memory;
