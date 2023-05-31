import styles from "./Checkbox.module.scss";

const Checkbox = ({ className, isChecked, setIsChecked }) => {

	const onClickHandler = (e) => {
		setIsChecked(!isChecked)
	}


	return (
		<>
			<button
				className={`${styles.defaultBtn} ${className} ${isChecked ? styles.activeButton : null}`}
				onClick={onClickHandler}
			></button>
		</>
	);
};

export default Checkbox;
