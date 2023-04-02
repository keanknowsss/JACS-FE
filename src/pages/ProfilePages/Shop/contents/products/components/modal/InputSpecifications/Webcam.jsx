import styles from "../ProductModal.module.scss";

const Webcam = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Insta360"
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
				placeholder="Insta360 Link"
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
            <label htmlFor="resolution">Resolution: </label>
			<input
				type="text"
				id="resolution"
				placeholder="1080p"
				className={`${styles.medText} ${
					error.resolution ? styles.errorClass : null
				}`}
				value={object.resolution}
				onChange={(e) =>
					setObject({
						...object,
						resolution: e.target.value,
					})
				}
			/>
            <label htmlFor="connection">Connection: </label>
			<input
				type="text"
				id="connection"
				placeholder="USB 2.0 Type-C"
				className={`${styles.medText} ${
					error.connection ? styles.errorClass : null
				}`}
				value={object.connection}
				onChange={(e) =>
					setObject({
						...object,
						connection: e.target.value,
					})
				}
			/>
            <label htmlFor="focusType">Focus Type: </label>
			<input
				type="text"
				id="focusType"
				placeholder="Auto"
				className={`${styles.medText} ${
					error.focusType ? styles.errorClass : null
				}`}
				value={object.focusType}
				onChange={(e) =>
					setObject({
						...object,
						focusType: e.target.value,
					})
				}
			/>
            <label htmlFor="operatingSystem">Operating System: </label>
			<input
				type="text"
				id="operatingSystem"
				placeholder="Windows"
				className={`${styles.medText} ${
					error.operatingSystem ? styles.errorClass : null
				}`}
				value={object.operatingSystem}
				onChange={(e) =>
					setObject({
						...object,
						operatingSystem: e.target.value,
					})
				}
			/>
            <label htmlFor="fovAngle">FOV Angle (Degrees): </label>
			<input
				type="number"
				id="fovAngle"
				placeholder="79.5"
                step={0.1}
				min={1}
				className={`${styles.smallNumber}`}
				value={object.fovAngle}
				onChange={(e) =>
					setObject({
						...object,
						fovAngle: e.target.value,
					})
				}
			/>
            <label htmlFor="fStop">FStop: </label>
			<input
				type="number"
				id="fStop"
				placeholder="1.8"
                step={0.1}
				min={1}
				className={`${styles.smallNumber}`}
				value={object.fStop}
				onChange={(e) =>
					setObject({
						...object,
						fStop: e.target.value,
					})
				}
			/>
            <label htmlFor="focalLength">Focal Length (mm): </label>
			<input
				type="number"
				id="focalLength"
				placeholder="26"
				min={1}
				className={`${styles.smallNumber}`}
				value={object.focalLength}
				onChange={(e) =>
					setObject({
						...object,
						focalLength: e.target.value,
					})
				}
			/>
            <label htmlFor="privacyShutter">Privacy Shutter: </label>
			<select
				id="privacyShutter"
				className={styles.smallSelect}
				value={object.privacyShutter}
				onChange={(e) =>
					setObject({
						...object,
						privacyShutter: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="builtInLightning">Built-in Lightning: </label>
			<select
				id="builtInLightning"
				className={styles.smallSelect}
				value={object.builtInLightning}
				onChange={(e) =>
					setObject({
						...object,
						builtInLightning: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="automaticLightningAdjust">Automatic Lighting Adjust: </label>
			<select
				id="automaticLightningAdjust"
				className={styles.smallSelect}
				value={object.automaticLightningAdjust}
				onChange={(e) =>
					setObject({
						...object,
						automaticLightningAdjust: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</>
	);
};

export default Webcam;
