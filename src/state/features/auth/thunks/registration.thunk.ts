import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRegistrationDTO } from '../interfaces/dtos/registration.dto';
import { IRegistrationResponse } from '../interfaces/responses/registration.response';
import { getMe } from '../../user/thunks/get-me.thunk';

import axios from 'axios';

export const registration = createAsyncThunk(
	'auth/registration',
	async (DTO: IRegistrationDTO, { rejectWithValue, dispatch }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const request_body = JSON.stringify(DTO);

			const { data } = await axios.post<IRegistrationResponse>(
				'http://localhost:5002/api/auth/registration',
				request_body,
				config
			);

			dispatch(getMe(data.access_token));

			return data.access_token;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
