import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthInitialState } from '../../../auth/auth.slice';
import { IRequestsBaseResponse } from '../../../../../common/interfaces/requests-base-response.interface';

import axios from 'axios';

export const deleteCategory = createAsyncThunk(
	'category/deleteCategory',
	async (id: string, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState() as { auth: IAuthInitialState };

			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${auth.accessToken}`,
				},
			};

			const { data } = await axios.delete<IRequestsBaseResponse>(
				`http://localhost:5002/api/menu/categories/${id}`,
				config
			);

			return data.success;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
