import { useCallback, useEffect, useState } from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import ItemRow from "./ItemRow";
import styles from "./StoreRow.module.scss";

const StoreRow = ({
  name,
  checked,
  inventory,
  totalPrice,
  updateTotalPrice,
  updateCheckedItems,
  isUpdatingCart
}) => {
  const [isChecked, setIsChecked] = useState(false || checked);
  const [allItemsChecked, setAllItemsChecked] = useState(checked);
  const [itemPrices, setItemPrices] = useState([]);

  useEffect(() => {
    setIsChecked(checked);
    setAllItemsChecked(checked);
  }, [checked]);

  const updateItemPrices = useCallback((itemId, itemPrice, quantity) => {
    setItemPrices((prevItemPrices) => {
      const existingItemIndex = prevItemPrices.findIndex(
        (item) => item.itemId === itemId
      );
      if (existingItemIndex !== -1) {
        // Update existing item price
        prevItemPrices[existingItemIndex].itemPrice = itemPrice;
        prevItemPrices[existingItemIndex].quantity = quantity;
        return [...prevItemPrices];
      } else {
        // Add new item
        return [...prevItemPrices, { itemId, itemPrice, quantity }];
      }
    });
  }, []);

  useEffect(() => {
    updateCheckedItems(itemPrices);
  }, [itemPrices, updateCheckedItems]);

  useEffect(() => {
    console.log(itemPrices);
  }, [itemPrices]);

  useEffect(() => {
    if (allItemsChecked) {
      const totalPriceSum = itemPrices.reduce(
        (acc, price) => acc + price.itemPrice,
        0
      );
      updateTotalPrice(totalPriceSum.toFixed(2) || 0);
    } else {
      updateTotalPrice(0);
    }
  }, [itemPrices, allItemsChecked, updateTotalPrice]);

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
            inventory={inventory}
            updateItemPrices={updateItemPrices}
            noOfItems={item.quantity}
            isUpdatingCart={isUpdatingCart}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreRow;
