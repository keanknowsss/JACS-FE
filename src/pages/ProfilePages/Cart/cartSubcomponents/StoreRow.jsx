import { useEffect, useState } from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import ItemRow from "./ItemRow";
import styles from "./StoreRow.module.scss";

const StoreRow = ({
  name,
  checked,
  inventory,
  totalPrice,
  updateTotalPrice,
}) => {
  const [isChecked, setIsChecked] = useState(false || checked);
  const [allItemsChecked, setAllItemsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
    setAllItemsChecked(checked);
  }, [checked]);

  const toggleAllItems = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setAllItemsChecked(newCheckedState);
  };

  return (
    <div className={styles.store}>
      <div className={styles.storeName}>
        <Checkbox
          className={styles.selectStore}
          isChecked={isChecked}
          setIsChecked={toggleAllItems}
        />
        <span>{name}</span>
      </div>
      <div className={styles.itemLists}>
        {inventory.map((item) => (
          <ItemRow
            key={item._productId}
            itemId={item._productId}
            itemChecked={isChecked}
            totalPrice={totalPrice}
            updateTotalPrice={updateTotalPrice}
			allItemsChecked={allItemsChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreRow;
