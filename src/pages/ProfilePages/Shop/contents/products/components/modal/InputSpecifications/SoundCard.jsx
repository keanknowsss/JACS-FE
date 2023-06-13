import styles from "../ProductModal.module.scss";

const SoundCard = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Creative Labs"
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
				className={`${
					error.model ? styles.errorClass : null
				}`}
				placeholder="Sound Blaster AE-9"
				value={object.model}
				onChange={(e) =>
					setObject({
						...object,
						model: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="channels">Channel: </label>
			<input
				type="number"
				id="channels"
				placeholder="7.1"
				step="0.1"
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
				required
			/>
			<label htmlFor="digitalAudio">Digital Audio: </label>
			<input
				type="text"
				id="digitalAudio"
				placeholder="32-bit"
				className={`${styles.medText} ${
					error.digitalAudio ? styles.errorClass : null
				}`}
				value={object.digitalAudio}
				onChange={(e) =>
					setObject({
						...object,
						digitalAudio: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="signalToNoiseRatio">Signal-to-Noise Ratio (dB): </label>
			<input
				type="number"
				id="signalToNoiseRatio"
				placeholder="129"
				min={1}
				className={`${styles.smallNumber} ${
					error.signalToNoiseRatio ? styles.errorClass : null
				}`}
				value={object.signalToNoiseRatio}
				onChange={(e) =>
					setObject({
						...object,
						signalToNoiseRatio: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="sampleRate">Sample Rate (kHz): </label>
			<input
				type="number"
				id="sampleRate"
				placeholder="384"
				min={1}
				className={`${styles.smallNumber} ${
					error.sampleRate ? styles.errorClass : null
				}`}
				value={object.sampleRate}
				onChange={(e) =>
					setObject({
						...object,
						sampleRate: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="chipSet">Chipset: </label>
			<input
				type="text"
				id="chipSet"
				placeholder="Sound Core3D"
				className={styles.medText}
				value={object.chipSet}
				onChange={(e) =>
					setObject({
						...object,
						chipSet: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="interface">Interface: </label>
			<input
				type="text"
				id="interface"
				placeholder="PCIe x1"
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
				required
			/>
			<label htmlFor="color">Color: </label>
			<input
				type="text"
				id="color"
				placeholder="Gray"
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
		</>
	);
};

export default SoundCard;
