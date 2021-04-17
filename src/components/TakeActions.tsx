import '../assets/TakeActions.css';

//allows user to take actions..copy or visit the shorten url
type takeActionProp = {
	url: string;
};

const TakeActions = ({ url }: takeActionProp) => {
	return (
		<div className="takeAction">
			<h3 className="url__text">{url}</h3>
		</div>
	);
};

export default TakeActions;
