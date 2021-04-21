import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../assets/Copy.css';

type copyProps = {
	url: string;
};

const Copy = ({ url }: copyProps) => {
	const [copy, setCopy] = React.useState(false);
	const childText = React.useMemo(() => (copy ? 'Copied' : 'Copy'), [copy]);
	React.useEffect(() => {
		setCopy(false);
	}, [url]);
	return (
		<>
			<div className="copy__box">
				<CopyToClipboard text={url} onCopy={() => setCopy(true)}>
					<span className="copy__button">{childText}</span>
				</CopyToClipboard>
			</div>
		</>
	);
};

export default React.memo(Copy);
