import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <a href='home' className={styles.logo}>fooddeliver</a>
    </header>
  )
}