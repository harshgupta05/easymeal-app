import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import FoodOrderingRouteUtils from "../utils/routeUtils";
import { useRouter } from "next/navigation";
import {
  BookmarkIcon,
  BriefcaseIcon,
  SearchIcon,
} from "@primer/octicons-react";

interface NavbarProps {
  onSearch?: (text: any) => void;
  cartData?: any;
  cartLength?: any;
}

const Navbar = (props: NavbarProps) => {
  const { onSearch, cartData, cartLength } = props;
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.upperHeader}>
        <ul className={styles.listFirst}>
          <li className={styles.listItem}>Forum</li>
          <li className={styles.listItem}>Categories</li>
          <li className={styles.listItem}>Books</li>
          {/* <Image src="/img/logo.png" alt="" width="160px" height="69px" /> */}
          <li className={styles.listItem}>Popular</li>
        </ul>
        <ul className={styles.listSecond}>
          <li
            className={styles.listItem}
            onClick={() =>
              router.push(FoodOrderingRouteUtils.goToRegisterPage())
            }
          >
            Register
          </li>
          <li
            className={styles.listItem}
            style={{ marginRight: 30 }}
            onClick={() => router.push(FoodOrderingRouteUtils.goToLoginPage())}
          >
            Login
          </li>
        </ul>
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
        <div>
          <h1 style={{ fontWeight: 400 }}>EASYMEALS</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearch && onSearch(e.target.value);
            }}
            type="text"
            style={{
              padding: 20,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#B1BAC4",
            }}
          />
          <div
            style={{
              backgroundColor: "#000000",
              padding: 12,
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon size={24} className={styles.icon} />
          </div>
        </div>
        <div>
          <ul className={styles.list}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BookmarkIcon size={16} />
              <li
                className={styles.listItem}
                style={{ marginLeft: 2 }}
                onClick={() =>
                  router.push(FoodOrderingRouteUtils.goToFavouritePage())
                }
              >
                Favourite
              </li>
            </div>
            <div
              style={{
                marginLeft: 30,
                borderStyle: "solid",
                borderColor: "#ECEFF1",
                height: 40,
                borderWidth: 1,
                marginRight: 30,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BriefcaseIcon size={16} />
              <li
                className={styles.listItem}
                style={{ marginLeft: 4 }}
                onClick={() =>
                  router.push(FoodOrderingRouteUtils.goToCartPage())
                }
              >
                Cart ({cartLength})
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div
        style={{
          borderStyle: "solid",
          borderColor: "#ECEFF1",
          width: "100%",
          borderWidth: 1,
        }}
      />
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li
              className={styles.listItem}
              onClick={() =>
                router.push(FoodOrderingRouteUtils.getMenuListPageRoute())
              }
            >
              HOME
            </li>
            <li className={styles.listItem}>CATEGORIES</li>
            <li className={styles.listItem}>RECIPES</li>
            {/* <Image src="/img/logo.png" alt="" width="160px" height="69px" /> */}
            <li className={styles.listItem}>CONTACT</li>
            <li className={styles.listItem}>ABOUT</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          borderStyle: "solid",
          borderColor: "#ECEFF1",
          width: "100%",
          borderWidth: 1,
        }}
      />
    </div>
  );
};

export default Navbar;
