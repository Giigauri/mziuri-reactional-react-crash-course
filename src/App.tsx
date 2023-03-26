import { useProducts } from './components/product/hooks/use-products.hook';
import { ContentLoading } from './common/components/ContentLoading/ContentLoading';
import { EmptyContent } from './common/components/EmptyContent/EmptyContent';
import { ErrorMessage } from './common/components/ErrorMessage/ErrorMessage';
import { Modal } from './common/components/Modal/Modal';
import { CreateProductForm } from './components/product/CreateProductForm';
import { Product } from './components/product/Product';
import { useContext } from 'react';
import { IProduct } from './components/product/interfaces/product.interface';
import { ModalContext } from './common/components/Modal/ModalContext';

import './app.css';

const App: React.FC = () => {
	const { products, loading, error, isEmpty, addProduct } = useProducts();
	const { modalVisible, close, open } = useContext(ModalContext);

	const createProduct = (product: IProduct) => {
		close();

		addProduct(product);
	};

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading ? <ContentLoading /> : null}
			{error.length ? <ErrorMessage message={error} /> : null}
			{products.length ? products.map((product) => <Product key={product.id} product={product} />) : null}
			{isEmpty ? <EmptyContent /> : null}

			{modalVisible && (
				<Modal title={'Create Product'} close={close}>
					<CreateProductForm createProduct={createProduct} products={products} />
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

export default App;
