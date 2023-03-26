import { createContext, useState } from 'react';

interface IModalContext {
	modalVisible: boolean;
	open: () => void;
	close: () => void;
}

export const ModalContext = createContext<IModalContext>({
	modalVisible: false,
	open: () => {},
	close: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const open = () => setModalVisible(true);

	const close = () => setModalVisible(false);

	return <ModalContext.Provider value={{ modalVisible, open, close }}>{children}</ModalContext.Provider>;
};
