import styles from "../ProductModal.module.scss";

const Keyboard = ({ object, setObject, error }) => {
	return (
		<>
			<label htmlFor="manufacturer">Manufacturer: </label>
			<input
				type="text"
				id="manufacturer"
				placeholder="Corsair"
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
				placeholder="K60 RGB Pro"
				value={object.model}
				onChange={(e) =>
					setObject({
						...object,
						model: e.target.value,
					})
				}
			/>
            <label htmlFor="style">Style: </label>
			<input
				type="text"
				id="style"
				placeholder="Gaming"
				className={`${styles.medText} ${
					error.style ? styles.errorClass : null
				}`}
				value={object.style}
				onChange={(e) =>
					setObject({
						...object,
						style: e.target.value,
					})
				}
			/>
            <label htmlFor="mechanical">Mechanical: </label>
			<select
				id="mechanical"
				className={styles.smallSelect}
				value={object.mechanical}
				onChange={(e) =>
					setObject({
						...object,
						mechanical: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="switchType">Switch Type: </label>
			<input
				type="text"
				id="switchType"
				placeholder="Cherry Viola"
				className={styles.medText}
				value={object.switchType}
				onChange={(e) =>
					setObject({
						...object,
						switchType: e.target.value,
					})
				}
			/>
            <label htmlFor="backlit">Backlit: </label>
			<input
				type="text"
				id="backlit"
				placeholder="RGB"
				className={`${styles.medText} ${
					error.backlit ? styles.errorClass : null
				}`}
				value={object.backlit}
				onChange={(e) =>
					setObject({
						...object,
						backlit: e.target.value,
					})
				}
			/>
            <label htmlFor="tenkeyless">Tenkeyless: </label>
			<select
				id="tenkeyless"
				className={styles.smallSelect}
				value={object.tenkeyless}
				onChange={(e) =>
					setObject({
						...object,
						tenkeyless: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
            <label htmlFor="connectionType">Connection Type: </label>
			<input
				type="text"
				id="connectionType"
				placeholder="Wired"
				className={`${styles.medText} ${
					error.connectionType ? styles.errorClass : null
				}`}
				value={object.connectionType}
				onChange={(e) =>
					setObject({
						...object,
						connectionType: e.target.value,
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
            <label htmlFor="mouseIncluded">Mouse Included: </label>
			<select
				id="mouseIncluded"
				className={styles.smallSelect}
				value={object.mouseIncluded}
				onChange={(e) =>
					setObject({
						...object,
						mouseIncluded: e.target.value,
					})
				}
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
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

export default Keyboard;
