import { CSSProperties } from 'react';
import '../assets/Button.css';

type buttonProps = {
	children: string;
	sendRequest: () => void;
	disabled: boolean;
};

const Button = ({ children, disabled, sendRequest }: buttonProps) => {
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
