import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginResponse } from '../interfaces/responses/login.response';
import { ILoginDTO } from '../interfaces/dtos/login.dto';

import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (DTO: ILoginDTO, { rejectWithValue }) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const request_body = JSON.stringify(DTO);

		const { data } = await axios.post<ILoginResponse>('http://localhost:5001/api/auth/login', request_body, config);

		return data.access_token;
	} catch (error) {
		return rejectWithValue(error);
	}
});
