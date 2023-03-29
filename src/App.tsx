import { Link, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/Products';
import { TodosPage } from './pages/todos/Todos';
import { TodoPage } from './pages/todos/Todo';
import { NotFoundPage } from './pages/NotFound';
import { Fragment } from 'react';

import './App.css';

const App: React.FC = () => {
	return (
		<Fragment>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products List</Link>
					</li>
					<li>
						<Link to="/todos">Todos List</Link>
					</li>
					<li>
						<Link to="/todos/1">Todo Details</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/todos" element={<TodosPage />} />
				<Route path="/todos/new" element={<></>} />
				<Route path="/todos/:id" element={<TodoPage />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Fragment>
	);
};

export default App;
