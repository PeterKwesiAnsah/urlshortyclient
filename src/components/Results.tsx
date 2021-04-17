import React from 'react';
import useQuery from '../hooks/useFetchShortener';
import Loading from '../components/Loader';

type resultsProp = {
	requestedUrl: string;
};

const Results = ({ requestedUrl }: resultsProp): JSX.Element => {
	
	const {data,loading,error} = useQuery(requestedUrl);

	console.log(data);

	if (data) {
		return <h1>{}</h1>;
	}
	if (loading) {
		return <Loading></Loading>;    
	}
	//if theres and error
	return <div></div>;
};

export default React.memo(Results);
