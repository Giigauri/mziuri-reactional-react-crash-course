import { ICategory } from '../../state/features/menu/category/interfaces/category.interface';
import { MenuListContainer } from './ListContainer';
import { MenuListHeader } from './ListHeader';

type Props = {
	selectedCategory: ICategory;
	setSelectedCategory: React.Dispatch<React.SetStateAction<ICategory>>;
};

export const CategoriesList: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<MenuListContainer>
			<MenuListHeader title={'Categories'} createHandler={() => {}} />
		</MenuListContainer>
	);
};
