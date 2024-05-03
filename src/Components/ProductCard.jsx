import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faBasketShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import { shortTitle } from "./Helpers/Helpers";
import { useCart } from "./Contex/CartContex";

function ProductCard({ data }) {
  //-----------State-----------
  const [count, setCount] = useState(0);
  const [state, distpatch] = useCart();

  //-----------Function-----------

  const addHandler = (type) => {
    switch (type) {
      case "ADD":
        setCount((count) => count + 1);
        break;
      case "DELETE":
        setCount(0);
        break;
      case "INCREASE":
        setCount((count) => count + 1);
        break;
      case "DEACREASE":
        setCount((count) => count - 1);
        break;
      default:
        break;
    }
    distpatch({ type, payload: data });
  };
  //------------------------------
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={data.image} alt={data.category} />
      </div>
      <div className={styles.detail}>
        <div className={styles.top}>
          <p>{shortTitle(data.title)}</p>
          <span>{data.price}$</span>
        </div>
        <div className={styles.buttom}>
          <Link to={`/products/${data.id}`} className={styles.detail}>
            <FontAwesomeIcon icon={faQrcode} />
          </Link>

          <div className={styles.addtoCard}>
            {count === 0 && (
              <button onClick={() => addHandler("ADD")}>
                <FontAwesomeIcon icon={faBasketShopping} />
              </button>
            )}
            {count === 1 && (
              <>
                <button onClick={() => addHandler("DELETE")}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                {<span>{count}</span>}
                <button onClick={() => addHandler("INCREASE")}>+</button>
              </>
            )}
            {count > 1 && (
              <>
                <button onClick={() => addHandler("DEACREASE")}>-</button>
                {<span>{count}</span>}
                <button onClick={() => addHandler("INCREASE")}>+</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
