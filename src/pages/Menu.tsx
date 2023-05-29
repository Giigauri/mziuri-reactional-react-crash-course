import { useState } from 'react';
import { ICategory } from '../state/features/menu/category/interfaces/category.interface';
import { CategoriesList } from '../components/menu/CategoriesList';
import { SubCategoriesList } from '../components/menu/SubCategoriesList';

export const MenuPage: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState<ICategory>(null);

	return (
		<div className="menu-page">
			<CategoriesList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

			<SubCategoriesList selectedCategory={selectedCategory} />
		</div>
	);
};
