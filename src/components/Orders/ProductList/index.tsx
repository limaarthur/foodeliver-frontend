import type { ProductType } from '../@types/types'
import { Product } from '../Product'
import styles from './ProductList.module.css'

type ProoductListProps = {
  products: ProductType[]
}

export function ProductList({ products }: ProoductListProps) {
  return (
    <div className={styles.ordersListContainer}>
      <div className={styles.ordersListContent}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}