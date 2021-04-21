type errorProps = {
	error: any;
};
const Error = ({ error }: errorProps) => {
	// const {message}=
	return <h3>{error.message}</h3>;
};

export default Error;
