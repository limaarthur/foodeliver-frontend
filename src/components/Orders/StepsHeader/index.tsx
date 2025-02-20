import styles from './StepsHeader.module.css'

export function StepsHeader() {
  return (
    <header className={styles.ordersStepsContainer}>
      <div className={styles.ordersStepsContent}>
        <h1 className={styles.stepsTitle}>
          SIGA AS <br/> ETAPAS
        </h1>
        <ul className={styles.stepsItems}>
          <li>
            <span className={styles.stepsNumber}>1</span>
            Selecione os produtos e localização.
          </li>
          <li>
            <span className={styles.stepsNumber}>2</span>
            Depois clique em <strong>"Enviar pedido"</strong>
          </li>
        </ul>
      </div>
    </header>
  )
}