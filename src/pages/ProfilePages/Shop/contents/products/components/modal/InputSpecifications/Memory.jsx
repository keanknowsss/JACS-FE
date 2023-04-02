import styles from "../ProductModal.module.scss";

const Memory = ({ object, setObject, error }) => {
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
			<label htmlFor="speed">Speed: </label>
			<input
				type="text"
				id="speed"
				placeholder="DDR4-2400"
				className={`${styles.medText} ${
					error.speed ? styles.errorClass : null
				}`}
				value={object.speed}
				onChange={(e) =>
					setObject({
						...object,
						speed: e.target.value,
					})
				}
			/>
			<label htmlFor="formFactor">Form Factor: </label>
			<input
				type="text"
				id="formFactor"
				placeholder="288-pin DIMM (DDR4)"
				className={`${
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
			<label htmlFor="modules">Modules: </label>
			<input
				type="text"
				id="modules"
				placeholder="2 x 16 GB"
				className={`${styles.medText} ${
					error.modules ? styles.errorClass : null
				}`}
				value={object.modules}
				onChange={(e) =>
					setObject({
						...object,
						modules: e.target.value,
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
            <label htmlFor="firstWordLatency">First Word Latency (ns): </label>
			<input
				type="number"
				id="firstWordLatency"
				placeholder="10"
				min={0}
				className={`${styles.smallNumber} ${
					error.firstWordLatency ? styles.errorClass : null
				}`}
				value={object.firstWordLatency}
				onChange={(e) =>
					setObject({
						...object,
						firstWordLatency: e.target.value,
					})
				}
			/>
            <label htmlFor="CASLatency">CAS Latency (ns): </label>
			<input
				type="number"
				id="CASLatency"
				placeholder="18"
				min={0}
				className={`${styles.smallNumber} ${
					error.CASLatency ? styles.errorClass : null
				}`}
				value={object.CASLatency}
				onChange={(e) =>
					setObject({
						...object,
						CASLatency: e.target.value,
					})
				}
			/>
            <label htmlFor="voltage">Voltage (Volts): </label>
			<input
				type="number"
				id="voltage"
				placeholder="1.35"
                step="0.01"
				min={0}
				className={`${styles.smallNumber} ${
					error.voltage ? styles.errorClass : null
				}`}
				value={object.voltage}
				onChange={(e) =>
					setObject({
						...object,
						voltage: e.target.value,
					})
				}
			/>
            <label htmlFor="timing">Timing: </label>
			<input
				type="text"
				id="timing"
				placeholder="18-22-22-42"
				className={`${styles.medText} ${
					error.modules ? styles.errorClass : null
				}`}
				value={object.timing}
				onChange={(e) =>
					setObject({
						...object,
						timing: e.target.value,
					})
				}
			/>
            <label htmlFor="eccRegistered">ECC / Registered: </label>
			<input
				type="text"
				id="eccRegistered"
				placeholder="Non-ECC / Unbuffered"
				className={`${styles.medText} ${
					error.eccRegistered ? styles.errorClass : null
				}`}
				value={object.eccRegistered}
				onChange={(e) =>
					setObject({
						...object,
						eccRegistered: e.target.value,
					})
				}
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
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</>
	);
};

export default Memory;
