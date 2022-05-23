import './contacts.scss';
import MainText from '../../components/mainText/MainText';
import MainTitle from '../../components/mainTitle/MainTitle';
import SocialNetworkItem from '../../components/socialNetworkItem/SocialNetworkItem';
import Form from '../../components/form/Form';

const Contacts = () => {
	return (
		<div className='mainApp'>
			<MainTitle title='Let’s improve it together' />
			<MainText>
				If you have questions or just want to say hello to us — you can fill out
				our contact form below or follow us on social media!
			</MainText>
			<ul className='social-networks'>
				<SocialNetworkItem type='facebook' hrefLink='#' />
				<SocialNetworkItem type='inst' hrefLink='#' />
				<SocialNetworkItem type='behance' hrefLink='#' />
				<SocialNetworkItem type='dribble' hrefLink='#' />
				<SocialNetworkItem type='gmail' hrefLink='#' />
			</ul>
			<Form />
		</div>
	);
};

export default Contacts;
