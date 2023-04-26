import { createSlice } from '@reduxjs/toolkit';
import { IBrand } from './interfaces/brand.interface';
import { getBrands } from './thunks/get-brands.thunk';
import { createBrand } from './thunks/create-brand.thunk';
import { updateBrand } from './thunks/update-brand.thunk';
import { deleteBrand } from './thunks/delete-brand.thunk';

interface IBrandInitialState {
	brands: IBrand[];
	loadingForBrands: boolean;
	loadingForCreateBrand: boolean;
	loadingForUpdateBrand: boolean;
	loadingForDeleteBrand: boolean;
}

const initialState: IBrandInitialState = {
	brands: [],
	loadingForBrands: false,
	loadingForCreateBrand: false,
	loadingForUpdateBrand: false,
	loadingForDeleteBrand: false,
};

export const brandSlice = createSlice({
	name: 'brand',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBrands.fulfilled, (state, action) => {
			state.brands = action.payload;
			state.loadingForBrands = false;
		});
		builder.addCase(getBrands.pending, (state) => {
			state.loadingForBrands = true;
		});
		builder.addCase(getBrands.rejected, (state) => {
			state.loadingForBrands = false;
		});

		builder.addCase(createBrand.fulfilled, (state, action) => {
			state.brands.unshift(action.payload);
			state.loadingForCreateBrand = false;
		});
		builder.addCase(createBrand.pending, (state) => {
			state.loadingForCreateBrand = true;
		});
		builder.addCase(createBrand.rejected, (state) => {
			state.loadingForCreateBrand = false;
		});

		builder.addCase(updateBrand.fulfilled, (state, action) => {
			const brand_index = state.brands.findIndex((brand) => String(brand._id) === String(action.payload._id));

			if (brand_index > -1) {
				state.brands[brand_index] = action.payload;
			}

			state.loadingForUpdateBrand = false;
		});
		builder.addCase(updateBrand.pending, (state) => {
			state.loadingForUpdateBrand = true;
		});
		builder.addCase(updateBrand.rejected, (state) => {
			state.loadingForUpdateBrand = false;
		});

		builder.addCase(deleteBrand.fulfilled, (state, action) => {
			state.brands.filter((brand) => String(brand._id) !== String(action.meta.arg));

			state.loadingForDeleteBrand = false;
		});
		builder.addCase(deleteBrand.pending, (state) => {
			state.loadingForDeleteBrand = true;
		});
		builder.addCase(deleteBrand.rejected, (state) => {
			state.loadingForDeleteBrand = false;
		});
	},
});

export const userReducer = brandSlice.reducer;
