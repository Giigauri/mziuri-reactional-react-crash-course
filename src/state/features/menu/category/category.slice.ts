import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from './interfaces/category.interface';
import { getCategories } from './thunks/get-categories.thunk';
import { createCategory } from './thunks/create-category.thunk';
import { deleteCategory } from './thunks/delete-category.thunk';
import { updateCategory } from './thunks/update-category.thunk';
import { deleteSubCategory } from '../sub-category/thunks/delete-sub-category.thunk';

interface ICategoryInitialState {
	categories: ICategory[];
	loadingForCategories: boolean;
	loadingForCreateCategory: boolean;
	loadingForUpdateCategory: boolean;
	loadingForDeleteCategory: boolean;
}

const initialState: ICategoryInitialState = {
	categories: [],
	loadingForCategories: false,
	loadingForCreateCategory: false,
	loadingForUpdateCategory: false,
	loadingForDeleteCategory: false,
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
			state.loadingForCategories = false;
		});
		builder.addCase(getCategories.pending, (state) => {
			state.loadingForCategories = true;
		});
		builder.addCase(getCategories.rejected, (state) => {
			state.loadingForCategories = false;
		});

		builder.addCase(createCategory.fulfilled, (state, action) => {
			state.categories.unshift(action.payload);
			state.loadingForCreateCategory = false;
		});
		builder.addCase(createCategory.pending, (state) => {
			state.loadingForCreateCategory = true;
		});
		builder.addCase(createCategory.rejected, (state) => {
			state.loadingForCreateCategory = false;
		});

		builder.addCase(updateCategory.fulfilled, (state, action) => {
			const category_index = state.categories.findIndex(
				(category) => String(category._id) === String(action.payload._id)
			);

			if (category_index > -1) {
				state.categories[category_index] = action.payload;
			}

			state.loadingForUpdateCategory = false;
		});
		builder.addCase(updateCategory.pending, (state) => {
			state.loadingForUpdateCategory = true;
		});
		builder.addCase(updateCategory.rejected, (state) => {
			state.loadingForUpdateCategory = false;
		});

		builder.addCase(deleteCategory.fulfilled, (state, action) => {
			state.categories = state.categories.filter((category) => String(category._id) !== String(action.meta.arg));

			state.loadingForDeleteCategory = false;
		});
		builder.addCase(deleteCategory.pending, (state) => {
			state.loadingForDeleteCategory = true;
		});
		builder.addCase(deleteCategory.rejected, (state) => {
			state.loadingForDeleteCategory = false;
		});

		builder.addCase(deleteSubCategory.fulfilled, (state, action) => {
			for (let index = 0; index < state.categories.length; index++) {
				const in_sub_categories = state.categories[index].sub_categories.some(
					(sub_category) => String(sub_category) === String(action.meta.arg)
				);

				if (in_sub_categories) {
					state.categories[index].sub_categories = state.categories[index].sub_categories.filter(
						(sub_category) => String(sub_category) !== action.meta.arg
					);
				}
			}
		});
	},
});

export const categoryReducer = categorySlice.reducer;
