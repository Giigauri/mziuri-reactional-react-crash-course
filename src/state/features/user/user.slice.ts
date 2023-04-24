import { createSlice } from '@reduxjs/toolkit';
import { getMe } from './thunks/get-me.thunk';
import { IUser } from './interfaces/user.interface';
import { logOut } from '../auth/auth.slice';

interface IUserInitialState {
	currentUser: IUser;
	loadingForCurrentUser: boolean;
}

const initialState: IUserInitialState = {
	currentUser: null,
	loadingForCurrentUser: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(logOut, () => initialState);

		builder.addCase(getMe.fulfilled, (state, action) => {
			state.currentUser = action.payload;
			state.loadingForCurrentUser = false;
		});
		builder.addCase(getMe.pending, (state) => {
			state.loadingForCurrentUser = true;
		});
		builder.addCase(getMe.rejected, (state) => {
			state.loadingForCurrentUser = false;
		});
	},
});

export const userReducer = userSlice.reducer;
