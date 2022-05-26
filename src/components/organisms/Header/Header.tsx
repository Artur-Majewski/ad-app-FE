import { SearchForm } from '../../molecules/SearchForm/SearchForm';
import { Button } from '../../atoms/Button/Button';
import styles from './Header.module.scss';


export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>TBHA</h1>
			<SearchForm />
			<Button name='Add new ad' />
		</header>
	);
};
