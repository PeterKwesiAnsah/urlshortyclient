import React, { ReactHTMLElement } from 'react';

type errorProps<E extends { message: string }> = {
	children: HTMLHeadingElement;
	error: E;
};
const Error = ({}) => {
	return <div></div>;
};

export default Error;
