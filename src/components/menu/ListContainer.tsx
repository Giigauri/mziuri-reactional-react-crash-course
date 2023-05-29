type Props = {
	children: React.ReactNode;
};

export const MenuListContainer: React.FC<Props> = ({ children }) => {
	return <div className="menu-list-container">{children}</div>;
};
