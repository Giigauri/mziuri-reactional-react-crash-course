import { useState } from 'react';
import { IProduct } from './interfaces/product.interface';

type ProductProps = {
	product: IProduct;
};

export const Product: React.FC<ProductProps> = ({ product }): JSX.Element => {
	const [detailsVisible, setDetailsVisible] = useState<boolean>(false);

	console.log('render');

	return (
		<div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
			<img src={product.image} className="w-1/6" alt={product.title} />

			<p>{product.title}</p>

			<p className="font-bold">{`${product.price.toFixed(2)}₾`}</p>

			<button
				className={detailsVisible ? 'py-2 px-4 border bg-blue-400' : 'py-2 px-4 border bg-yellow-400'}
				onClick={() => setDetailsVisible(!detailsVisible)}
			>
				{detailsVisible ? 'Hide Details' : 'Show Details'}
			</button>

			{detailsVisible ? <p>{product.description}</p> : null}
		</div>
	);
};
