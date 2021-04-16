import React, { ChangeEvent } from 'react';

type hookReturn = {
	value: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const useInput = (): hookReturn => {
	const [value, setValue] = React.useState<string>('');
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setValue(event.target.value);
	};

	return { value, handleChange };
};

export default useInput;
