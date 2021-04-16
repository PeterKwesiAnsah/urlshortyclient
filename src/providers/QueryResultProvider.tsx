import React from 'react';

export type Result = {
	[k in 'data' | 'loading' | 'error']: Omit<any, string | number> | undefined;
};

type queryResultProviderProp = {
	children: React.ReactChild;
	result: Result;
};

const context = React.createContext<null | Result>(null);

const QueryResultProvider = ({ children, result }: queryResultProviderProp) => {
	return <context.Provider value={result}>{children}</context.Provider>;
};

export default QueryResultProvider;
