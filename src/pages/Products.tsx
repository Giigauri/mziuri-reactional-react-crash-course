import { ContentLoading } from '../common/components/ContentLoading/ContentLoading';
import { EmptyContent } from '../common/components/EmptyContent/EmptyContent';
import { ErrorMessage } from '../common/components/ErrorMessage/ErrorMessage';
import { Modal } from '../common/components/Modal/Modal';
import { CreateProductForm } from '../components/product/CreateProductForm';
import { Product } from '../components/product/Product';
import { useContext } from 'react';
import { IProduct } from '../components/product/interfaces/product.interface';
import { ModalContext } from '../common/components/Modal/ModalContext';
import { useGetData } from '../common/hooks/useGetData.hook';
import { useAppSelector } from '../state/hooks/useAppSelector.hook';
import { useAppDispatch } from '../state/hooks/useAppDispatch.hook';
import { decrement, increment, incrementByAmount } from '../state/slices/counter.slice';

export const ProductsPage = () => {
	const { data, loading, error, isEmpty, addItem } = useGetData<IProduct>('https://fakestoreapi.com/products');

	const { value } = useAppSelector((state) => state.counter);

	const { modalVisible, close, open } = useContext(ModalContext);

	const dispatch = useAppDispatch();

	const createProduct = (product: IProduct) => {
		close();

		addItem(product);
	};

	const incrementValue = () => {
		dispatch(increment());
	};

	const decrementValue = () => {
		dispatch(decrement());
	};

	const incrementValueByAmount = () => {
		dispatch(incrementByAmount(25));
	};

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			<button onClick={incrementValue}>INCREMENT</button>
			<h1 style={{ fontSize: 24, fontWeight: 'bold' }}>{value}</h1>
			<button onClick={decrementValue}>DECREMENT</button>
			<button onClick={incrementValueByAmount}> INCREMENT BY AMOUNT</button>

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
