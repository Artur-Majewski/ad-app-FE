import { FieldError } from 'react-hook-form';
import styles from './Textarea.module.scss';

interface Props {
	name: string;
	validationFunction: Object | null;
	register: any;
	errors: FieldError | undefined;
}

export const Textarea = ({name, register, validationFunction, errors}: Props) => (
	<div className={styles.formFild}>
		<textarea
			name={name}
			placeholder=' '
			{...register(name, { ...validationFunction })}
			className={styles.textarea}
			noValidate
		></textarea>
		<label className={styles.label}>{name}</label>
		{errors && <span className={styles.errorInfo}>{errors.message}</span>}
	</div>
);
