import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../assets/Button.css';
import SnackBar from './SnackBar';

type copyProps = {
	url: string;
};

const Copy = ({ url }: copyProps) => {
	const [copy, setCopy] = React.useState(false);
	return (
		<div>
			<CopyToClipboard text={url} onCopy={() => setCopy(true)}>
				<span className="button">Copy</span>
			</CopyToClipboard>
		</div>
	);
};

export default Copy;
