import { Product } from '../Product'
import styles from './ProductList.module.css'

export function ProductList() {
  return (
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
  )
}