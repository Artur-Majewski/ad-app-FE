import { useEffect, useState } from 'react';
import { AdEntity } from '../../../../../advertisement-service-back/types/ad';
import styles from './SingleAd.module.scss';

interface Props {
	id: string;
}

export const SingleAd = (props: Props) => {
	const [ad, setAd] = useState<AdEntity | null>(null);

	useEffect(() => {
		(async () => {
			const res = await fetch(`http://localhost:3001/ad/${props.id}`);
			const data = await res.json();
			setAd(data);
		})();
	}, [props.id]);

	if (ad === null) {
		return <span>Loading...</span>;
	}

	return (
		<div className={styles.adWrapper}>
			<h2 className={styles.adTitle}>{ad.name}</h2>
			{ad.price ? <p className={styles.adPrice}>Price: {ad.price} PLN</p> : null}
			<p className={styles.adAddress}>Address: <br/>{ad.address}</p>
      {/* <p className={styles.adDescription}>Description: <br/>{ad.description}</p> */}
			<a href={ad.url} className={styles.adLink} target='_blank' rel='noreferrer'>
				Open
			</a>
		</div>
	);
};
