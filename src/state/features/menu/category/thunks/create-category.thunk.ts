import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateCategoryDTO } from '../interfaces/dtos/create-category.dto';
import { IAuthInitialState } from '../../../auth/auth.slice';
import { ICategoryResponse } from '../interfaces/responses/category.response';

import axios from 'axios';

export const createCategory = createAsyncThunk(
	'category/createCategory',
	async (DTO: ICreateCategoryDTO, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState() as { auth: IAuthInitialState };

			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${auth.accessToken}`,
				},
			};

			const request_body = JSON.stringify(DTO);

			const { data } = await axios.post<ICategoryResponse>(
				'http://localhost:5002/api/menu/categories',
				request_body,
				config
			);

			return data.category;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
