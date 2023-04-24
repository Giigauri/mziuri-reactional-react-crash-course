import { createSlice } from '@reduxjs/toolkit';
import { registration } from './thunks/registration.thunk';
import { login } from './thunks/login.thunk';
import { getMe } from '../user/thunks/get-me.thunk';

export interface IAuthInitialState {
	isAuthenticated: boolean;
	accessToken: string;
	loadingForLogin: boolean;
	loadingForRegistration: boolean;
}

const initialState: IAuthInitialState = {
	isAuthenticated: false,
	accessToken: null,
	loadingForLogin: false,
	loadingForRegistration: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut: () => {
			return initialState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registration.fulfilled, (state, action) => {
			state.accessToken = action.payload;
			state.isAuthenticated = true;
			state.loadingForRegistration = false;
		});
		builder.addCase(registration.pending, (state) => {
			state.loadingForRegistration = true;
		});
		builder.addCase(registration.rejected, (state) => {
			state.loadingForRegistration = false;
		});

		builder.addCase(login.fulfilled, (state, action) => {
			state.accessToken = action.payload;
			state.isAuthenticated = true;
			state.loadingForLogin = false;
		});
		builder.addCase(login.pending, (state) => {
			state.loadingForLogin = true;
		});
		builder.addCase(login.rejected, (state) => {
			state.loadingForLogin = false;
		});

		builder.addCase(getMe.rejected, (state) => {
			state.accessToken = null;
			state.isAuthenticated = false;
		});
	},
});

export const { logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
