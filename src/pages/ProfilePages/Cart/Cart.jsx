import { useState } from "react";
import styles from "./Cart.module.scss"
import { AddIcon, DeleteIcon, MinusIcon } from "../../../assets/icons"
import { Product } from "../../../assets/placeholder";

const Cart = ({ title }) => {
  document.title = title;

  const [selectAll, setSelectAll] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addQtyHandler = () => {
		setQuantity(quantity + 1);
	};

	const minusQtyHandler = () => {
		setQuantity(quantity <= 1 ? 1 : quantity - 1);
	};

	const changeQtyHandler = (e) => {
		setQuantity(e.target.value);
	};

  return (
    <main className={styles.cartPage}>
      <section className={styles.itemsContainer}>
        <div className={styles.tools}>
          <div className={styles.selectContainer}>
            <button className={`${styles.select} ${selectAll ? styles.selected : null
              }`} onClick={() => setSelectAll(state => !state)} />
            <p>Select all item(s)</p>
          </div>

          <button className={styles.deleteBtn}>
            <DeleteIcon className={styles.delete} />
            <p>Delete</p>
          </button>
        </div>
        <div className={styles.storeItemsContainer}>
            <div className={styles.store}>
              <div className={styles.storeName}>
                <button className={styles.selectStore} />
                <span>Store Name</span>
              </div>
              <div className={styles.itemLists}>
                <div className={styles.item}>
                  <button className={styles.selectItem} />
                  <img src={Product} alt="item" />
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam consequatur laudantium enim eius porro vel doloribus, ratione eaque suscipit?</p>
                  <div className={styles.incrementer}>
                    <button onClick={addQtyHandler}>
                      <AddIcon className={styles.addQty} />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={changeQtyHandler}
                      className={styles.qty}
                    />
                    <button onClick={minusQtyHandler}>
                      <MinusIcon className={styles.minusQty} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className={styles.summaryContainer}>
        asdas
      </section>
    </main>
  )
}

export default Cart