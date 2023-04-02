import styles from "../ProductModal.module.scss";

const Monitor = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Asus"
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
				placeholder="TUF Gaming VG27AQ"
				value={object.model}
				className={`${
					error.model ? styles.errorClass : null
				}`}
				onChange={(e) =>
					setObject({
						...object,
						model: e.target.value,
					})
				}
			/>
			<label htmlFor="screenSize">Screen Size (in): </label>
			<input
				type="number"
				id="screenSize"
				placeholder="27"
				min={1}
				className={`${styles.smallNumber} ${
					error.manufacturer ? styles.errorClass : null
				}`}
				value={object.screenSize}
				onChange={(e) =>
					setObject({
						...object,
						screenSize: e.target.value,
					})
				}
			/>
			<label htmlFor="resolution">Resolution: </label>
			<input
				type="text"
				id="resolution"
				placeholder="2560 x 1440"
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
			<label htmlFor="refreshRate">Refresh Rate (hz): </label>
			<input
				type="number"
				id="refreshRate"
				placeholder="165"
				min={1}
				className={`${styles.smallNumber} ${
					error.refreshRate ? styles.errorClass : null
				}`}
				value={object.refreshRate}
				onChange={(e) =>
					setObject({
						...object,
						refreshRate: e.target.value,
					})
				}
			/>
			<label htmlFor="responseTimeG2G">Refresh Rate G2G (ms): </label>
			<input
				type="number"
				id="responseTimeG2G"
				placeholder="1"
				min={1}
				className={`${styles.smallNumber} ${
					error.responseTimeG2G ? styles.errorClass : null
				}`}
				value={object.responseTimeG2G}
				onChange={(e) =>
					setObject({
						...object,
						responseTimeG2G: e.target.value,
					})
				}
			/>
			<label htmlFor="panelType">Panel Type: </label>
			<input
				type="text"
				id="panelType"
				placeholder="IPS"
				className={`${styles.medText} ${
					error.panelType ? styles.errorClass : null
				}`}
				value={object.panelType}
				onChange={(e) =>
					setObject({
						...object,
						panelType: e.target.value,
					})
				}
			/>
			<label htmlFor="aspectRatio">Aspect Ratio: </label>
			<input
				type="text"
				id="aspectRatio"
				placeholder="16:9"
				className={`${styles.medText} ${
					error.aspectRatio ? styles.errorClass : null
				}`}
				value={object.aspectRatio}
				onChange={(e) =>
					setObject({
						...object,
						aspectRatio: e.target.value,
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
			<label htmlFor="brightness">Brightness: </label>
			<input
				type="text"
				id="brightness"
				placeholder="350 cd/m²"
				className={`${styles.medText} ${
					error.brightness ? styles.errorClass : null
				}`}
				value={object.brightness}
				onChange={(e) =>
					setObject({
						...object,
						brightness: e.target.value,
					})
				}
			/>
			<label htmlFor="hdrTier">HDR Tier: </label>
			<input
				type="text"
				id="hdrTier"
				placeholder="HDR 2000"
				className={styles.medText}
				value={object.hdrTier}
				onChange={(e) =>
					setObject({
						...object,
						hdrTier: e.target.value,
					})
				}
			/>
      <label htmlFor="widescreen">Widescreen: </label>
			<select
				id="widescreen"
				className={styles.smallSelect}
				value={object.widescreen}
				onChange={(e) =>
					setObject({
						...object,
						widescreen: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
      <label htmlFor="curvedScreen">Curved Screen: </label>
			<select
				id="curvedScreen"
				className={styles.smallSelect}
				value={object.curvedScreen}
				onChange={(e) =>
					setObject({
						...object,
						curvedScreen: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
      <label htmlFor="frameSync">Frame Sync: </label>
			<input
				type="text"
				id="frameSync"
				placeholder="FreeSync Premium Pro"
				className={`${
					error.frameSync ? styles.errorClass : null
				}`}
				value={object.frameSync}
				onChange={(e) =>
					setObject({
						...object,
						frameSync: e.target.value,
					})
				}
			/>
      <label htmlFor="builtInSpeakers">Built-in Speakers: </label>
			<select
				id="builtInSpeakers"
				className={styles.smallSelect}
				value={object.builtInSpeakers}
				onChange={(e) =>
					setObject({
						...object,
						builtInSpeakers: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select> 
      <label htmlFor="viewingAngle">Viewing Angle: </label>
			<input
				type="text"
				id="viewingAngle"
				placeholder="178-degrees Horizontal X 178-degrees Vertical"
				value={object.viewingAngle}
				className={`${
					error.viewingAngle ? styles.errorClass : null
				}`}
				onChange={(e) =>
					setObject({
						...object,
						viewingAngle: e.target.value,
					})
				}
			/>
      <label htmlFor="inputs">Inputs: </label>
			<input
				type="text"
				id="inputs"
				placeholder="2 x HDMI 2.1, 1 x DisplayPort 1.4"
				value={object.inputs}
				className={`${
					error.inputs ? styles.errorClass : null
				}`}
				onChange={(e) =>
					setObject({
						...object,
						inputs: e.target.value,
					})
				}
			/>
		</>
	);
};

export default Monitor;
