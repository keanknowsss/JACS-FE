import { useEffect, useRef } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ className, selectedItem, setSelectedItem, itemId }) => {
	const btn = useRef();

	const checkboxClick = (e) => {
		!selectedItem.includes(itemId)
			? setSelectedItem([...selectedItem, itemId])
			: setSelectedItem(selectedItem.filter((item) => item !== itemId));
	};

	useEffect(() => {
		selectedItem.includes(itemId)
			? btn.current.classList.add(styles.activeButton)
			: btn.current.classList.remove(styles.activeButton);
	}, [selectedItem]);

	return (
		<>
			<button
				className={`${styles.defaultBtn} ${className}`}
				onClick={checkboxClick}
				ref={btn}
			></button>
		</>
	);
};

export default Checkbox;
