import { Link } from 'react-router-dom'
import styles from './PageTitle.module.scss'

interface Props {
  name: string;
}

export const PageTitle = ({name}: Props) => (
  <Link to='/'><h1 className={styles.title}>{name}</h1></Link>
)