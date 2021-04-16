import React from 'react';
import '../assets/Button.css';

type buttonProps = {
	disabled?: boolean;
	children: React.ReactChild;
};

const Button = ({ children, disabled = false }: buttonProps) => {
	const buttonStyle = {
		backgroundColor: disabled ? 'buttonface' : 'var(--buttonColorMain)',
	};
	return (
		<div className="button__box">
			<button style={buttonStyle} disabled={disabled} className="button">
				{children}
			</button>
		</div>
	);
};

export default Button;
