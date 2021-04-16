import { useQuery, gql } from '@apollo/client';

const GET_URL = gql`
	query getShortenUrl($url: String!) {
		shortenURL(url: $url)
	}
`;

const useFetchShortener = (inputUrl: string, fetch: boolean) => {
	if (fetch) {
		const { data, loading, error } = useQuery(GET_URL, {
			variables: { url: inputUrl },
		});
		return [data, loading, error];
	}

	return [];
};

export default useFetchShortener;