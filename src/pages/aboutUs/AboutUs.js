import './aboutUs.scss';
import MainText from '../../components/mainText/MainText';
import MainTitle from '../../components/mainTitle/MainTitle';
import MainLink from '../../components/mainLink/MainLink';
import OurTeam from '../../components/ourTeam/OurTeam';
const AboutUs = ({ team }) => {
	return (
		<div className='mainApp'>
			<MainTitle title="Let's get acquainted" />
			<MainText>
				<strong>Yellow Mind is</strong> a creative, modern and innovative team
				that specializes in creating a new or updating an existing image for
				your company to make you more successful since 2015.
			</MainText>
			<MainText>
				<strong>Our main goal</strong> — to develop a solution that will set you
				apart from your competitors in the market.
			</MainText>
			<OurTeam team={team} />
			<MainText>
				<strong>We have worked on </strong>projects for various companies in the
				cybersecurity, fashion, food, entertainment, public services and other
				sectors.
			</MainText>
			<MainText>
				<strong>We guarantee</strong> high level Services, and since we only
				work on one project at a time, we do not lose speed and deliver highest
				Quality. We are every time open for your needs and success.
			</MainText>
			<MainText>Just act, and give us a contact!</MainText>
			<MainLink text='Give us a contact' />
		</div>
	);
};

export default AboutUs;
