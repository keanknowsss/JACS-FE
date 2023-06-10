import { useEffect, useRef, useState } from "react";
import { DeleteIcon } from "../../../../assets/icons";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import ItemIncrementer from "../../../../components/ItemIncrementer";
import Loading from "../../../../components/Loading/Loading";
import styles from "./ItemRow.module.scss";

import { useGetProductQuery } from "../../../../features/api/builders/productApi";

const ItemRow = ({
  itemId,
  itemChecked,
  itemSaved,
  totalPrice,
  updateTotalPrice,
  allItemsChecked,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isChecked, setIsChecked] = useState(itemChecked);
  const [price, setPrice] = useState(0);

  const prevQuantityRef = useRef(quantity);
  const isCheckedBeforeRef = useRef(false);

  const {
    data: product,
    error: productError,
    isLoading: isProductLoading,
  } = useGetProductQuery(itemId);

  useEffect(() => {
    if (product) {
      setPrice(product.result.price);
    }
  }, [product]);

  const addQtyHandler = () => {
    setQuantity(quantity + 1);
  };

  const minusQtyHandler = () => {
    setQuantity(quantity <= 1 ? 1 : quantity - 1);
  };

  const changeQtyHandler = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    setIsChecked(itemChecked);
  }, [itemChecked]);

  useEffect(() => {
    if (product) {
      const itemPrice = price * quantity;
      let updatedTotalPrice = +totalPrice;

	  console.log(itemId, " ", {price: itemPrice, updatedTotalPrice: updatedTotalPrice, before: isCheckedBeforeRef.current})

      if (isChecked) {
        if (prevQuantityRef.current > quantity) {
          const prevItemPrice = price * prevQuantityRef.current;
          updatedTotalPrice -= prevItemPrice;
        } else if (!isCheckedBeforeRef.current) {
          updatedTotalPrice += itemPrice;
		  console.log(itemId, " ", {added: updatedTotalPrice})
        }

        isCheckedBeforeRef.current = true;
      } else {
        if (isCheckedBeforeRef.current) {
          const prevItemPrice = price * prevQuantityRef.current;
          updatedTotalPrice -= prevItemPrice;

          if (updatedTotalPrice < 0) updatedTotalPrice = 0;
        }

        isCheckedBeforeRef.current = false;
      }

      updateTotalPrice(updatedTotalPrice.toFixed(2));
      prevQuantityRef.current = quantity;
    }
  }, [isChecked, quantity, product, totalPrice, updateTotalPrice]);

  useEffect(() => {
    if (allItemsChecked) {
      isCheckedBeforeRef.current = false;
    } else {
      isCheckedBeforeRef.current = true;
    }
  }, [allItemsChecked]);

  if (isProductLoading || !product) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className={styles.item}>
      <Checkbox
        className={styles.selectItem}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <img src={product.result.img[0]} alt="item" />
      <div className={styles.content}>
        <div className={styles.texts}>
          <p>{product.result.name}</p>
          <h2 className={styles.price}>&#8369; {product.result.price}</h2>
        </div>

        <div className={styles.modifyItem}>
          <ItemIncrementer
            addQtyHandler={addQtyHandler}
            changeQtyHandler={changeQtyHandler}
            minusQtyHandler={minusQtyHandler}
            quantity={quantity}
          />
          <div className={styles.btnContainer}>
            <button className={styles.delete}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemRow;
