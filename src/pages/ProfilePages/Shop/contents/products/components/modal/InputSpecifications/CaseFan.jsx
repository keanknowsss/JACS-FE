import styles from "../ProductModal.module.scss";

const CaseFan = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Lian Li"
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
				placeholder="UNI SL120"
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
			<label htmlFor="size">Size (mm): </label>
			<input
				type="number"
				id="size"
				placeholder="79.5"
				step={0.1}
				min={1}
				className={`${styles.smallNumber} ${
					error.size ? styles.errorClass : null
				}`}
				value={object.size}
				onChange={(e) =>
					setObject({
						...object,
						size: e.target.value,
					})
				}
			/>
			<label htmlFor="color">Color: </label>
			<input
				type="text"
				id="color"
				className={styles.medText}
				placeholder="Black"
				value={object.color}
				onChange={(e) =>
					setObject({
						...object,
						color: e.target.value,
					})
				}
			/>
			<label htmlFor="quantity">Quantity: </label>
			<input
				type="text"
				id="quantity"
				className={styles.medText}
				placeholder="3-Pack"
				value={object.quantity}
				onChange={(e) =>
					setObject({
						...object,
						quantity: e.target.value,
					})
				}
			/>
			<label htmlFor="rpm">RPM: </label>
			<input
				type="text"
				id="rpm"
				className={`${styles.medText} ${
					error.rpm ? styles.errorClass : null
				}`}
				placeholder="800 - 1900 RPM"
				value={object.rpm}
				onChange={(e) =>
					setObject({
						...object,
						rpm: e.target.value,
					})
				}
			/>
			<label htmlFor="airflow">Airflow (CFM): </label>
			<input
				type="number"
				id="airflow"
				placeholder="58.54"
				step={0.01}
				min={1}
				className={`${styles.smallNumber} ${
					error.airflow ? styles.errorClass : null
				}`}
				value={object.airflow}
				onChange={(e) =>
					setObject({
						...object,
						airflow: e.target.value,
					})
				}
			/>
			<label htmlFor="noiseLevel">Noise Level: </label>
			<input
				type="text"
				id="noiseLevel"
				className={`${styles.medText} ${
					error.noiseLevel ? styles.errorClass : null
				}`}
				placeholder="17 - 31 dB"
				value={object.noiseLevel}
				onChange={(e) =>
					setObject({
						...object,
						noiseLevel: e.target.value,
					})
				}
			/>
			<label htmlFor="pwm">PWM: </label>
			<select
				id="pwm"
				className={styles.smallSelect}
				value={object.pwm}
				onChange={(e) =>
					setObject({
						...object,
						pwm: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
			<label htmlFor="led">LED: </label>
			<input
				type="text"
				id="led"
				className={styles.medText}
				placeholder="Addressable RGB"
				value={object.led}
				onChange={(e) =>
					setObject({
						...object,
						led: e.target.value,
					})
				}
			/>
			<label htmlFor="connector">Connector: </label>
			<input
				type="text"
				id="connector"
				placeholder="4-pin PWM and 3-pin 5V Addressable RGB"
				value={object.connector}
				onChange={(e) =>
					setObject({
						...object,
						connector: e.target.value,
					})
				}
			/>
			<label htmlFor="controller">Controller: </label>
			<input
				type="text"
				id="controller"
				className={`${styles.medText} ${
					error.controller ? styles.errorClass : null
				}`}
				placeholder="USB"
				value={object.controller}
				onChange={(e) =>
					setObject({
						...object,
						controller: e.target.value,
					})
				}
			/>
			<label htmlFor="staticPressure">Static Pressure (mmH₂O): </label>
			<input
				type="number"
				id="staticPressure"
				placeholder="2.54"
				step={0.01}
				min={1}
				className={`${styles.smallNumber} ${
					error.staticPressure ? styles.errorClass : null
				}`}
				value={object.staticPressure}
				onChange={(e) =>
					setObject({
						...object,
						staticPressure: e.target.value,
					})
				}
			/>
		</>
	);
};

export default CaseFan;
