import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/Button/Button';
import { AdFormEntity } from 'types';
import { Input } from '../../atoms/Input/Input';
import { Textarea } from '../../atoms/Textarea/Textarea';
import styles from './AddForm.module.scss';
import { Title } from '../../atoms/Title/Title';
import { getGeoCode } from '../../../utils/goecoding';

export const AddForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AdFormEntity>();

	const onSubmit = handleSubmit((data) => {
		(async () => {
			const { latitude, longitude } = await getGeoCode(data.address);
			console.log(latitude, longitude);

			const res = await fetch('http://localhost:3001/ad', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...data,
					latitude,
					longitude,
				}),
			});
			const resData = await res.json()

			console.log(resData);
		})();
	});

	const nameValidate = {
		required: 'Name is required',
		maxLength: {
			value: 100,
			message: 'The name must not be longer than 200 characters',
		},
	};

	const descriptionValidate = {
		maxLength: {
			value: 1000,
			message: 'The description must not be longer than 1000 characters',
		},
	};

	const urlValidate = {
		maxLength: {
			value: 200,
			message: 'The url must not be longer than 200 characters',
		},
	};

	const priceValidate = {
		min: {
			value: 0,
			message: 'The price must not be less than 0 PLN',
		},
		max: {
			value: 9999999,
			message: 'The price must not be more than 9 999 999 PLN',
		},
	};

	const addressValidate = {
		required: 'Address is required',
	};

	return (
		<section className={styles.formWrapper}>
			<Title name='Add new ad' />
			<form className={styles.form} onSubmit={onSubmit} autoComplete='off'>
				<Input
					type='text'
					name='name'
					register={register}
					validationFunction={nameValidate}
					errors={errors.name}
				/>
				<Input
					type='text'
					name='url'
					register={register}
					validationFunction={urlValidate}
					errors={errors.url}
				/>
				<Input
					type='number'
					name='price'
					register={register}
					validationFunction={priceValidate}
					errors={errors.price}
				/>
				<Input
					type='text'
					name='address'
					register={register}
					validationFunction={addressValidate}
					errors={errors.address}
				/>

				<Textarea
					name='description'
					register={register}
					validationFunction={descriptionValidate}
					errors={errors.description}
				/>
				<Button type='submit' name='Add' size='medium' />
			</form>
		</section>
	);
};
