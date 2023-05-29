import { ICategory } from '../../state/features/menu/category/interfaces/category.interface';
import { MenuListContainer } from './ListContainer';
import { MenuListHeader } from './ListHeader';

type Props = {
	selectedCategory: ICategory;
};

export const SubCategoriesList: React.FC<Props> = ({ selectedCategory }) => {
	return (
		<MenuListContainer>
			<MenuListHeader title={'Categories'} createHandler={() => {}} />
		</MenuListContainer>
	);
};
