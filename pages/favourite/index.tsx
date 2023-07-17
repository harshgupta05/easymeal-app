import FoodCard from "../../src/Components/FoodCard";
import Layout from "../../src/Components/Layout";
import styles from "../../src/styles/FoodList.module.css";
import { useRouter } from "next/router";
import useLocalStorage from "../../src/hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import CartCard from "../../src/Components/CartCard";
import Navbar from "../../src/Components/Navbar";
import FavouriteCard from "../../src/Components/FavouriteCard";

interface FavouriteProps {}

const Favourite = (props: FavouriteProps) => {
  const router = useRouter();
  const [favouriteItems, setFavouriteItems] = useState<any[]>([]);

  const [localFavouriteItems, setLocalFavouriteItems] = useLocalStorage(
    "localFavouriteItems",
    {
      favouriteItems: [],
    }
  );

  useEffect(() => {
    console.log(localFavouriteItems?.cartItems, 'FIFI');
    setFavouriteItems([...localFavouriteItems?.favouriteItems]);
  }, [localFavouriteItems]);

  const removeFavouriteItem = (id: any) => {
    console.log(id);
    const finalArr = [...favouriteItems].filter(
      (item) => item.id !== id
    );
    setFavouriteItems([...finalArr]);
    console.log(finalArr, "FIFI");
    setLocalFavouriteItems({
      favouriteItems: [...finalArr],
    });
  };

  console.log(favouriteItems, 'CartItems');

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
        <h1>Favourite Items:</h1>
        </div>
        <div className={styles.wrapper}>
          {favouriteItems.length > 0 ? favouriteItems?.map((item: any) => (
            <FavouriteCard key={item?.id} foodItem={item} removeCart={removeFavouriteItem} />
          )) : <h2 style={{color: "#484F58"}}>Favourite Item is Empty</h2>}
        </div>
      </div>
    </Layout>
  );
};

export default Favourite;
