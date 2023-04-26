import { createAsyncThunk } from '@reduxjs/toolkit';
import { IBrandsResponse } from '../interfaces/responses/brands.response';

import axios from 'axios';

export const getBrands = createAsyncThunk('brand/getBrands', async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.get<IBrandsResponse>('http://localhost:5002/api/brands');

		return data.brands;
	} catch (error) {
		return rejectWithValue(error);
	}
});
