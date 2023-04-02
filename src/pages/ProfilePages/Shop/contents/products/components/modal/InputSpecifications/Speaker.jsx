import styles from "../ProductModal.module.scss";

const Speaker = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Logitech"
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
				placeholder="Z200"
				value={object.model}
				onChange={(e) =>
					setObject({
						...object,
						model: e.target.value,
					})
				}
			/>
            <label htmlFor="configuration">Configuration: </label>
			<input
				type="text"
				id="configuration"
				placeholder="2.0"
				className={`${styles.medText} ${
					error.configuration ? styles.errorClass : null
				}`}
				value={object.configuration}
				onChange={(e) =>
					setObject({
						...object,
						configuration: e.target.value,
					})
				}
			/>
            <label htmlFor="totalWattage">Total Wattage (Watts): </label>
			<input
				type="number"
				id="totalWattage"
				placeholder="10"
				min={1}
				className={`${styles.smallNumber} ${
					error.totalWattage ? styles.errorClass : null
				}`}
				value={object.totalWattage}
				onChange={(e) =>
					setObject({
						...object,
						totalWattage: e.target.value,
					})
				}
			/>
            <label htmlFor="frequencyResponse">Frequency Response: </label>
			<input
				type="text"
				id="frequencyResponse"
				placeholder="20 Hz - 20 kHz"
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
            <label htmlFor="powerEachFront">Power Each Front (Watts): </label>
			<input
				type="number"
				id="powerEachFront"
				placeholder="5"
				min={1}
				className={`${styles.smallNumber}`}
				value={object.powerEachFront}
				onChange={(e) =>
					setObject({
						...object,
						powerEachFront: e.target.value,
					})
				}
			/>
            <label htmlFor="powerCenter">Power Center (Watts): </label>
			<input
				type="number"
				id="powerCenter"
				placeholder="5"
				min={1}
				className={`${styles.smallNumber}`}
				value={object.powerCenter}
				onChange={(e) =>
					setObject({
						...object,
						powerCenter: e.target.value,
					})
				}
			/>
            <label htmlFor="powerEachRear">Power Each Rear (Watts): </label>
			<input
				type="number"
				id="powerEachRear"
				placeholder="5"
				min={1}
				className={`${styles.smallNumber}`}
				value={object.powerEachRear}
				onChange={(e) =>
					setObject({
						...object,
						powerEachRear: e.target.value,
					})
				}
			/>
            <label htmlFor="powerSubwoofer">Power Subwoofer: </label>
			<input
				type="number"
				id="powerSubwoofer"
				placeholder="5"
				min={1}
				className={`${styles.smallNumber}`}
				value={object.powerSubwoofer}
				onChange={(e) =>
					setObject({
						...object,
						powerSubwoofer: e.target.value,
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

export default Speaker;
