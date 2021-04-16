import { useQuery, gql } from '@apollo/client';
import { Result } from '../providers/QueryResultProvider';

const GET_URL = gql`
	query getShortenUrl($url: String!) {
		shortenURL(url: $url)
	}
`;

type fetchResult = Result | [];

const useFetchShortener = (inputUrl: string): fetchResult => {
	const { data, loading, error } = useQuery(GET_URL, {
		variables: { url: inputUrl },
	});
	return { data, loading, error };
};

export default useFetchShortener;
