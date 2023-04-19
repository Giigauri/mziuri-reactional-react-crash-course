import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo } from '../interfaces/todo.interface';

import axios from 'axios';

export const getTodos = createAsyncThunk('todo/getTodos', async (_, { rejectWithValue }) => {
	try {
		const { data } = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');

		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
});
