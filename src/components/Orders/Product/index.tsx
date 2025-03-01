import type { ProductType } from '../@types/types'
import { priceFormatter } from '../../../utils/formatter'

import styles from './Product.module.css'

type ProductProps = {
  product: ProductType
  onSelectProduct: (product: ProductType) => void
  isSelected: boolean
}

export function Product({ product, onSelectProduct, isSelected }: ProductProps) {
  return (
    <div 
      className={`${styles.productContainer} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelectProduct(product)}
    >
      <h3 className={styles.productTitle}>
        {product.name}
      </h3>
      <img 
        className={styles.productImage}
        src={product.imageUri}
        alt={product.name} 
      />
      <h3 className={styles.productPrice}>
        {priceFormatter.format(product.price)}
      </h3>
      <div className={styles.producDescription}>
        <h3>Descrição</h3>
        <p>
          {product.description}
        </p>
      </div>
    </div>
  )
}