import { Header } from "../../Header";
import { StepsHeader } from "../StepsHeader";
import { Product } from "../Product";

import styles from './ListOrders.module.css'

export function ListOrders() {
  return (
    <div>
      <Header />
      <StepsHeader />
      <div className={styles.ordersListContainer}>
        <div className={styles.ordersListContent}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  )
}