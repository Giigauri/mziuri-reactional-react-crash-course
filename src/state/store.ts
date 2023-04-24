import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth/auth.slice';
import { userReducer } from './features/user/user.slice';

import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});
