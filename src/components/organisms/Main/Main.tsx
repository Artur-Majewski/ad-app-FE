import { Map } from '../../molecules/Map/Map'
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <main className={styles.main}>
      <Map />
    </main>
  )
}