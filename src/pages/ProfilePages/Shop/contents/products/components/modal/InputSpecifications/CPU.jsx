import styles from "../ProductModal.module.scss";

const CPU = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<select
				id="manufacturer"
				className={styles.smallSelect}
				value={object.manufacturer}
				onChange={(e) =>
					setObject({
						...object,
						manufacturer: e.target.value,
					})
				}
			>
				<option value="amd">AMD</option>
				<option value="intel">Intel</option>
			</select>
			<label htmlFor="core">Core: </label>
			<input
				type="number"
				id="core"
				placeholder="6"
				min={1}
				max={30}
				className={`${styles.smallNumber} ${
					error.core ? styles.errorClass : null
				}`}
				value={object.core}
				onChange={(e) =>
					setObject({
						...object,
						core: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="coreClock">Core Clock (Ghz): </label>
			<input
				type="number"
				id="coreClock"
				placeholder="3.7"
				step="0.1"
				min={1}
				max={30}
				className={`${styles.smallNumber} ${
					error.core ? styles.errorClass : null
				}`}
				value={object.coreClock}
				onChange={(e) =>
					setObject({
						...object,
						coreClock: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="boostClock">Boost Clock (Ghz): </label>
			<input
				type="number"
				id="boostClock"
				placeholder="3.7"
				step="0.1"
				min={1}
				max={30}
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
				required
			/>
			<label htmlFor="tdp">TDP (Watts): </label>
			<input
				type="number"
				id="tdp"
				placeholder="65"
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
				required
			/>
			<label htmlFor="modelSeries">Model Series: </label>
			<input
				type="text"
				id="modelSeries"
				placeholder="AMD Ryzen 5"
				className={`${styles.medText} ${
					error.series ? styles.errorClass : null
				}`}
				value={object.series}
				onChange={(e) =>
					setObject({
						...object,
						series: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="microArch">MicroArchitecture: </label>
			<input
				type="text"
				id="microArch"
				className={`${styles.medText} ${
					error.microArchitecture ? styles.errorClass : null
				}`}
				placeholder="Zen 3"
				value={object.microArchitecture}
				onChange={(e) =>
					setObject({
						...object,
						microArchitecture: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="coreFam">Core Family: </label>
			<input
				type="text"
				id="coreFam"
				className={`${styles.medText} ${
					error.coreFamily ? styles.errorClass : null
				}`}
				placeholder="Vermeer"
				value={object.coreFamily}
				onChange={(e) =>
					setObject({
						...object,
						coreFamily: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="socket">Socket: </label>
			<input
				type="text"
				id="socket"
				className={`${styles.medText} ${
					error.socket ? styles.errorClass : null
				}`}
				placeholder="AM4"
				value={object.socket}
				onChange={(e) =>
					setObject({
						...object,
						socket: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="graphics">Integrated Graphics: </label>
			<input
				type="text"
				id="graphics"
				className={`${error.integratedGraphics ? styles.errorClass : null}`}
				placeholder="Intel UHD Graphics 770"
				value={object.integratedGraphics}
				onChange={(e) =>
					setObject({
						...object,
						integratedGraphics: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="memory">Maximum Memory (Gb): </label>
			<input
				type="number"
				id="memory"
				placeholder="128"
				min={1}
				className={`${styles.smallNumber} ${
					error.maxSupportedMemory ? styles.errorClass : null
				}`}
				value={object.maxSupportedMemory}
				onChange={(e) =>
					setObject({
						...object,
						maxSupportedMemory: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="eccSupport">ECC Support: </label>
			<select
				id="eccSupport"
				className={styles.smallSelect}
				value={object.eccSupport}
				onChange={(e) =>
					setObject({
						...object,
						eccSupport: e.target.value,
					})
				}
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
			<label htmlFor="cooler">Includes Cooler: </label>
			<select
				id="cooler"
				className={styles.smallSelect}
				value={object.includeCooler}
				onChange={(e) =>
					setObject({
						...object,
						includeCooler: e.target.value,
					})
				}
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
			<label htmlFor="packaging">Packaging: </label>
			<input
				type="text"
				id="packaging"
				className={`${styles.medText} ${
					error.packaging ? styles.errorClass : null
				}`}
				placeholder="Boxed"
				value={object.packaging}
				onChange={(e) =>
					setObject({
						...object,
						packaging: e.target.value,
					})
				}
				required
			/>
			<label htmlFor="l1Cache">L1 Cache: </label>
			<input
				type="text"
				id="l1Cache"
				placeholder="6 x 32 kB Instruction, 6 x 48 kB Data"
				value={object.l1Cache}
				className={`${error.l1Cache ? styles.errorClass : null}`}
				onChange={(e) =>
					setObject({
						...object,
						l1Cache: e.target.value,
					})
				}
			/>
			<label htmlFor="l2Cache">L2 Cache: </label>
			<input
				type="text"
				id="l2Cache"
				placeholder="6 x 32 MB"
				value={object.l2Cache}
				className={`${error.l2Cache ? styles.errorClass : null}`}
				onChange={(e) =>
					setObject({
						...object,
						l2Cache: e.target.value,
					})
				}
			/>
			<label htmlFor="l3Cache">L3 Cache: </label>
			<input
				type="text"
				id="l3Cache"
				placeholder="1 x 24 MB"
				className={`${error.l3Cache ? styles.errorClass : null}`}
				value={object.l3Cache}
				onChange={(e) =>
					setObject({
						...object,
						l3Cache: e.target.value,
					})
				}
			/>
			<label htmlFor="lithography">Lithography (nm): </label>
			<input
				type="number"
				id="lithography"
				placeholder="10"
				min={1}
				className={`${styles.smallNumber} ${
					error.lithography ? styles.errorClass : null
				}`}
				value={object.lithography}
				onChange={(e) =>
					setObject({
						...object,
						lithography: e.target.value,
					})
				}
			/>
			<label htmlFor="CPUcooler">Includes CPU Cooler: </label>
			<select
				id="CPUcooler"
				className={styles.smallSelect}
				value={object.includeCPUCooler}
				onChange={(e) =>
					setObject({
						...object,
						includeCPUCooler: e.target.value,
					})
				}
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
			<label htmlFor="multithreading">Multithreading: </label>
			<select
				id="multithreading"
				className={styles.smallSelect}
				value={object.multithreading}
				onChange={(e) =>
					setObject({
						...object,
						multithreading: e.target.value,
					})
				}
				required
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
			{object.multithreading === "true" && (
				<>
					<label htmlFor="threadingType">Type of Multithreading: </label>
					<input
						type="text"
						id="threadingType"
						className={`${styles.medText} ${
							error.typeOfMultithreading ? styles.errorClass : null
						}`}
						placeholder="Hyper-threading"
						value={object.typeOfMultithreading}
						onChange={(e) =>
							setObject({
								...object,
								typeOfMultithreading: e.target.value,
							})
						}
					/>
				</>
			)}
		</>
	);
};

export default CPU;
