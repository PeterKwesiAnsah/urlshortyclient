import React, { CSSProperties, Dispatch } from 'react';
import '../assets/Button.css';

type buttonProps = {
	disabled?: boolean;
	children: string;
	sendRequest: () => void;
};

const Button = ({ children, disabled = false, sendRequest }: buttonProps) => {
	const buttonStyle: CSSProperties = {
		backgroundColor: disabled ? 'buttonface' : 'var(--buttonColorMain)',
		cursor: disabled ? 'not-allowed' : 'pointer',
	};

	return (
		<div className="button__box">
			<button
				style={buttonStyle}
				disabled={disabled}
				className="button"
				onClick={sendRequest}
			>
				{children}
			</button>
		</div>
        
	);
};

export default Button;
