import styles from "../ProductModal.module.scss";

const Case = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="MSI"
				className={`${styles.medText} ${error.manufacturer ? styles.errorClass : null}`}
				value={object.manufacturer}
				onChange={(e) =>
					setObject({
						...object,
						manufacturer: e.target.value
					})
				}
			/>
			<label htmlFor="type">Type: </label>
			<input
				type="text"
				id="type"
				placeholder="ATX Mid Tower"
				className={`${styles.medText} ${error.type ? styles.errorClass : null}`}
				value={object.type}
				onChange={(e) =>
					setObject({
						...object,
						type: e.target.value
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
						color: e.target.value
					})
				}
			/>
			<label htmlFor="powerSupply">Included Power Supply: </label>
			<input
				type="text"
				id="powerSupply"
				placeholder="None"
				className={`${styles.medText} ${error.powerSupply ? styles.errorClass : null}`}
				value={object.powerSupply}
				onChange={(e) =>
					setObject({
						...object,
						powerSupply: e.target.value
					})
				}
			/>
			<label htmlFor="sidePanel">Side Panel: </label>
			<input
				type="text"
				id="sidePanel"
				placeholder="None"
				className={`${styles.medText} ${error.sidePanel ? styles.errorClass : null}`}
				value={object.sidePanel}
				onChange={(e) =>
					setObject({
						...object,
						sidePanel: e.target.value
					})
				}
			/>
			<label htmlFor="powerSupplyShroud">Power Supply Shroud: </label>
			<select
				id="powerSupplyShroud"
				className={styles.smallSelect}
				value={object.powerSupplyShroud}
				onChange={(e) =>
					setObject({
						...object,
						powerSupplyShroud: e.target.value
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
			<label htmlFor="frontPanelUSB">Front Panel USB: </label>
			<input
				type="text"
				id="frontPanelUSB"
				className={`${error.frontPanelUSB ? styles.errorClass : null}`}
				placeholder="USB 3.2 Gen 2 Type-C"
				value={object.frontPanelUSB}
				onChange={(e) =>
					setObject({
						...object,
						frontPanelUSB: e.target.value
					})
				}
			/>
			<label htmlFor="motherboardFormFactor">Motherboard Form Factor: </label>
			<input
				type="text"
				id="motherboardFormFactor"
				placeholder="ATX"
				className={`${styles.medText} ${
					error.motherboardFormFactor ? styles.errorClass : null
				}`}
				value={object.motherboardFormFactor}
				onChange={(e) =>
					setObject({
						...object,
						motherboardFormFactor: e.target.value
					})
				}
			/>
			<label htmlFor="maxLength">Max Length: </label>
			<input
				type="text"
				id="maxLength"
				placeholder='360 mm / 14.173"'
				className={`${styles.medText} ${error.maxLength ? styles.errorClass : null}`}
				value={object.maxLength}
				onChange={(e) =>
					setObject({
						...object,
						maxLength: e.target.value
					})
				}
			/>
			<label htmlFor="driveBays">Drive Bays: </label>
			<input
				type="text"
				id="driveBays"
				placeholder='2 x Internal 3.5" / 2 x Internal 2.5"'
				className={`${error.driveBays ? styles.errorClass : null}`}
				value={object.driveBays}
				onChange={(e) =>
					setObject({
						...object,
						driveBays: e.target.value
					})
				}
			/>
			<label htmlFor="expansionSlots">Expansion Slots: </label>
			<input
				type="text"
				id="expansionSlots"
				placeholder='7 x Full-Height"'
				className={`${error.expansionSlots ? styles.errorClass : null}`}
				value={object.expansionSlots}
				onChange={(e) =>
					setObject({
						...object,
						expansionSlots: e.target.value
					})
				}
			/>
			<label htmlFor="dimensions">Dimensions: </label>
			<input
				type="text"
				id="dimensions"
				placeholder="453 mm x 230 mm x 466 mm"
				className={`${error.dimensions ? styles.errorClass : null}`}
				value={object.dimensions}
				onChange={(e) =>
					setObject({
						...object,
						dimensions: e.target.value
					})
				}
			/>
			<label htmlFor="volume">Volume: </label>
			<input
				type="text"
				id="volume"
				placeholder="48.553 L"
				className={`${styles.medText} ${error.volume ? styles.errorClass : null}`}
				value={object.volume}
				onChange={(e) =>
					setObject({
						...object,
						volume: e.target.value
					})
				}
			/>
		</>
	);
};

export default Case;
