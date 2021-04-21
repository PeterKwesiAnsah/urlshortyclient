import React from 'react';
import '../assets/Main.css';
import useInput from '../hooks/useInputUrl';
import Button from './Button';
import Results from '../components/Results';

const Main = () => {
	//input text field states
	const { value: inputValue, handleChange, setValue } = useInput();
	const [requestedURL, setrequestedURL] = React.useState(inputValue);

	//handles sending request to the Graphql API
	const sendRequest = React.useCallback(() => {
		setrequestedURL(inputValue);
		setValue('');
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
			{requestedURL.length !== 0 && (
				<Results requestedUrl={requestedURL}></Results>
			)}
		</div>
	);
};

export default Main;
