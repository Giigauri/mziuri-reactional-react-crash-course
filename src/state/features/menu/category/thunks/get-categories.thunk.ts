import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICategoriesResponse } from '../interfaces/responses/categories.response';

import axios from 'axios';

export const getCategories = createAsyncThunk('category/getCategories', async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.get<ICategoriesResponse>('http://localhost:5002/api/menu/categories');

		return data.categories;
	} catch (error) {
		return rejectWithValue(error);
	}
});
