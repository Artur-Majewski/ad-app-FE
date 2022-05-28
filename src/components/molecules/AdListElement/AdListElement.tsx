import styles from './AdListElement.module.scss';

interface Props {
	id: string;
	name: string;
	price: number;
	address: string;
	description: string;
	url: string;
}

export const AdListElement = ({name, price, address, description, url}: Props) => {
	return (
		<article key={address} className={styles.adWrapper}>
			<h3 className={styles.adWrapper__title}>{name}</h3>
			<p className={styles.adWrapper__price}>
				<b>Price</b>: <br /> {price}
			</p>
			<p className={styles.adWrapper__address}>
				<b>Address</b>: <br /> {address}
			</p>
			<p className={styles.adWrapper__description}>
				<b>Description</b>: <br />
				{description}
			</p>
			<a href={url} className={styles.adWrapper__link} target='_blank' rel='noreferrer'>Open</a>
		</article>
	);
};
