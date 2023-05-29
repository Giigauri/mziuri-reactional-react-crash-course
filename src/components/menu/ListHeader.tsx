import { MenuActionButton } from './ActionButton';
import { MenuActionButtonType } from './enums/action-button-type.enum';

type Props = {
	title: string;
	createHandler: () => void;
};

export const MenuListHeader: React.FC<Props> = ({ title, createHandler }) => {
	return (
		<div className="menu-list-header">
			<h3>{title}</h3>

			<button onClick={createHandler}>Create</button>

			<MenuActionButton onClick={createHandler} actionType={MenuActionButtonType.CREATE} />
		</div>
	);
};
