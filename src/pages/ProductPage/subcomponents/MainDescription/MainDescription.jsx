import React from "react";
import { DeliveryIcon, DiscountIcon, ShipIcon } from "../../../../assets/icons";
import styles from "./MainDescription.module.scss";

const MainDescription = (props) => {
  const { details, specifications } = props;

  return (
    <div className={styles.main}>
      <div className={styles.images}></div>

      <div className={styles.description}>
        <h1 className={styles.productName}>{details.name}</h1>
        <p className={styles.brand}>Brand: {specifications.manufacturer}</p>
        <p className={styles.price}>&#8369; {details.price}</p>

        <div className={styles.btns}>
          <button className={styles.addCartBtn}>Add to Cart</button>
          <button className={styles.buyBtn}>Buy Now</button>
        </div>

        <div className={styles.deliveryDetails}>
          <span><DeliveryIcon/></span>
          <p className={styles.time}>Delivery Time</p>
          <p className={styles.timeValue}>04/20/2069</p>
          <span><ShipIcon/></span>
          <p className={styles.mode}>Mode of Shipping</p>
          <p className={styles.modeValue}>
            Walk-in <br />
            Delivery
          </p>
          <span><DiscountIcon/></span>
          <p className={styles.discount}>Discount</p>
          <p className={styles.discountValue}>
            Buy in installments <br />
            Buy by bank transfor for legal entities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainDescription;
