import { ISubCategoryResponse } from '../interfaces/responses/sub-category.response';

import axios from 'axios';

export const getCategory = async (id: string) => {
	const { data } = await axios.get<ISubCategoryResponse>(`http://localhost:5002/api/menu/sub_categories/${id}`);

	return data.sub_category;
};
