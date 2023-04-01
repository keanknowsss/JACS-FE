import styles from "../ProductModal.module.scss";

const Headphone = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="HiFiMAN"
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
				placeholder="Susvara"
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
				placeholder="Circumaural"
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
            <label htmlFor="frequencyResponse">Frequency Response: </label>
			<input
				type="text"
				id="frequencyResponse"
				placeholder="6 Hz - 75 kHz"
				className={`${styles.medText} ${
					error.frequencyResponse ? styles.errorClass : null
				}`}
				value={object.frequencyResponse}
				onChange={(e) =>
					setObject({
						...object,
						frequencyResponse: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="microphone">Microphone: </label>
			<select
				id="microphone"
				className={styles.smallSelect}
				value={object.microphone}
				onChange={(e) =>
					setObject({
						...object,
						microphone: e.target.value,
					})
				}
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="wireless">Wireless: </label>
			<select
				id="wireless"
				className={styles.smallSelect}
				value={object.wireless}
				onChange={(e) =>
					setObject({
						...object,
						wireless: e.target.value,
					})
				}
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="enclosureType">Enclosure Type: </label>
			<input
				type="text"
				id="enclosureType"
				placeholder="Open"
				className={`${styles.medText} ${
					error.enclosureType ? styles.errorClass : null
				}`}
				value={object.enclosureType}
				onChange={(e) =>
					setObject({
						...object,
						enclosureType: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="color">Color: </label>
			<input
				type="text"
				id="color"
				placeholder="Silver / Brown"
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
            <label htmlFor="activeNoiseCancelling">Active Noise Cancelling: </label>
			<select
				id="activeNoiseCancelling"
				className={styles.smallSelect}
				value={object.activeNoiseCancelling}
				onChange={(e) =>
					setObject({
						...object,
						activeNoiseCancelling: e.target.value,
					})
				}
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="connection">Color: </label>
			<input
				type="text"
				id="connection"
				placeholder="Stereo 3.5mm Audio"
				className={styles.medText}
				value={object.connection}
				onChange={(e) =>
					setObject({
						...object,
						connection: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="channels">Channels: </label>
			<input
				type="text"
				id="channels"
				placeholder="2.0"
				className={`${styles.medText} ${
					error.channels ? styles.errorClass : null
				}`}
				value={object.channels}
				onChange={(e) =>
					setObject({
						...object,
						channels: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="impedance">Impedance (Ω): </label>
			<input
				type="number"
				id="impedance"
				placeholder="60"
				min={1}
				className={`${styles.smallNumber} ${
					error.impedance ? styles.errorClass : null
				}`}
				value={object.impedance}
				onChange={(e) =>
					setObject({
						...object,
						impedance: e.target.value,
					})
				}
				required
			/>
            <label htmlFor="sensitivity">Sensitivity (dB): </label>
			<input
				type="number"
				id="sensitivity"
				placeholder="83"
				min={1}
				className={`${styles.smallNumber} ${
					error.sensitivity ? styles.errorClass : null
				}`}
				value={object.sensitivity}
				onChange={(e) =>
					setObject({
						...object,
						sensitivity: e.target.value,
					})
				}
				required
			/>
		</>
	);
};

export default Headphone;
