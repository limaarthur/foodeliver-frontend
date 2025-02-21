import styles from './Product.module.css'

export function Product() {
  return (
    <div className={styles.productContainer}>
      <h3 className={styles.productTitle}>
        Pizza calabresa
      </h3>
      <img 
        className={styles.productImage}
        src="/images/pizza.svg" 
        alt="Imagem de uma pizza" 
      />
      <h3 className={styles.productPrice}>
        R$ 35,90
      </h3>
      <div className={styles.producDescription}>
        <h3>Descrição</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eum facilis accusamus similique molestiae distinctio, ea cupiditate obcaecati quidem!
        </p>
      </div>
    </div>
  )
}