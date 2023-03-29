import { useParams } from 'react-router-dom';

export const TodoPage = () => {
	const pageParams = useParams();
	return (
		<div>
			<h1 style={{ fontWeight: 'bold', marginTop: 30, fontSize: 25 }}>TODO DETAILS {pageParams.id}</h1>
		</div>
	);
};
