import React from 'react';
import '../assets/Main.css';
import useInput from '../hooks/useInputUrl';

const Main = () => {
	//input text field states
	const { value: inputValue, handleChange } = useInput();   

	return (
		<div>
			<input value={inputValue} onChange={handleChange}></input>
		</div>
	);
};

export default Main;
