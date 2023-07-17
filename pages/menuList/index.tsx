import MenuList from '../../src/Components/MenuList';
import React from 'react'
import styles from "../../src/styles/FoodList.module.css";

const index = () => {
  return (
    <body className={styles.body}>
      <MenuList />
    </body>
  )
}

export default index;
