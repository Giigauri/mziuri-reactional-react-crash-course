import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUpdateCategoryDTO } from '../interfaces/dtos/update-category.dto';
import { IAuthInitialState } from '../../../auth/auth.slice';
import { ICategoryResponse } from '../interfaces/responses/category.response';

import axios from 'axios';

export const updateCategory = createAsyncThunk(
	'category/updateCategory',
	async ({ id, DTO }: { id: string; DTO: Partial<IUpdateCategoryDTO> }, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState() as { auth: IAuthInitialState };

			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${auth.accessToken}`,
				},
			};

			const request_body = JSON.stringify(DTO);

			const { data } = await axios.put<ICategoryResponse>(
				`http://localhost:5002/api/menu/categories/${id}`,
				request_body,
				config
			);

			return data.category;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
