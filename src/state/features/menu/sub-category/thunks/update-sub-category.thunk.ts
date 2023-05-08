import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUpdateSubCategoryDTO } from '../interfaces/dtos/update-sub-category.dto';
import { IAuthInitialState } from '../../../auth/auth.slice';
import { ISubCategoryResponse } from '../interfaces/responses/sub-category.response';

import axios from 'axios';

export const updateSubCategory = createAsyncThunk(
	'subCategory/updateSubCategory',
	async ({ id, DTO }: { id: string; DTO: Partial<IUpdateSubCategoryDTO> }, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState() as { auth: IAuthInitialState };

			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${auth.accessToken}`,
				},
			};

			const request_body = JSON.stringify(DTO);

			const { data } = await axios.put<ISubCategoryResponse>(
				`http://localhost:5002/api/menu/sub_categories/${id}`,
				request_body,
				config
			);

			return data.sub_category;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
