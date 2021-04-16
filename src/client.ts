import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:/grapqhl',
	cache: new InMemoryCache(),
});

export default client;
