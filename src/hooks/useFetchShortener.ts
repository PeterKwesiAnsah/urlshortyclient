import { useQuery, gql } from '@apollo/client';

const GET_URL = gql`
	query getShortenUrl($url: String!) {
		shortenURL(url: $url)
	}
`;

const useFetchShortener = (inputUrl: string) => {
	return () => {
		const { data, loading, error } = useQuery(GET_URL, {
			variables: { url: inputUrl },
		});
		return [data, loading, error];
	};
};

export default useFetchShortener;
