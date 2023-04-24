import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGetMeResponse } from '../interfaces/responses/get-me.response';

import axios from 'axios';

export const getMe = createAsyncThunk('user/getMe', async (accessToken: string, { rejectWithValue, getState }) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${accessToken}`,
			},
		};

		const { data } = await axios.get<IGetMeResponse>('http://localhost:5002/api/users/me', config);

		return data.user;
	} catch (error) {
		return rejectWithValue(error);
	}
});
