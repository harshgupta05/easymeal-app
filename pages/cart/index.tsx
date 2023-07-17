import FoodCard from "../../src/Components/FoodCard";
import Layout from "../../src/Components/Layout";
import styles from "../../src/styles/FoodList.module.css";
import { useRouter } from "next/router";
import useLocalStorage from "../../src/hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import CartCard from "../../src/Components/CartCard";
import Navbar from "../../src/Components/Navbar";

interface CartProps {}

const Cart = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);

  const [localQueueItems, setLocalQueueItems] = useLocalStorage(
    "localQueueItems",
    {
      cartItems: [],
    }
  );

  useEffect(() => {
    console.log(localQueueItems?.cartItems, 'UEUR');
    setCartItems([...localQueueItems?.cartItems]);
  }, [localQueueItems]);

  const removeCartItem = (id: any) => {
    console.log(id);
    const finalArr = [...cartItems].filter(
      (item) => item.id !== id
    );
    setCartItems([...finalArr]);
    console.log(finalArr, "CICI");
    setLocalQueueItems({
      cartItems: [...finalArr],
    });
  };

  console.log(cartItems, 'CartItems');

  return (
    <Layout>
      <Navbar />
      <div className={styles.container}>
        <div style={{
          marginLeft: 80 ,
          width: "100%",
          display: "flex",
          alignItems: "flex-start"
        }}>
        <h1>Cart Items:</h1>
        </div>
        <div className={styles.wrapper}>
          {cartItems.length > 0 ? cartItems?.map((item: any) => (
            <CartCard key={item?.id} foodItem={item} removeCart={removeCartItem} />
          )) : <h2 style={{color: "#484F58"}}>Cart is Empty</h2>}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
