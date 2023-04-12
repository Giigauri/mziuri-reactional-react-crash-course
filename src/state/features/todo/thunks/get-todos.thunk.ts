import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodo } from '../interfaces/todo.interface';
import { GetTodosRequestType } from '../enums/get-todos-request-type.enum';

import axios from 'axios';

export const getTodos = createAsyncThunk(
	'todo/getTodos',
	async ({ requestType, userId }: { requestType: GetTodosRequestType; userId: number }, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<ITodo[]>(
				requestType === GetTodosRequestType.GET_USER_TODOS && userId
					? `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
					: 'https://jsonplaceholder.typicode.com/todos'
			);

			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
