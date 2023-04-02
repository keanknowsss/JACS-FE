import styles from "../ProductModal.module.scss";

const VideoCard = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="MSI"
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
				placeholder="GeForce RTX 3060 Gaming X12G"
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
			<label htmlFor="chipset">Chipset: </label>
			<input
				type="text"
				id="chipset"
				placeholder="GeForce RTX 3060 12GB"
				className={`${
					error.model ? styles.errorClass : null
				}`}
				value={object.chipset}
				onChange={(e) =>
					setObject({
						...object,
						chipset: e.target.value,
					})
				}
			/>
			<label htmlFor="memory">Memory (GB): </label>
			<input
				type="number"
				id="memory"
				placeholder="2"
				min={1}
				className={`${styles.smallNumber} ${
					error.memory ? styles.errorClass : null
				}`}
				value={object.memory}
				onChange={(e) =>
					setObject({
						...object,
						memory: e.target.value,
					})
				}
			/>
            <label htmlFor="memoryType">Memory Type: </label>
			<input
				type="text"
				id="memoryType"
				placeholder="GDDR5"
				className={`${styles.medText} ${
					error.memoryType ? styles.errorClass : null
				}`}
				value={object.memoryType}
				onChange={(e) =>
					setObject({
						...object,
						memoryType: e.target.value,
					})
				}
			/>
            <label htmlFor="coreClock">Core Clock (Mhz): </label>
			<input
				type="number"
				id="coreClock"
				placeholder="1320"
				min={1}
				className={`${styles.smallNumber} ${
					error.coreClock ? styles.errorClass : null
				}`}
				value={object.coreClock}
				onChange={(e) =>
					setObject({
						...object,
						coreClock: e.target.value,
					})
				}
			/>
            <label htmlFor="boostClock">Boost Clock (Mhz): </label>
			<input
				type="number"
				id="boostClock"
				placeholder="1797"
				min={1}
				className={`${styles.smallNumber} ${
					error.boostClock ? styles.errorClass : null
				}`}
				value={object.boostClock}
				onChange={(e) =>
					setObject({
						...object,
						boostClock: e.target.value,
					})
				}
			/>
            <label htmlFor="effectiveMemoryClock">Effective Memory Clock (Mhz): </label>
			<input
				type="number"
				id="effectiveMemoryClock"
				placeholder="15000"
				min={1}
				className={`${styles.smallNumber} ${
					error.effectiveMemoryClock ? styles.errorClass : null
				}`}
				value={object.effectiveMemoryClock}
				onChange={(e) =>
					setObject({
						...object,
						effectiveMemoryClock: e.target.value,
					})
				}
			/>
            <label htmlFor="interface">Interface: </label>
			<input
				type="text"
				id="interface"
				placeholder="PCIe x16"
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
            <label htmlFor="frameSync">Frame Sync: </label>
			<input
				type="text"
				id="frameSync"
				placeholder="PCIe x16"
				className={`${styles.medText} ${
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
            <label htmlFor="len">Length (mm): </label>
			<input
				type="number"
				id="len"
				placeholder="245"
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
            <label htmlFor="tdp">TDP (Watts): </label>
			<input
				type="number"
				id="tdp"
				placeholder="220"
				min={1}
				className={`${styles.smallNumber} ${
					error.tdp ? styles.errorClass : null
				}`}
				value={object.tdp}
				onChange={(e) =>
					setObject({
						...object,
						tdp: e.target.value,
					})
				}
			/>
            <label htmlFor="caseExpansionSlotWidth">Case Expansion Slot Width: </label>
			<input
				type="number"
				id="caseExpansionSlotWidth"
				placeholder="2"
				min={1}
				className={`${styles.smallNumber} ${
					error.caseExpansionSlotWidth ? styles.errorClass : null
				}`}
				value={object.caseExpansionSlotWidth}
				onChange={(e) =>
					setObject({
						...object,
						caseExpansionSlotWidth: e.target.value,
					})
				}
			/>
            <label htmlFor="totalSlotWidth">Total Slot Width: </label>
			<input
				type="number"
				id="totalSlotWidth"
				placeholder="2"
				min={1}
				className={`${styles.smallNumber} ${
					error.totalSlotWidth ? styles.errorClass : null
				}`}
				value={object.totalSlotWidth}
				onChange={(e) =>
					setObject({
						...object,
						totalSlotWidth: e.target.value,
					})
				}
			/>
			<label htmlFor="cooling">Cooling: </label>
			<input
				type="text"
				id="cooling"
				placeholder="120 mm Radiator and 2 Fans"
				className={`${
					error.cooling ? styles.errorClass : null
				}`}
				value={object.cooling}
				onChange={(e) =>
					setObject({
						...object,
						cooling: e.target.value,
					})
				}
			/>
			<label htmlFor="externalPower">External Power: </label>
			<input
				type="text"
				id="externalPower"
				placeholder="1 PCIe 8-Pin + 1 PCIe 6-pin"
				className={`${
					error.externalPower ? styles.errorClass : null
				}`}
				value={object.externalPower}
				onChange={(e) =>
					setObject({
						...object,
						externalPower: e.target.value,
					})
				}
			/>
			 <label htmlFor="dviOutputs">DVI Ports: </label>
			<input
				type="number"
				id="dviOutputs"
				placeholder="2"
				min={0}
				className={`${styles.smallNumber} ${
					error.dviOutputs ? styles.errorClass : null
				}`}
				value={object.dviOutputs}
				onChange={(e) =>
					setObject({
						...object,
						dviOutputs: e.target.value,
					})
				}
			/>
			 <label htmlFor="hdmiOutputs">HDMI Ports: </label>
			<input
				type="number"
				id="hdmiOutputs"
				placeholder="2"
				min={0}
				className={`${styles.smallNumber} ${
					error.hdmiOutputs ? styles.errorClass : null
				}`}
				value={object.hdmiOutputs}
				onChange={(e) =>
					setObject({
						...object,
						hdmiOutputs: e.target.value,
					})
				}
			/>
			 <label htmlFor="displayPortOutputs">Displayport Ports: </label>
			<input
				type="number"
				id="displayPortOutputs"
				placeholder="2"
				min={0}
				className={`${styles.smallNumber} ${
					error.displayPortOutputs ? styles.errorClass : null
				}`}
				value={object.displayPortOutputs}
				onChange={(e) =>
					setObject({
						...object,
						displayPortOutputs: e.target.value,
					})
				}
			/>
		</>
	);
};

export default VideoCard;
