import styles from './Button.module.scss';

interface Props {
	name: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({name, type='button'}: Props) => {
	return <button type={type} className={styles.addBtn}>{name}</button>;
};
