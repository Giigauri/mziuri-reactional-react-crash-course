import { ICategoryResponse } from '../interfaces/responses/category.response';

import axios from 'axios';

export const getCategory = async (id: string) => {
	const { data } = await axios.get<ICategoryResponse>(`http://localhost:5002/api/menu/categories/${id}`);

	return data.category;
};
