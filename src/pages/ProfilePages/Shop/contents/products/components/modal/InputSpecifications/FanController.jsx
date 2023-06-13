import styles from "../ProductModal.module.scss";

const FanController = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Thermaltake"
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
				placeholder="Commander F6 RGB"
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
			<label htmlFor="channels">Channels: </label>
			<input
				type="number"
				id="channels"
				placeholder="6"
				min={1}
				className={`${styles.smallNumber} ${
					error.channels ? styles.errorClass : null
				}`}
				value={object.channels}
				onChange={(e) =>
					setObject({
						...object,
						channels: e.target.value,
					})
				}
			/>
			<label htmlFor="channelWattage">Channel Wattage (Watts): </label>
			<input
				type="number"
				id="channelWattage"
				placeholder="0.03"
				min={0.01}
				step={0.01}
				className={`${styles.smallNumber} ${
					error.channelWattage ? styles.errorClass : null
				}`}
				value={object.channelWattage}
				onChange={(e) =>
					setObject({
						...object,
						channelWattage: e.target.value,
					})
				}
			/>
			<label htmlFor="pwm4pin">PWM 4-Pin: </label>
			<select
				id="pwm4pin"
				className={styles.smallSelect}
				value={object.pwm4pin}
				onChange={(e) =>
					setObject({
						...object,
						pwm4pin: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="formFactor">Form Factor: </label>
			<input
				type="text"
				id="formFactor"
				placeholder='5.25"'
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
            <label htmlFor="color">Color: </label>
			<input
				type="text"
				id="color"
				placeholder='Black'
				className={styles.medText}
				value={object.color}
				onChange={(e) =>
					setObject({
						...object,
						color: e.target.value,
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

export default FanController;
