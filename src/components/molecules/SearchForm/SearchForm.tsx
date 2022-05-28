import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setSearchName } from '../../../redux-toolkit/features/search/search-slice';
import styles from './SearchForm.module.scss';

interface SerachInterface {
	searchTerm: string | undefined;
}

export const SearchForm = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm<SerachInterface>({mode: 'onChange'});


	const onSubmit = handleSubmit((data) => {
		const searchValue = data.searchTerm;
			dispatch(setSearchName(searchValue));
	});

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
