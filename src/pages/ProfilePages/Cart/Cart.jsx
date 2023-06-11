import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DeleteIcon, LocationIcon } from "../../../assets/icons";
import Checkbox from "../../../components/Checkbox";
import Loading from "../../../components/Loading/Loading";
import styles from "./Cart.module.scss";
import Checkout from "./Checkout";
import StoreRow from "./cartSubcomponents/StoreRow";

import {
  getCart,
  useUpdateCartMutation,
} from "../../../features/api/builders/cartApi";
import { getUserDetail } from "../../../features/api/builders/userApi";
import { selectCurrentUserId } from "../../../features/slice/userAccessSlice";

const Cart = ({ title, checkoutTitle }) => {
  document.title = title;

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [page, setPage] = useState("cart");
  const [userId, setUserId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [inventory, setInventory] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isUpdatingCart, setIsUpdatingCart] = useState(false);

  const currentUser = useSelector(selectCurrentUserId);
  const [queryData] = getUserDetail.useLazyQuery();
  const [queryUser] = getCart.useLazyQuery();
  const [updateCart] = useUpdateCartMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: user, error: userError } = await queryData(currentUser);
        if (userError) {
          console.log("error in profile name", userError?.result);
        }
        const id = user && user.result && user.result._userId;
        setUserId(id);

        const { data: cart, error: cartError } = await queryUser(id);
        if (cartError) {
          console.log("error in cart", cartError?.result);
        }
        const products = cart.result.products;
        setInventory(products);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentUser, queryData, queryUser]);

  const updateTotalPrice = useCallback((updatedTotalPrice) => {
    setTotalPrice(updatedTotalPrice);
  }, []);

  const updateCheckedItems = useCallback((items) => {
    setCheckedItems(items);
  }, []);

  useEffect(() => {
    // Update the cart on the server when checkedItems change
    const updateCartOnServer = async () => {
      try {
        setIsUpdatingCart(true);

        const body = [];
        checkedItems.map((item) => {
          body.push({ _productId: item.itemId, quantity: item.quantity });
        });

        console.log(userId)
        console.log(body);

        if (body && body.length > 0 && body.length == inventory.length) {
          await updateCart({id: userId, products: body});
        }
        console.log("Cart updated successfully");

      } catch (error) {
        console.log("Error updating cart:", error);
      } finally {
        setIsUpdatingCart(false);
      }
    };

    updateCartOnServer();
  }, [updateCart, checkedItems]);

  const goToCheckout = () => {
    setPage("checkout");
  };

  // FOR TEST
  const STORE_NAMES = [];
  inventory.forEach((product) => {
    if (!STORE_NAMES.includes(product.storeName)) {
      STORE_NAMES.push(product.storeName);
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  return page === "cart" ? (
    <main className={styles.cartPage}>
      <section className={styles.itemsContainer}>
        <div className={styles.tools}>
          <div className={styles.selectContainer}>
            <Checkbox
              className={styles.select}
              isChecked={selectAll}
              setIsChecked={setSelectAll}
            />
            <p>Select all item(s)</p>
          </div>

          <button className={styles.deleteBtn}>
            <DeleteIcon className={styles.delete} />
            <p>Delete</p>
          </button>
        </div>
        <div className={styles.storeItemsContainer}>
          {STORE_NAMES.map((name) => (
            <StoreRow
              key={name}
              name={name}
              checked={selectAll}
              inventory={inventory}
              totalPrice={totalPrice}
              updateTotalPrice={updateTotalPrice}
              updateCheckedItems={updateCheckedItems}
              isUpdatingCart = {isUpdatingCart}
            />
          ))}
        </div>
      </section>
      <section className={styles.summaryContainer}>
        <div className={styles.summaryInfo}>
          <div className={styles.location}>
            <h2>Location</h2>
            <p>
              <LocationIcon className={styles.locationIcon} />
              {/* -- WITH ADDRESS */}
              {/* <span className={styles.address}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Nesciunt, illum deserunt aperiam perferendis odio mollitia sint
							consequuntur minus quidem? Voluptatum?
						</span> */}
              {/* -- WITHOUT ADDRESS */}
              <span className={styles.addAddress}>Add Shipping Address</span>
            </p>
          </div>
          <div className={styles.payables}>
            <div className={styles.summary}>
              <h2>Order Summary</h2>
              <div className={styles.summaryDetails}>
                <p className={styles.rowDetail}>
                  <span>Subtotal (0 items)</span>
                  <span>&#8369; {totalPrice}</span>
                </p>
                <p className={styles.rowDetail}>
                  <span>Shipping Fee</span>
                  <span>&#8369; 0.00</span>
                </p>
              </div>
            </div>
            <div className={styles.subTotal}>
              <span>Subtotal</span>
              <span>&#8369; {totalPrice}</span>
            </div>
          </div>
        </div>

        <button className={styles.checkout} onClick={goToCheckout}>
          Proceed to Checkout
        </button>
      </section>
    </main>
  ) : (
    <Checkout setPage={setPage} title={checkoutTitle} />
  );
};

export default Cart;
