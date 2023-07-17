import React, { useEffect, useState } from "react";
import styles from "../styles/FoodList.module.css";
import Layout from "./Layout";
import FoodCard from "./FoodCard";
import data from "../../public/data.json";
import axios from "axios";
import Navbar from "./Navbar";
import useLocalStorage from "../hooks/useLocalStorage";
import { SearchIcon } from "@primer/octicons-react";

interface MenuListProps {}

const MenuList = (props: MenuListProps) => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [filterPrevData, setFilterPrevData] = useState(false);
  const [previousState, setPreviousState] = useState<any[]>([]);
  const [previousSeason, setPreviousSeason] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [filters, setFilters] = useState({
    Lunch: false,
    Dinner: false,
    Breakfast: false,
  });

  const [filterSeason, setFilterSeason] = useState({
    Summer: false,
    Winter: false,
    Spring: false,
  });

  const [selectedSeasonOption, setSelectedSeasonOption] = useState("");

  const [cartItems, setCartItems] = useState([]);

  const [localQueueItems, setLocalQueueItems] = useLocalStorage(
    "localQueueItems",
    {
      cartItems: [],
    }
  );

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

  useEffect(() => {
    console.log(localQueueItems?.cartItems, "UEUR");
    setCartItems(localQueueItems?.cartItems);
  }, [localQueueItems]);

  const addToCart = (id: any) => {
    const finalArr = [...apiData].filter((item) => item.id === id);

    console.log(finalArr, "CICI");
    setLocalQueueItems({
      cartItems: [...localQueueItems?.cartItems, ...finalArr],
    });
  };

  const addToFavourite = (id: any) => {
    const finalArr = [...apiData].filter((item) => item.id === id);

    console.log(finalArr, "CICI");
    setLocalFavouriteItems({
      favouriteItems: [...localFavouriteItems?.favouriteItems, ...finalArr],
    });
  }

  const fetchData = async () => {
    const { data } = await axios.get("data.json");
    setApiData(data?.foods);
    setFilterData(data?.foods);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchText: any) => {
    const term = searchText;
    console.log(term, "STST");
    const results = apiData.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setApiData(results);
    if (term?.length === 0) {
      setApiData(filterData);
    }
  };

  const handleCheckboxChange = (event: any) => {
    const { name, checked, value } = event.target;
    setFilters((prevFilters): any => ({
      [name]: checked,
    }));

    setSelectedOption(value);
    setFilterPrevData(true);
    // console.log(name, checked, value);
  };

  const handleSeasonCheckboxChange = (event: any) => {
    const { name, checked, value } = event.target;
    setFilterSeason((prevFilters): any => ({
      [name]: checked,
    }));

    setSelectedSeasonOption(value);
    setFilterPrevData(true);
    // console.log(name, checked, value);
  };

  const filteredData = filterData.filter((item) => {
    if (item.meal === selectedOption) return true;
    return false;
  });

  const filteredSeasonData = filterData.filter((item) => {
    if (item.season === selectedSeasonOption) return true;
    return false;
  });

  const filteredPrevData = previousState.filter((item) => {
    if (item.meal === selectedOption) return true;
    return false;
  });

  const filteredSeasonPrevData = previousSeason.filter((item) => {
    if (item.season === selectedSeasonOption) return true;
    return false;
  });

  useEffect(() => {
    if (filterPrevData) {
      if (
        (filterSeason.Spring || filterSeason.Summer || filterSeason.Winter) &&
        (filters.Breakfast || filters.Dinner || filters.Lunch)
      ) {
        setApiData(filteredPrevData);
        console.log("444");
      } else if (filters.Breakfast || filters.Dinner || filters.Lunch) {
        setApiData(filteredData);
        setPreviousSeason(filteredData);
      } else if (
        (!filters.Breakfast || !filters.Dinner || !filters.Lunch) &&
        (!filterSeason.Spring || !filterSeason.Summer || !filterSeason.Winter)
      ) {
        setFilterPrevData(false);
        setApiData(filteredSeasonData);
        console.log("333");
      } else if (
        !filters.Breakfast ||
        !filters.Dinner ||
        (!filters.Lunch && !filterSeason.Spring) ||
        !filterSeason.Summer ||
        (!filterSeason.Winter && !filterPrevData)
      ) {
        //     // setFilterPrevData(false);
        setApiData(filterData);
        console.log("222");
      }
    }
  }, [filters]);

  useEffect(() => {
    if (filterPrevData) {
      if (
        (filters.Breakfast || filters.Dinner || filters.Lunch) &&
        (filterSeason.Spring || filterSeason.Summer || filterSeason.Winter)
      ) {
        setApiData(filteredSeasonPrevData);
        console.log("555");
      } else if (
        filterSeason.Spring ||
        filterSeason.Summer ||
        filterSeason.Winter
      ) {
        setApiData(filteredSeasonData);
        setPreviousState(filteredSeasonData);
      } else if (
        !filters.Breakfast ||
        !filters.Dinner ||
        (!filters.Lunch &&
          (!filterSeason.Spring ||
            !filterSeason.Summer ||
            !filterSeason.Winter))
      ) {
        setFilterPrevData(false);
        setApiData(filteredData);
        console.log("777");
      } else if (
        !filters.Breakfast ||
        !filters.Dinner ||
        (!filters.Lunch && !filterSeason.Spring) ||
        !filterSeason.Summer ||
        (!filterSeason.Winter && !filterPrevData)
      ) {
        //     // setFilterPrevData(false);
        setApiData(filterData);
        console.log("222");
      }
    }
  }, [filterSeason]);

  // useEffect(() => {
  //   if (filters.Breakfast || filters.Dinner || filters.Lunch && filterSeason.Spring || filterSeason.Summer || filterSeason.Winter && !filterPrevData) {
  //     // setFilterPrevData(false);
  //     setApiData(filterData);
  //     console.log('222');
  // }
  // }, [filters, filterSeason])

  console.log(
    apiData,
    filterData,
    filters,
    selectedOption,
    filterSeason,
    selectedSeasonOption,
    filterPrevData,
    "ADAD"
  );

  console.log(cartItems, "CARtYUU");

  return (
    <Layout>
      <Navbar
        onSearch={handleSearch}
        cartData={apiData}
        cartLength={cartItems?.length}
      />
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 10,
              width: "30%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "70%"
              }}
            >
              <h2 style={{ margin: 0 }}>Filter Recipes:</h2>
              <h4 style={{ marginTop: 4, textAlign: "center" }}>
                Check Multiples boxes below to narrow recipe search result
              </h4>
            </div>
            <div
              style={{
                margin: 8,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <h3>By Meal:</h3>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                  <input
                    type="checkbox"
                    name="Lunch"
                    value="Lunch"
                    // disabled={selectedOption === "Lunch"}
                    checked={filters.Lunch}
                    onChange={handleCheckboxChange}
                  />
                  Lunch
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                  <input
                    type="checkbox"
                    name="Dinner"
                    // disabled={selectedOption === "Dinner"}
                    value="Dinner"
                    checked={filters.Dinner}
                    onChange={handleCheckboxChange}
                  />
                  Dinner
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                  <input
                    type="checkbox"
                    value="Breakfast"
                    // disabled={selectedOption === "Breakfast"}
                    name="Breakfast"
                    checked={filters.Breakfast}
                    onChange={handleCheckboxChange}
                  />
                  Breakfast
                </label>
              </div>
            </div>
            <div
              style={{
                margin: 8,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <h3>By Season:</h3>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                  <input
                    type="checkbox"
                    name="Summer"
                    value="Summer"
                    // disabled={selectedOption === "Lunch"}
                    checked={filterSeason.Summer}
                    onChange={handleSeasonCheckboxChange}
                  />
                  Summer
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                  <input
                    type="checkbox"
                    name="Winter"
                    // disabled={selectedOption === "Winter"}
                    value="Winter"
                    checked={filterSeason.Winter}
                    onChange={handleSeasonCheckboxChange}
                  />
                  Winter
                </label>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                  <input
                    type="checkbox"
                    value="Spring"
                    // disabled={selectedOption === "Spring"}
                    name="Spring"
                    checked={filterSeason.Spring}
                    onChange={handleSeasonCheckboxChange}
                  />
                  Spring
                </label>
              </div>
            </div>
            <div
              style={{
                margin: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <h3>Search Recipes Titles:</h3>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  placeholder="Enter Keyword..."
                  onChange={(e) => console.log(e.target.value)}
                  type="text"
                  style={{
                    padding: 10,
                    backgroundColor: "#FFFFFF",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "#B1BAC4",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#000000",
                    padding: 8,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SearchIcon size={24} className={styles.icon} />
                </div>
              </div>
            </div>
            {/* <div
              style={{ margin: 8, display: "flex", flexDirection: "column" }}
            >
              <label>
                <input
                  type="checkbox"
                  name="Sweet"
                  value="Sweet"
                  // disabled={selectedOption === "Sweet"}
                  // checked={filters.Sweet}
                  onChange={handleCheckboxChange}
                />
                Sweet
              </label>
            </div> */}
          </div>
          <div className={styles.wrapper}>
            {apiData.map((item) => (
              <FoodCard key={item?.id} foodItem={item} addCart={addToCart} addFavourite={addToFavourite} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MenuList;
