import React, { ChangeEvent, Dispatch } from 'react';

type hookReturn = {
	value: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	setValue:Dispatch<string>;
};

const useInput = (): hookReturn => {
	const [value, setValue] = React.useState<string>('');
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setValue(event.target.value);
	};

	return { value, handleChange,setValue };
};

export default useInput;
