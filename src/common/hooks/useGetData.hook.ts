import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export const useGetData = <T>(apiURL: string) => {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [isEmpty, setIsEmpty] = useState<boolean>(false);

	const addItem = (item: T) => {
		setData((prevData) => [...prevData, item]);
	};

	async function fetchData() {
		try {
			setLoading(true);

			const products_response = await axios.get<T[]>(apiURL);

			products_response.data.length ? setData(products_response.data) : setIsEmpty(true);

			setLoading(false);
		} catch (error: unknown) {
			const structured_error = error as AxiosError;

			setError(structured_error.message);

			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, loading, error, isEmpty, addItem };
};
