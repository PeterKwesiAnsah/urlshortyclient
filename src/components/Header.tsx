import React from 'react';
import '../assets/Header.css'

type HeaderProp = {
	children: string;
};

const Header = ({ children }: HeaderProp) => {
	return <h1 className="header">{children}</h1>;
};

export default Header;
