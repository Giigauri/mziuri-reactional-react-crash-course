import { ContentLoading } from '../common/components/ContentLoading/ContentLoading';
import { EmptyContent } from '../common/components/EmptyContent/EmptyContent';
import { ErrorMessage } from '../common/components/ErrorMessage/ErrorMessage';
import { Modal } from '../common/components/Modal/Modal';
import { CreateProductForm } from '../components/product/CreateProductForm';
import { Product } from '../components/product/Product';
import { useContext, useEffect } from 'react';
import { IProduct } from '../components/product/interfaces/product.interface';
import { ModalContext } from '../common/components/Modal/ModalContext';
import { useGetData } from '../common/hooks/useGetData.hook';
import { registration } from '../state/features/auth/thunks/registration.thunk';
import { useAppDispatch } from '../state/hooks/useAppDispatch.hook';
import { login } from '../state/features/auth/thunks/login.thunk';

export const ProductsPage = () => {
	const { data, loading, error, isEmpty, addItem } = useGetData<IProduct>('https://fakestoreapi.com/products');

	const { modalVisible, close, open } = useContext(ModalContext);

	const dispatch = useAppDispatch();

	const createProduct = (product: IProduct) => {
		close();

		addItem(product);
	};

	// useEffect(() => {
	// 	dispatch(
	// 		registration({
	// 			name: 'Davit',
	// 			phone: '555559999',
	// 			website: 'website.com',
	// 			username: 'gigauri112111',
	// 			email: 'test-react111211@gmail.com',
	// 			password: '123456',
	// 		})
	// 	);
	// }, []);

	useEffect(() => {
		dispatch(
			login({
				email: 'gigauri@gmail.com',
				password: '123456789',
			})
		);
	}, []);

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading ? <ContentLoading /> : null}
			{error.length ? <ErrorMessage message={error} /> : null}
			{data.length ? data.map((product) => <Product key={product.id} product={product} />) : null}
			{isEmpty ? <EmptyContent /> : null}

			{modalVisible && (
				<Modal title={'Create Product'} close={close}>
					<CreateProductForm createProduct={createProduct} products={data} />
				</Modal>
			)}

			<button
				className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
				onClick={open}
			>
				+
			</button>
		</div>
	);
};
