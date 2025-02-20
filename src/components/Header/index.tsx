import { NavLink } from 'react-router'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>fooddeliver</NavLink>
    </header>
  )
}