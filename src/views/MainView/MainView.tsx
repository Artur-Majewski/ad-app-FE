import { Map } from '../../components/organisms/Map/Map'
import styles from './MainView.module.scss'

export const MainView = () => (
  <main className={styles.mainWrapper}>
    <Map />
  </main>
)