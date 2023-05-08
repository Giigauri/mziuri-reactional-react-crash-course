import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISubCategoriesResponse } from '../interfaces/responses/sub-categories.response';

import axios from 'axios';

export const getSubCategories = createAsyncThunk('subCategory/getSubCategories', async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.get<ISubCategoriesResponse>('http://localhost:5002/api/menu/sub_categories');

		return data.sub_categories;
	} catch (error) {
		return rejectWithValue(error);
	}
});
