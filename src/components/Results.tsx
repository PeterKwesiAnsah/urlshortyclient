import React from 'react';
import useQuery from '../hooks/useFetchShortener';
import Loading from '../components/Loader';
import TakeAction from '../components/TakeActions'

type resultsProp = {
	requestedUrl: string;
};

const Results = ({ requestedUrl }: resultsProp): JSX.Element => {
	const { data, loading, error } = useQuery(requestedUrl);

	console.log(data);

	if (loading) {
		return <Loading></Loading>;
	}

	if (data && !loading){
		return <TakeAction url={data.shortenURL}></TakeAction>
	}

	//if theres and error
	return <div></div>;
};

export default React.memo(Results);
