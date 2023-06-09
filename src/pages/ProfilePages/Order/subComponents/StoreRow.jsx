import { useEffect, useState } from "react";
import ItemRow from "./ItemRow";
import styles from "./StoreRow.module.scss";

const StoreRow = ({ name, checked }) => {
	const [isChecked, setIsChecked] = useState(false || checked);

	const itemID = [0, 1, 2, 3]

	useEffect(() => {
		setIsChecked(checked)
	}, [checked])

	return (
		<div className={styles.store}>
			<div className={styles.storeName}>
				<span>{name}</span>
			</div>
			<div className={styles.itemLists}>
				{itemID.map((item)=>(
					<ItemRow itemId={item} itemChecked={isChecked} />
				))}
			</div>
		</div>
	);
};

export default StoreRow;
