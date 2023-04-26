import { IBrandResponse } from '../interfaces/responses/brand.response';

import axios from 'axios';

export const getBrand = async (id: string) => {
	const { data } = await axios.get<IBrandResponse>(`http://localhost:5002/api/brands/${id}`);

	return data.brand;
};
