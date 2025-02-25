import type { ProductType } from '../@types/types'
import { checkIsSelected } from '../helpers'
import { Product } from '../Product'
import styles from './ProductList.module.css'

type ProoductListProps = {
  products: ProductType[]
  selectedProducts: ProductType[]
  onSelectProduct: (product: ProductType) => void
}

export function ProductList({ products, onSelectProduct, selectedProducts }: ProoductListProps) {
  return (
    <div className={styles.ordersListContainer}>
      <div className={styles.ordersListContent}>
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            onSelectProduct={onSelectProduct}
            isSelected={checkIsSelected(selectedProducts, product)}
          />
        ))}
      </div>
    </div>
  )
}