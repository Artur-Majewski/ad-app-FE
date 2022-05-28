import { SearchForm } from '../../molecules/SearchForm/SearchForm';
import { Button } from '../../atoms/Button/Button';
import { PageTitle } from '../../atoms/PageTitle/PageTitle';
import styles from './Header.module.scss';


export const Header = () => {
	return (
		<header className={styles.header}>
			<PageTitle name='TBHA'/>
			<SearchForm />
			<Button name='Add new ad' to='/add-form' size='big'/>
		</header>
	);
};
