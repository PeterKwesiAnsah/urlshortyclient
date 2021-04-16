import { useQuery, gql } from '@apollo/client';
import { Result } from '../providers/QueryResultProvider';

const GET_URL = gql`
	query getShortenUrl($url: String!) {
		shortenURL(url: $url)
	}
`;

type fetchResult = (i: String) => Result;

function useQueryFn(inputUrl: String) {
	const { data, loading, error } = useQuery(GET_URL, {
		variables: { url: inputUrl },
	});
	return { data, loading, error };
}

const useFetchShortener = (): fetchResult => {
	return useQueryFn;
};

export default useFetchShortener();
