import { MenuActionButtonType } from './enums/action-button-type.enum';

type Props = {
	onClick: () => void;
	actionType: MenuActionButtonType;
	disabled?: boolean;
};

export const MenuActionButton: React.FC<Props> = ({ onClick, actionType, disabled = false }) => {
	const icons = {
		DELETE: 'fa-solid fa-trash-can',
		EDIT: 'fa-sharp fa-regular fa-pen-to-square',
		CREATE: 'fa-regular fa-plus',
	};

	return (
		<button disabled={disabled} onClick={onClick}>
			<i className={icons[actionType]} />
		</button>
	);
};
