import { MenuActionButton } from './ActionButton';
import { MenuActionButtonType } from './enums/action-button-type.enum';

type Props = {
	title: string;
	editHandler: () => void;
	deleteHandler: () => void;
};

export const MenuListItem: React.FC<Props> = ({ title, editHandler, deleteHandler }) => {
	return (
		<div className="menu-list-item">
			<h3>{title}</h3>

			<div className="menu-list-item-actions-container">
				<MenuActionButton onClick={editHandler} actionType={MenuActionButtonType.EDIT} />
				<MenuActionButton onClick={deleteHandler} actionType={MenuActionButtonType.DELETE} />
			</div>
		</div>
	);
};
