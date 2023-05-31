import styles from "../ProductModal.module.scss";

const WirelessNetworkAdapter = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Belkin"
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
			<label htmlFor="protocol">Protocol: </label>
			<input
				type="text"
				id="protocol"
				placeholder="Wi-Fi 4"
				className={`${styles.medText} ${
					error.protocol ? styles.errorClass : null
				}`}
				value={object.protocol}
				onChange={(e) =>
					setObject({
						...object,
						protocol: e.target.value,
					})
				}
			/>
			<label htmlFor="interface">Interface: </label>
			<input
				type="text"
				id="interface"
				placeholder="USB Type-A 2.0"
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
			/>
			<label htmlFor="security">Security: </label>
			<input
				type="text"
				id="security"
				placeholder="WPS"
				className={`${styles.medText} ${
					error.security ? styles.errorClass : null
				}`}
				value={object.security}
				onChange={(e) =>
					setObject({
						...object,
						security: e.target.value,
					})
				}
			/>
			<label htmlFor="antenna">Antenna: </label>
			<input
				type="text"
				id="antenna"
				placeholder="Internal Antenna"
				className={`${styles.medText} ${
					error.antenna ? styles.errorClass : null
				}`}
				value={object.antenna}
				onChange={(e) =>
					setObject({
						...object,
						antenna: e.target.value,
					})
				}
			/>
			<label htmlFor="features">Features: </label>
			<textarea
				type="text"
				id="features"
				placeholder="Connect your computer to your wireless network"
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

export default WirelessNetworkAdapter;
