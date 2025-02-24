import styles from './Product.module.css'
import type { ProductType } from '../@types/types'

type ProductProps = {
  product: ProductType
}

export function Product({ product }: ProductProps) {
  return (
    <div className={styles.productContainer}>
      <h3 className={styles.productTitle}>
        {product.name}
      </h3>
      <img 
        className={styles.productImage}
        src={product.imageUri}
        alt={product.name} 
      />
      <h3 className={styles.productPrice}>
        R$ {product.price}
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