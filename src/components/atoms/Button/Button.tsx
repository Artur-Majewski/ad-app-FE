import { NavLink } from 'react-router-dom';
import styles from './Button.module.scss';

enum sizeStyleName {
	'small',
	'medium',
	'big',
}

interface Props {
	name: string;
	type?: 'button' | 'submit' | 'reset';
	to?: string;
	size?: 'small' | 'medium' | 'big';
}

const sizeStyle = [
	{ padding: '0 1rem', fontSize: '1rem' },
	{ padding: '0.75rem 1rem' },
	{ padding: '1rem' },
];

export const Button = ({
	name,
	type = 'button',
	to,
	size = 'medium',
}: Props) => {
	const num = sizeStyleName[size];

	return to ? (
		<NavLink className={styles.addBtn} to={to} style={sizeStyle[num]}>
			{name}
		</NavLink>
	) : (
		<button type={type} className={styles.addBtn}>
			{name}
		</button>
	);
};
