import styles from "./Styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./Contex/CartContex";
import { Link } from "react-router-dom";
function Header() {
  const [state] = useCart();
  return (
    <div className={styles.container}>
      <h2>BotoShop</h2>
      <Link to={"/checkout"}>
        <div className={styles.card}>
          {!!state.productCounter && <span>{state.productCounter}</span>}
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Header;
