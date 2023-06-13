import styles from "../ProductModal.module.scss";

const Motherboard = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="ASUS"
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
            <label htmlFor="socketCPU">CPU Socket: </label>
			<input
				type="text"
				id="socketCPU"
				placeholder="AM4"
				className={`${styles.medText} ${
					error.socketCpu ? styles.errorClass : null
				}`}
				value={object.socketCpu}
				onChange={(e) =>
					setObject({
						...object,
						socketCpu: e.target.value,
					})
				}
			/>
            <label htmlFor="formFactor">Form Factor: </label>
			<input
				type="text"
				id="formFactor"
				placeholder="MicroATX"
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
            <label htmlFor="chipset">Chipset: </label>
			<input
				type="text"
				id="chipset"
				placeholder="AMD X570"
				className={`${styles.medText} ${
					error.chipset ? styles.errorClass : null
				}`}
				value={object.chipset}
				onChange={(e) =>
					setObject({
						...object,
						chipset: e.target.value,
					})
				}
			/>
            <label htmlFor="maxMemory">Maximum Memory (GB): </label>
			<input
				type="number"
				id="maxMemory"
				placeholder="128"
				min={1}
				className={`${styles.smallNumber} ${
					error.maxMemory ? styles.errorClass : null
				}`}
				value={object.maxMemory}
				onChange={(e) =>
					setObject({
						...object,
						maxMemory: e.target.value,
					})
				}
			/>
			<label htmlFor="memoryType">Memory Type: </label>
			<select
				id="memoryType"
				className={styles.smallSelect}
				value={object.memoryType}
				onChange={(e) =>
					setObject({
						...object,
						memoryType: e.target.value,
					})
				}
			>
				<option value="DDR2">DDR2</option>
				<option value="DDR3">DDR3</option>
				<option value="DDR4">DDR4</option>
				<option value="DDR5">DDR5</option>
			</select>
            <label htmlFor="memorySlots">Memory Slots: </label>
			<input
				type="number"
				id="memorySlots"
				placeholder="4"
				min={1}
				className={`${styles.smallNumber} ${
					error.memorySlots ? styles.errorClass : null
				}`}
				value={object.memorySlots}
				onChange={(e) =>
					setObject({
						...object,
						memorySlots: e.target.value,
					})
				}
			/>
            <label htmlFor="memorySpeed">Memory Speed: </label>
			<input
				type="text"
				id="memorySpeed"
				placeholder="DDR4-2400"
				className={`${styles.medText} ${
					error.memorySpeed ? styles.errorClass : null
				}`}
				value={object.memorySpeed}
				onChange={(e) =>
					setObject({
						...object,
						memorySpeed: e.target.value,
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
            <label htmlFor="sliCrossfire">SLI Crossfire: </label>
			<input
				type="text"
				id="sliCrossfire"
				placeholder="CrossFire Capable"
				className={`${
					error.sliCrossfire ? styles.errorClass : null
				}`}
				value={object.sliCrossfire}
				onChange={(e) =>
					setObject({
						...object,
						sliCrossfire: e.target.value,
					})
				}
			/>
            <label htmlFor="pci16Slots">PCIE x16 Slots: </label>
			<input
				type="number"
				id="pci16Slots"
				placeholder="2"
				min={0}
                max={6}
				className={`${styles.smallNumber} ${
					error.pci16Slots ? styles.errorClass : null
				}`}
				value={object.pci16Slots}
				onChange={(e) =>
					setObject({
						...object,
						pci16Slots: e.target.value,
					})
				}
			/>
            <label htmlFor="pci8Slots">PCIE x8 Slots: </label>
			<input
				type="number"
				id="pci8Slots"
				placeholder="2"
				min={0}
                max={6}
				className={`${styles.smallNumber} ${
					error.pci8Slots ? styles.errorClass : null
				}`}
				value={object.pci8Slots}
				onChange={(e) =>
					setObject({
						...object,
						pci8Slots: e.target.value,
					})
				}
			/>
            <label htmlFor="pci4Slots">PCIE x4 Slots: </label>
			<input
				type="number"
				id="pci4Slots"
				placeholder="2"
				min={0}
                max={6}
				className={`${styles.smallNumber} ${
					error.pci4Slots ? styles.errorClass : null
				}`}
				value={object.pci4Slots}
				onChange={(e) =>
					setObject({
						...object,
						pci4Slots: e.target.value,
					})
				}
			/>
            <label htmlFor="pci1Slots">PCIE x1 Slots: </label>
			<input
				type="number"
				id="pci1Slots"
				placeholder="2"
				min={0}
                max={6}
				className={`${styles.smallNumber} ${
					error.pci1Slots ? styles.errorClass : null
				}`}
				value={object.pci1Slots}
				onChange={(e) =>
					setObject({
						...object,
						pci1Slots: e.target.value,
					})
				}
			/>
            <label htmlFor="pciSlots">PCI Slots: </label>
			<input
				type="number"
				id="pciSlots"
				placeholder="2"
				min={0}
                max={6}
				className={`${styles.smallNumber} ${
					error.pciSlots ? styles.errorClass : null
				}`}
				value={object.pciSlots}
				onChange={(e) =>
					setObject({
						...object,
						pciSlots: e.target.value,
					})
				}
			/>
            <label htmlFor="m2Slots">M.2 Slots: </label>
			<input
				type="text"
				id="m2Slots"
				placeholder="2242/2260/2280/22110 M-key"
				value={object.m2Slots}
				className={`${
					error.m2Slots ? styles.errorClass : null
				}`}
				onChange={(e) =>
					setObject({
						...object,
						m2Slots: e.target.value,
					})
				}
			/>
            <label htmlFor="miniPCIeSlots">Mini PCIE Slots: </label>
			<input
				type="number"
				id="miniPCIeSlots"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.miniPCIeSlots ? styles.errorClass : null
				}`}
				value={object.miniPCIeSlots}
				onChange={(e) =>
					setObject({
						...object,
						miniPCIeSlots: e.target.value,
					})
				}
			/>
            <label htmlFor="halfMiniPCIeSlots">Half Mini PCIE Slots: </label>
			<input
				type="number"
				id="halfMiniPCIeSlots"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.halfMiniPCIeSlots ? styles.errorClass : null
				}`}
				value={object.halfMiniPCIeSlots}
				onChange={(e) =>
					setObject({
						...object,
						halfMiniPCIeSlots: e.target.value,
					})
				}
			/>
            <label htmlFor="miniPCIe_mSATASlots">Mini PCIE mSata Slots: </label>
			<input
				type="number"
				id="miniPCIe_mSATASlots"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.miniPCIe_mSATASlots ? styles.errorClass : null
				}`}
				value={object.miniPCIe_mSATASlots}
				onChange={(e) =>
					setObject({
						...object,
						miniPCIe_mSATASlots: e.target.value,
					})
				}
			/>
            <label htmlFor="mSataSlots">MSata Slots: </label>
			<input
				type="number"
				id="mSataSlots"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.mSataSlots ? styles.errorClass : null
				}`}
				value={object.mSataSlots}
				onChange={(e) =>
					setObject({
						...object,
						mSataSlots: e.target.value,
					})
				}
			/>
            <label htmlFor="sata6Gb">SATA 6GB/s Ports: </label>
			<input
				type="number"
				id="sata6Gb"
				placeholder="0"
				min={0}
				className={`${styles.smallNumber} ${
					error.sata6Gb ? styles.errorClass : null
				}`}
				value={object.sata6Gb}
				onChange={(e) =>
					setObject({
						...object,
						sata6Gb: e.target.value,
					})
				}
			/>
            <label htmlFor="onboardEthernet">Onboard Ethernet: </label>
			<input
				type="text"
				id="onboardEthernet"
				placeholder="1 x 1 Gb/s (Realtek L8200A)"
				className={`${
					error.onboardEthernet ? styles.errorClass : null
				}`}
				value={object.onboardEthernet}
				onChange={(e) =>
					setObject({
						...object,
						onboardEthernet: e.target.value,
					})
				}
			/>
            <label htmlFor="onboardVideo">Onboard Video: </label>
			<input
				type="text"
				id="onboardVideo"
				placeholder="Depends on CPU"
				className={`${
					error.onboardVideo ? styles.errorClass : null
				}`}
				value={object.onboardVideo}
				onChange={(e) =>
					setObject({
						...object,
						onboardVideo: e.target.value,
					})
				}
			/>
            <label htmlFor="usb2Headers">USB 2.0 Headers: </label>
			<input
				type="number"
				id="usb2Headers"
				placeholder="2"
				min={0}
				className={`${styles.smallNumber} ${
					error.usb2Headers ? styles.errorClass : null
				}`}
				value={object.usb2Headers}
				onChange={(e) =>
					setObject({
						...object,
						usb2Headers: e.target.value,
					})
				}
			/>
            <label htmlFor="singleUsb2Headers">SingleUSB 2.0 Headers: </label>
			<input
				type="number"
				id="singleUsb2Headers"
				placeholder="8"
				min={0}
				className={`${styles.smallNumber} ${
					error.singleUsb2Headers ? styles.errorClass : null
				}`}
				value={object.singleUsb2Headers}
				onChange={(e) =>
					setObject({
						...object,
						singleUsb2Headers: e.target.value,
					})
				}
			/>
            <label htmlFor="usb3_2Gen1Headers">USB 3.2 Gen 1 Headers: </label>
			<input
				type="number"
				id="usb3_2Gen1Headers"
				placeholder="1"
				min={0}
				className={`${styles.smallNumber} ${
					error.usb3_2Gen1Headers ? styles.errorClass : null
				}`}
				value={object.usb3_2Gen1Headers}
				onChange={(e) =>
					setObject({
						...object,
						usb3_2Gen1Headers: e.target.value,
					})
				}
			/>
            <label htmlFor="usb3_2Gen2Headers">USB 3.2 Gen 2 Headers: </label>
			<input
				type="number"
				id="usb3_2Gen2Headers"
				placeholder="1"
				min={0}
				className={`${styles.smallNumber} ${
					error.usb3_2Gen2Headers ? styles.errorClass : null
				}`}
				value={object.usb3_2Gen2Headers}
				onChange={(e) =>
					setObject({
						...object,
						usb3_2Gen2Headers: e.target.value,
					})
				}
			/>
            <label htmlFor="usb3_2Gen2x2Headers">USB 3.2 Gen 2x2 Headers: </label>
			<input
				type="number"
				id="usb3_2Gen2x2Headers"
				placeholder="8"
				min={0}
				className={`${styles.smallNumber} ${
					error.usb3_2Gen2x2Headers ? styles.errorClass : null
				}`}
				value={object.usb3_2Gen2x2Headers}
				onChange={(e) =>
					setObject({
						...object,
						usb3_2Gen2x2Headers: e.target.value,
					})
				}
			/>
            <label htmlFor="supportsECC">ECC Support: </label>
			<select
				id="supportsECC"
				className={styles.smallSelect}
				value={object.supportsECC}
				onChange={(e) =>
					setObject({
						...object,
						supportsECC: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="wirelessNetworking">Wireless Networking: </label>
			<input
				type="text"
				id="wirelessNetworking"
				placeholder="Wi-Fi 5"
				className={`${styles.medText} ${
					error.wirelessNetworking ? styles.errorClass : null
				}`}
				value={object.wirelessNetworking}
				onChange={(e) =>
					setObject({
						...object,
						wirelessNetworking: e.target.value,
					})
				}
			/>
            <label htmlFor="raidSupport">Raid Support: </label>
			<select
				id="raidSupport"
				className={styles.smallSelect}
				value={object.raidSupport}
				onChange={(e) =>
					setObject({
						...object,
						raidSupport: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</>
	);
};

export default Motherboard;
