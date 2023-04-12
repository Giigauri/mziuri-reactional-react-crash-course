import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './features/todo/todo.slice';

export const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
});
