import React from 'react';
import useQuery from '../hooks/useFetchShortener';

type resultsProp = {
	requestedUrl: string;
};

const Results = ({ requestedUrl }: resultsProp) => {
	const { data, loading, error } = useQuery(requestedUrl);

	return <div></div>;
};

export default React.memo(Results);
