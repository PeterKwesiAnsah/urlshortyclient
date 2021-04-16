import React, { ChangeEvent } from 'react';

const [value, setValue] = React.useState<string>('');

const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
	setValue(event.target.value);
};

export default [value, handleChange];
