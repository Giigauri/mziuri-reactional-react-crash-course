import { createSlice } from '@reduxjs/toolkit';
import { ISubCategory } from './interfaces/sub-category.interface';
import { getSubCategories } from './thunks/get-sub-categories.thunk';
import { createSubCategory } from './thunks/create-sub-category.thunk';
import { deleteSubCategory } from './thunks/delete-sub-category.thunk';
import { updateSubCategory } from './thunks/update-sub-category.thunk';
import { deleteCategory } from '../category/thunks/delete-category.thunk';

interface ISubCategoryInitialState {
	subCategories: ISubCategory[];
	loadingForSubCategories: boolean;
	loadingForCreateSubCategory: boolean;
	loadingForUpdateSubCategory: boolean;
	loadingForDeleteSubCategory: boolean;
}

const initialState: ISubCategoryInitialState = {
	subCategories: [],
	loadingForSubCategories: false,
	loadingForCreateSubCategory: false,
	loadingForUpdateSubCategory: false,
	loadingForDeleteSubCategory: false,
};

export const subCategorySlice = createSlice({
	name: 'subCategory',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getSubCategories.fulfilled, (state, action) => {
			state.subCategories = action.payload;
			state.loadingForSubCategories = false;
		});
		builder.addCase(getSubCategories.pending, (state) => {
			state.loadingForSubCategories = true;
		});
		builder.addCase(getSubCategories.rejected, (state) => {
			state.loadingForSubCategories = false;
		});

		builder.addCase(createSubCategory.fulfilled, (state, action) => {
			state.subCategories.unshift(action.payload);
			state.loadingForCreateSubCategory = false;
		});
		builder.addCase(createSubCategory.pending, (state) => {
			state.loadingForCreateSubCategory = true;
		});
		builder.addCase(createSubCategory.rejected, (state) => {
			state.loadingForCreateSubCategory = false;
		});

		builder.addCase(updateSubCategory.fulfilled, (state, action) => {
			const sub_category_index = state.subCategories.findIndex(
				(sub_category) => String(sub_category._id) === String(action.payload._id)
			);

			if (sub_category_index > -1) {
				state.subCategories[sub_category_index] = action.payload;
			}

			state.loadingForUpdateSubCategory = false;
		});
		builder.addCase(updateSubCategory.pending, (state) => {
			state.loadingForUpdateSubCategory = true;
		});
		builder.addCase(updateSubCategory.rejected, (state) => {
			state.loadingForUpdateSubCategory = false;
		});

		builder.addCase(deleteSubCategory.fulfilled, (state, action) => {
			state.subCategories = state.subCategories.filter(
				(sub_category) => String(sub_category._id) !== String(action.meta.arg)
			);

			state.loadingForDeleteSubCategory = false;
		});
		builder.addCase(deleteSubCategory.pending, (state) => {
			state.loadingForDeleteSubCategory = true;
		});
		builder.addCase(deleteSubCategory.rejected, (state) => {
			state.loadingForDeleteSubCategory = false;
		});

		builder.addCase(deleteCategory.pending, (state, action) => {
			state.subCategories = state.subCategories.filter(
				(sub_category) => String(sub_category.parent_category) !== String(action.meta.arg)
			);
		});
	},
});

export const subCategoryReducer = subCategorySlice.reducer;
