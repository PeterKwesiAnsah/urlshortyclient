import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../assets/Copy.css';
import SnackBar from './SnackBar';

type copyProps = {
	url: string;
};

const Copy = ({ url }: copyProps) => {
	const [copy, setCopy] = React.useState(false);
	return (
		<>
			<div className="copy__box">
				<CopyToClipboard text={url} onCopy={() => setCopy(true)}>
					<span className="copy__button">Copy</span>
				</CopyToClipboard>
			</div>
		</>
	);
};

export default Copy;
