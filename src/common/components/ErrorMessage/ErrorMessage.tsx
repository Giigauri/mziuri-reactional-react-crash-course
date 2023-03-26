type ErrorMessageProps = {
	message: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	return <p className="text-center text-red-600">{message}</p>;
};
