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
import { useAppSelector } from '../state/hooks/useAppSelector.hook';
import { useAppDispatch } from '../state/hooks/useAppDispatch.hook';
import { getTodos } from '../state/features/todo/thunks/get-todos.thunk';
import { GetTodosRequestType } from '../state/features/todo/enums/get-todos-request-type.enum';

export const ProductsPage = () => {
	const { data, loading, error, isEmpty, addItem } = useGetData<IProduct>('https://fakestoreapi.com/products');

	const { modalVisible, close, open } = useContext(ModalContext);

	const { todos, todosLoading, userTodos, userTodosLoading } = useAppSelector((state) => state.todo);

	const dispatch = useAppDispatch();

	const createProduct = (product: IProduct) => {
		close();

		addItem(product);
	};

	useEffect(() => {
		dispatch(getTodos({ requestType: GetTodosRequestType.GET_USER_TODOS, userId: 1 }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log('TODOS LENGTH: ', todos.length);
		console.log('TODOS LOADING: ', todosLoading);

		console.log('USER TODOS LENGTH: ', userTodos.length);
		console.log('USER TODOS LOADING: ', userTodosLoading);

		console.log('END');
	}, [todos, todosLoading, userTodos, userTodosLoading]);

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
