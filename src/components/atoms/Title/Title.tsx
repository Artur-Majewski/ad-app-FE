import styles from './Title.module.scss';

interface Props {
	name: string;
}

export const Title = ({ name }: Props) => <h2 className={styles.title}>{name}</h2>;
