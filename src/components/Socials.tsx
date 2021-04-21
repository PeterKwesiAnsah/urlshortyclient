import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as GitHub } from '../assets/github.svg';
import '../assets/Socials.css';

const Socials = () => {
	return (
		<div className="social">
			<a href="https://twitter.com/akwesi_ansah" target="_blank" rel="noreferrer">
				<Twitter></Twitter>
			</a>
			<a href="https://github.com/PeterKwesiAnsah" target="_blank" rel="noreferrer">
				<GitHub></GitHub>
			</a>
		</div>
	);
};

export default Socials;
