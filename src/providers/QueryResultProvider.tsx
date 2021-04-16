import React from 'react';

type Result = {
	[k in 'data' | 'loading' | 'error']: any;
};

type queryResultProviderProp = {
	children: React.ReactChild;
	result: Result;
};

const context = React.createContext<null | Result>(null);

const QueryResultProvider = ({ children, result }: queryResultProviderProp) => {
	return <div></div>;
};

export default QueryResultProvider;
