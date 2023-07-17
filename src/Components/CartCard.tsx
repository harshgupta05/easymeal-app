import Image from "next/image";
import styles from "../../src/styles/FoodCard.module.css";
import { PlusIcon, TrashIcon } from "@primer/octicons-react";

interface CartCardProps {
  foodItem: any;
  removeCart: (id: any) => void;
}

const CartCard = (props: CartCardProps) => {
  const { foodItem, removeCart } = props;
  return (
    <div className={styles.container}>
      <Image src={foodItem?.image} alt="" width="320" height="400" />
      <h1 className={styles.title}>{foodItem?.name}</h1>
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
          onClick={() => removeCart(foodItem?.id)}
        >
          <TrashIcon size={14} className={styles.icon2} />
          <span className={styles.price} style={{ color: "red" }}>
            Remove
          </span>
        </div>
      </div>
      <h3 className={styles.desc}>{foodItem?.description}</h3>
    </div>
  );
};

export default CartCard;
