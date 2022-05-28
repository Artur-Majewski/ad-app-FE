import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux-toolkit/store';
import { getGeoCode } from '../../../utils/goecoding';
import { SignleAdElement } from 'types';
import { AdListElement } from '../../molecules/AdListElement/AdListElement';
import styles from './ListOfLocalAds.module.scss';

export const ListOfLocalAds = () => {
	const { name } = useSelector((store: RootState) => store.search);
	const [ads, setAds] = useState<SignleAdElement[] | []>([]);
	const [isAtive, setIsActive] = useState(false);
	const handleActivateList = () => {
		setIsActive((prev) => !prev);
	};

	useEffect(() => {
		(async () => {
			if (name) {
				const { latitude, longitude } = await getGeoCode(name);
				const res = await fetch(
					`http://localhost:3001/ad/search-list-of-local-ad/${latitude}/${longitude}`
				);
				const adsData = await res.json();
				setAds(adsData);
			} else {
				console.log('Wybierz jakieś miasto');
			}
		})();
	}, [name]);

	return (
		<>
			<section
				className={`${styles.adsListWrapper} ${
					isAtive
						? styles.adsListWrapper__enable
						: styles.adsListWrapper__disable
				} `}
			>
				{ads.map(({ id, name, address, price, description, url }) => (
					<AdListElement
						key={id}
						id={id}
						name={name}
						price={price}
						address={address}
						description={description}
						url={url}
					/>
				))}
			</section>
			<button
				className={`${ styles.adsListButton } ${ isAtive ? styles.adsListButton__enable : styles.adsListButton__disable }`}
				onClick={handleActivateList}
			>
				X
			</button>
		</>
	);
};
