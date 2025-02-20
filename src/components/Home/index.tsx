import { Header } from '../Header'
import styles from './Home.module.css'

export function Home() {
  return (
    <div>
      <Header />
        <div className={styles.homeContainer}>
          <div className={styles.homeContent}>
            <div className="homeActions">
              <h1 className={styles.homeTitle}>
                Faça seu pedido <br/> que entregamos <br/> para você!!!
              </h1>
              <h3 className={styles.homeSubtitle}>
                Escolha o seu pedido e em poucos minutos <br/>
                levaremos na sua porta
              </h3>
              <a href="orders" className={styles.homeButtonOrder}>
                FAZER PEDIDO
              </a>
            </div>
            <div className="homeImage">
              <img src="/images/main.svg" alt="Homem fazendo entrega de moto" />
            </div>
          </div>
        </div>
      </div>
  )
}