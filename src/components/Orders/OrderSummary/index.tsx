import styles from './OrderSummary.module.css'

export function OrderSummary() {
  return (
    <div className={styles.orderSummaryContainer}>
      <div className={styles.orderSummaryContent}>
        <div>
          <span className={styles.amountSelectedContainer}>
            <strong className={styles.amountSelected}>2</strong>
            PEDIDOS SELECIONADOS
          </span>
          <span className={styles.orderSummaryTotal}>
            <strong className={styles.amountSelected}>R$ 50,00</strong>
            VALOR TOTAL
          </span>
        </div>
        <button className={styles.orderSummaryMakeOrder}>
          FAZER PEDIDO
        </button>
      </div>
    </div>
  )
}