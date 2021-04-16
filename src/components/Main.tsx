import React from 'react';
import '../assets/Main.css';
import useInput from '../hooks/useInputUrl';
import Button from './Button';

const Main = () => {
	//input text field states
	const { value: inputValue, handleChange } = useInput();

	return (
		<div>
			<input
				value={inputValue}
				onChange={handleChange}
				className="input"
				placeholder="Enter Url Here"
			></input>
			<Button>Generate</Button>
		</div>
	);
};

export default Main;
