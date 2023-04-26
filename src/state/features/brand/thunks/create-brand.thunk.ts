import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateBrandDTO } from '../interfaces/dtos/create-brand.dto';
import { IAuthInitialState } from '../../auth/auth.slice';
import { IBrandResponse } from '../interfaces/responses/brand.response';

import axios from 'axios';

export const createBrand = createAsyncThunk(
	'brand/createBrand',
	async (DTO: ICreateBrandDTO, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState() as { auth: IAuthInitialState };

			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${auth.accessToken}`,
				},
			};

			const request_body = JSON.stringify(DTO);

			const { data } = await axios.post<IBrandResponse>('http://localhost:5002/api/brands', request_body, config);

			return data.brand;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
