import { useEffect, useState } from 'react';
import { ErrorMessage } from '../../common/components/ErrorMessage/ErrorMessage';
import { IProduct } from './interfaces/product.interface';

type CreateProductFormProps = {
	createProduct: (product: IProduct) => void;
	products: IProduct[];
};

export const CreateProductForm: React.FC<CreateProductFormProps> = ({ createProduct, products }) => {
	const [title, setTitle] = useState<string>('');
	const [error, setError] = useState<string | null>(null);

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		const new_product: IProduct = {
			id: products.length + 1,
			title: title,
			price: 109.95,
			description:
				'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
			category: "men's clothing",
			image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			rating: { rate: 3.9, count: 120 },
		};

		createProduct(new_product);
	};

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	useEffect(() => {
		title.trim().length === 0 ? setError('Please enter valid product title') : setError(null);
	}, [title]);

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product title..."
				value={title}
				onChange={titleChangeHandler}
			/>

			{error ? <ErrorMessage message={error} /> : null}

			<button
				type="submit"
				disabled={error ? true : false}
				className="py-2 px-4 border bg-yellow-400 hover:bg-blue-400 hover:text-white"
			>
				Create
			</button>
		</form>
	);
};
