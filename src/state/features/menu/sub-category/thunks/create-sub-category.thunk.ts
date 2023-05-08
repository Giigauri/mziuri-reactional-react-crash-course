import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateSubCategoryDTO } from '../interfaces/dtos/create-sub-category.dto';
import { IAuthInitialState } from '../../../auth/auth.slice';
import { ISubCategoryResponse } from '../interfaces/responses/sub-category.response';

import axios from 'axios';

export const createSubCategory = createAsyncThunk(
	'subCategory/createSubCategory',
	async (DTO: ICreateSubCategoryDTO, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState() as { auth: IAuthInitialState };

			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${auth.accessToken}`,
				},
			};

			const request_body = JSON.stringify(DTO);

			const { data } = await axios.post<ISubCategoryResponse>(
				'http://localhost:5002/api/menu/sub_categories',
				request_body,
				config
			);

			return data.sub_category;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
