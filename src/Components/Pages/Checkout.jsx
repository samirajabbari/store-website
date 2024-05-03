import React, { useEffect, useState } from "react";
import styles from "./Styles/Checkout.module.css";
import { useCart } from "../Contex/CartContex";
import { shortTitle } from "../Helpers/Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faBasketShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Calendar, CalendarProvider } from "zaman";
function Checkout() {
  const [state, distpatch] = useCart();
  console.log(state.selectProduct.selectCount);
  const addHandler = (type, data) => {
    distpatch({ type, payload: data });
  };
  const checkoutHandler = () => {
    distpatch({ type: "CHEACKOUT" });
  };
  const [calendarValue, setCalendarValue] = useState(new Date());
  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <div>
          <span style={{ color: "#ff5f00", marginRight: "0.5rem" }}>
            Total:
          </span>
          <span>{state.productCounter}</span>
        </div>
        <div>
          <span style={{ color: "#ff5f00", marginRight: "0.5rem" }}>
            #Quantity:
          </span>
          <span>{state.total}</span>
        </div>
        <div>
          <span style={{ color: "#ff5f00", marginRight: "0.5rem" }}>
            Status:
          </span>
          <span>{!state.checkout && "pending..."}</span>
        </div>
        <span>Send Date:</span>
        <input type="text" value={calendarValue} />
        {/* <CalendarProvider locale="fa">
          <Calendar
            defaultValue={calendarValue}
            onChange={(e) => setCalendarValue(new Date(e.value))}
          />
        </CalendarProvider> */}
        <div>
          <button onClick={checkoutHandler}>Checkout</button>
        </div>
      </div>

      <div className={styles.productList}>
        {state.selectProduct.map((product) => {
          return (
            <div className={styles.productContainer} key={product.id}>
              <div>
                <img src={product.image} className={styles.productImage} />
              </div>
              <div className={styles.producttitle}>
                {shortTitle(product.title)}
              </div>
              <div className={styles.productbuttom}>
                {product.selectCount === 1 && (
                  <>
                    <button onClick={() => addHandler("DELETE", product)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    {<span>{product.selectCount}</span>}
                    <button onClick={() => addHandler("INCREASE", product)}>
                      +
                    </button>
                  </>
                )}
                {product.selectCount > 1 && (
                  <>
                    <button onClick={() => addHandler("DEACREASE", product)}>
                      -
                    </button>
                    {<span>{product.selectCount}</span>}
                    <button onClick={() => addHandler("INCREASE", product)}>
                      +
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Checkout;
