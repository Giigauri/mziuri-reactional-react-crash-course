import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthInitialState } from '../../auth/auth.slice';
import { IBrandResponse } from '../interfaces/responses/brand.response';
import { IUpdateBrandDTO } from '../interfaces/dtos/update-brand.dto';

import axios from 'axios';

export const updateBrand = createAsyncThunk(
	'brand/updateBrand',
	async ({ id, DTO }: { id: string; DTO: Partial<IUpdateBrandDTO> }, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState() as { auth: IAuthInitialState };

			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${auth.accessToken}`,
				},
			};

			const request_body = JSON.stringify(DTO);

			const { data } = await axios.put<IBrandResponse>(
				`http://localhost:5002/api/brands/${id}`,
				request_body,
				config
			);

			return data.brand;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
