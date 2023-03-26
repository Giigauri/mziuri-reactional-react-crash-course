import { useEffect, useState } from 'react';
import { IProduct } from '../interfaces/product.interface';
import { AxiosError } from 'axios';
import { productsDummyData } from '../data/products-dummy.data';

export const useProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [isEmpty, setIsEmpty] = useState<boolean>(false);

	const addProduct = (product: IProduct) => {
		setProducts((prevProducts) => [...prevProducts, product]);
	};

	async function fetchProducts() {
		try {
			setLoading(true);

			// const products_response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');

			// products_response.data.length ? setProducts(products_response.data) : setIsEmpty(true);

			productsDummyData.length ? setProducts(productsDummyData) : setIsEmpty(true);

			setLoading(false);
		} catch (error: unknown) {
			const structured_error = error as AxiosError;

			setError(structured_error.message);

			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return { products, loading, error, isEmpty, addProduct };
};
