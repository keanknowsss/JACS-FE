import styles from "../ProductModal.module.scss";

const PowerSupply = ({ object, setObject, error }) => {
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
				placeholder="Toughpower GX2"
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
			<label htmlFor="type">Type: </label>
			<input
				type="text"
				id="type"
				placeholder="ATX"
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
			/>
			<label htmlFor="efficiencyRating">Efficiency Rating: </label>
			<input
				type="text"
				id="efficiencyRating"
				placeholder="80+ Gold"
				className={`${styles.medText} ${
					error.efficiencyRating ? styles.errorClass : null
				}`}
				value={object.efficiencyRating}
				onChange={(e) =>
					setObject({
						...object,
						efficiencyRating: e.target.value,
					})
				}
			/>
            <label htmlFor="wattage">Wattage: </label>
			<input
				type="number"
				id="wattage"
				placeholder="600"
				min={1}
				className={`${styles.smallNumber} ${
					error.wattage ? styles.errorClass : null
				}`}
				value={object.wattage}
				onChange={(e) =>
					setObject({
						...object,
						wattage: e.target.value,
					})
				}
			/>
            <label htmlFor="len">Length (mm): </label>
			<input
				type="number"
				id="len"
				placeholder="140"
				min={1}
				className={`${styles.smallNumber} ${
					error.len ? styles.errorClass : null
				}`}
				value={object.len}
				onChange={(e) =>
					setObject({
						...object,
						len: e.target.value,
					})
				}
			/>
            <label htmlFor="modular">Modular: </label>
			<select
				id="modular"
				className={styles.smallSelect}
				value={object.modular}
				onChange={(e) =>
					setObject({
						...object,
						modular: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
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
            <label htmlFor="fanless">Fanless: </label>
			<select
				id="fanless"
				className={styles.smallSelect}
				value={object.fanless}
				onChange={(e) =>
					setObject({
						...object,
						fanless: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="atx4pinConnectors">ATX 4-Pin Connectors: </label>
			<input
				type="number"
				id="atx4pinConnectors"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.atx4pinConnectors ? styles.errorClass : null
				}`}
				value={object.atx4pinConnectors}
				onChange={(e) =>
					setObject({
						...object,
						atx4pinConnectors: e.target.value,
					})
				}
			/>
            <label htmlFor="eps8pinConnectors">EPS 8-Pin Connectors: </label>
			<input
				type="number"
				id="eps8pinConnectors"
				placeholder="1"
				min={0}
				className={`${styles.smallNumber} ${
					error.eps8pinConnectors ? styles.errorClass : null
				}`}
				value={object.eps8pinConnectors}
				onChange={(e) =>
					setObject({
						...object,
						eps8pinConnectors: e.target.value,
					})
				}
			/>
            <label htmlFor="pcie12_4pin12VHPWRconnectors">PCIE 12+4-Pin 12VHPWR Connectors: </label>
			<input
				type="number"
				id="pcie12_4pin12VHPWRconnectors"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.pcie12_4pin12VHPWRconnectors ? styles.errorClass : null
				}`}
				value={object.pcie12_4pin12VHPWRconnectors}
				onChange={(e) =>
					setObject({
						...object,
						pcie12_4pin12VHPWRconnectors: e.target.value,
					})
				}
			/>
            <label htmlFor="pcie12pinConnectors">PCIE 12-Pin Connectors: </label>
			<input
				type="number"
				id="pcie12pinConnectors"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.pcie12pinConnectors ? styles.errorClass : null
				}`}
				value={object.pcie12pinConnectors}
				onChange={(e) =>
					setObject({
						...object,
						pcie12pinConnectors: e.target.value,
					})
				}
			/>
            <label htmlFor="pcie6_2pinConnectors">PCIE 6+2-Pin Connectors: </label>
			<input
				type="number"
				id="pcie6_2pinConnectors"
				placeholder="2"
				min={0}
				className={`${styles.smallNumber} ${
					error.pcie6_2pinConnectors ? styles.errorClass : null
				}`}
				value={object.pcie6_2pinConnectors}
				onChange={(e) =>
					setObject({
						...object,
						pcie6_2pinConnectors: e.target.value,
					})
				}
			/>
            <label htmlFor="pcie6pinConnectors">PCIE 6-Pin Connectors: </label>
			<input
				type="number"
				id="pcie6pinConnectors"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.pcie6pinConnectors ? styles.errorClass : null
				}`}
				value={object.pcie6pinConnectors}
				onChange={(e) =>
					setObject({
						...object,
						pcie6pinConnectors: e.target.value,
					})
				}
			/>
            <label htmlFor="sataConnectors">SATA Connectors: </label>
			<input
				type="number"
				id="sataConnectors"
				placeholder="6"
				min={0}
				className={`${styles.smallNumber} ${
					error.sataConnectors ? styles.errorClass : null
				}`}
				value={object.sataConnectors}
				onChange={(e) =>
					setObject({
						...object,
						sataConnectors: e.target.value,
					})
				}
			/>
            <label htmlFor="molex4pinConnectors">Molex 4-Pin Connectors: </label>
			<input
				type="number"
				id="molex4pinConnectors"
				placeholder="3"
				min={0}
				className={`${styles.smallNumber} ${
					error.molex4pinConnectors ? styles.errorClass : null
				}`}
				value={object.molex4pinConnectors}
				onChange={(e) =>
					setObject({
						...object,
						molex4pinConnectors: e.target.value,
					})
				}
			/>
		</>
	);
};

export default PowerSupply;
