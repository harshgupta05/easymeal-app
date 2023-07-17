import Image from "next/image";
import styles from "../../src/styles/FoodCard.module.css";
import { BookmarkFillIcon } from "@primer/octicons-react";

interface FavouriteCardProps {
  foodItem: any;
  removeCart: (id: any) => void;
}

const FavouriteCard = (props: FavouriteCardProps) => {
  const { foodItem, removeCart } = props;
  return (
    <div className={styles.container}>
      <Image src={foodItem?.image} alt="" width="320" height="400" />
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
        <div onClick={() => removeCart(foodItem?.id)}>
          <BookmarkFillIcon size={24} />
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
      </div>
      <h3 className={styles.desc}>{foodItem?.description}</h3>
    </div>
  );
};

export default FavouriteCard;
