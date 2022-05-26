import { useForm } from 'react-hook-form';
import styles from './SearchForm.module.scss';

interface SerachInterface {
	searchTerm: string | undefined;
}

export const SearchForm = () => {
	const { register, handleSubmit } = useForm<SerachInterface>();
	const onSubmit = handleSubmit((data) => console.log(data));
  
	return (
		<form onSubmit={onSubmit} className={styles.searchForm} autoComplete='off'>
			<input
				id='searchTerm'
				type='search'
				placeholder='Search...'
				{...register('searchTerm')}
				className={styles.searchInput}
			/>
			<button className={styles.searchBtn}>Go</button>
		</form>
	);
};
