import Image from "next/image";
import styles from "../../src/styles/FoodCard.module.css";
import { BookmarkIcon, DiffAddedIcon, PlusIcon } from "@primer/octicons-react";

interface FoodCardProps {
  foodItem: any;
  addCart: (id: any) => void;
  addFavourite: (id: any) => void;
}

const FoodCard = (props: FoodCardProps) => {
  const { foodItem, addCart, addFavourite } = props;
  return (
    <div className={styles.container}>
      <Image src={foodItem?.image} alt="" width="250" height="350" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <h1 className={styles.title}>{foodItem?.name}</h1>
        <div onClick={() => addFavourite(foodItem?.id)}>
        <BookmarkIcon size={16} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <span className={styles.price}>{`$${foodItem?.price}`}</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            backgroundColor: "#F6F8FA",
            padding: 6,
            borderRadius: 6,
          }}
          onClick={() => addCart(foodItem?.id)}
        >
          <PlusIcon size={14} className={styles.icon} />
          <span className={styles.price}>Cart</span>
        </div>
      </div>
      <h3 className={styles.desc}>{foodItem?.description}</h3>
    </div>
  );
};

export default FoodCard;
