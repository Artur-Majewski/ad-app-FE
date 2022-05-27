import { FieldError } from 'react-hook-form';
import styles from './Input.module.scss';

interface Props {
	name: string;
	type: 'text' | 'number';
	validationFunction: Object | null;
	register: any;
	errors: FieldError | undefined;
}

export const Input = ({
	name,
	type = 'text',
	validationFunction = null,
	register,
	errors,
}: Props) => {
	return (
		<div className={styles.formFild}>
			<input
				type={type}
				name={name}
				className={styles.input}
				{...register(name, { ...validationFunction })}
				placeholder=' '
				noValidate
				step='0.01'
			/>
			<label className={styles.label}>{name}</label>
			{errors && <span className={styles.errorInfo}>{errors.message}</span>}
		</div>
	);
};
