import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../Services/config";
import styles from "./Styles/Detail.module.css";
function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const productfetch = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res);
      } catch (error) {
        console.log(console.error());
      }
    };
    productfetch();
  }, []);
  const backHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={styles.container}>
      <div>
        <img src={product.image} />
      </div>
      <div>
        <p>{product.description}</p>
        <button onClick={backHandler}>Back</button>
      </div>
    </div>
  );
}

export default Detail;
