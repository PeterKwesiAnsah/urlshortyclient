import React from 'react';
import useQuery from '../hooks/useFetchShortener';
import Loading from '../components/Loader';
import TakeAction from '../components/TakeActions';
import Error from '../components/Error';

type resultsProp = {
	requestedUrl: string;
};

const Results = ({ requestedUrl }: resultsProp): JSX.Element => {
	const { data, loading, error } = useQuery(requestedUrl);


	if (loading) {
		return <Loading></Loading>;
	}

	if (data && !loading) {
		return <TakeAction url={data.shortenURL}></TakeAction>;
	}

	//if theres and error
	return <Error error={error}></Error>;
};

export default React.memo(Results);
