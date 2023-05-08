import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth/auth.slice';
import { userReducer } from './features/user/user.slice';
import { brandReducer } from './features/brand/brand.slice';
import { categoryReducer } from './features/menu/category/category.slice';
import { subCategoryReducer } from './features/menu/sub-category/sub-category.slice';

import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		brand: brandReducer,
		category: categoryReducer,
		subCategory: subCategoryReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});
