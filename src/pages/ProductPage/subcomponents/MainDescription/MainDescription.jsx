import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DeliveryIcon, DiscountIcon, ShipIcon } from "../../../../assets/icons";
import Modal from "../../../../components/Modal";
import styles from "./MainDescription.module.scss";

import { useAddCartMutation } from "../../../../features/api/builders/cartApi";
import { getUserDetail } from "../../../../features/api/builders/userApi";
import { selectCurrentUserId } from "../../../../features/slice/userAccessSlice";

const MainDescription = (props) => {
  const { details, specifications } = props;
  const [showModal, setShowModal] = useState(false);

  const productId = details._id;
  const [addCart] = useAddCartMutation();
  const [queryData] = getUserDetail.useLazyQuery();

  const currentUser = useSelector(selectCurrentUserId);

  const addToCartHandler = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await queryData(currentUser);
      if (error) {
        console.log("error in profile name", error?.result);
      }

      const userId = data && data.result && data.result._userId;

      const body = {
        _userId: userId,
        products: [{
          _productId: productId,
          quantity: 1
        }]
      }

      const result = await addCart(body)
      console.log(result)

    } catch (error) {
      console.log(error)
    }

    setShowModal(true);
  };

  const returnHome = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.main}>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        type="callback"
        callback={returnHome}
        symbol="success"
      >
        <h1>Added to Cart Successfully</h1>
        <p>This product has been added to your cart successfully.</p>
      </Modal>

      <div className={styles.images}>
        <img src={details.img[0]} className={styles.image} />
      </div>

      <div className={styles.description}>
        <h1 className={styles.productName}>{details.name}</h1>
        <p className={styles.brand}>Brand: {specifications.manufacturer}</p>
        <p className={styles.price}>$ {details.price}</p>

        <div className={styles.btns}>
          <button className={styles.addCartBtn} onClick={addToCartHandler}>
            Add to Cart
          </button>
          <button className={styles.buyBtn}>Buy Now</button>
        </div>

        <div className={styles.deliveryDetails}>
          <span>
            <DeliveryIcon />
          </span>
          <p className={styles.time}>Delivery Time</p>
          <p className={styles.timeValue}>04/20/2069</p>
          <span>
            <ShipIcon />
          </span>
          <p className={styles.mode}>Mode of Shipping</p>
          <p className={styles.modeValue}>
            Walk-in <br />
            Delivery
          </p>
          <span>
            <DiscountIcon />
          </span>
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
