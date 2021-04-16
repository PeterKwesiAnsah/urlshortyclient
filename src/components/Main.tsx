import React from 'react';
import '../assets/Main.css';
import useInput from '../hooks/useInputUrl';
import Button from './Button';
import Fetch from '../hooks/useFetchShortener';

const Main = () => {
	//input text field states
	const { value: inputValue, handleChange } = useInput();
	const [requestedURL, setrequestedURL] = React.useState(inputValue);
	const results = React.useMemo(() => {
		if (requestedURL.length === 0) return null;

		return Fetch(requestedURL);
	}, [requestedURL]);

	//handles sending request to the Graphql API
	const sendRequest = React.useCallback(() => {
		setrequestedURL(inputValue);
	}, [inputValue]);

	return (
		<div>
			<input
				value={inputValue}
				onChange={handleChange}
				className="input"
				placeholder="Enter Url Here"
			></input>
			<Button disabled={inputValue.length === 0} sendRequest={sendRequest}>
				Generate
			</Button>
		</div>
	);
};

export default Main;
