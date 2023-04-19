import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './features/todo/todo.slice';
import { authReducer } from './features/auth/auth.slice';

import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		todo: todoReducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});
