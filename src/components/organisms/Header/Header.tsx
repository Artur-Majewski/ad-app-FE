import { useState } from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  const [isFocus, setIsFocus] = useState(false);
  const handleIsFocus = () => setIsFocus(prev => !prev)

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>TBHA</h1>
			<form className={styles.searchForm}>
				<label htmlFor=''></label>
				<input
					type='search'
					placeholder='Search...'
          onFocus={handleIsFocus}
          className={styles.searchInput}
				/>
				<button className={styles.searchBtn} disabled={isFocus ? true : false}>Go</button>
			</form>
			<button className={styles.addBtn}>Add new ad</button>
		</header>
	);
};
