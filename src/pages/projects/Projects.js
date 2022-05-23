import MainText from '../../components/mainText/MainText';
import MainTitle from '../../components/mainTitle/MainTitle';
import WhiteCard from '../../components/whiteCard/WhiteCard';

const Projects = () => {
	return (
		<div className='mainApp'>
			<MainTitle title='Products we improved' />
			<MainText>
				Our team has successfully improved many SaaS products for our clients.
			</MainText>
			<MainText>
				We comply with NDA and do not publish projects that are not subject
				to disclosure.
			</MainText>
			<ul className='white-cards'>
				<WhiteCard title='DIR Builders' description='Contractors' />
				<WhiteCard title='DIR Builders' description='Contractors' />
				<WhiteCard title='DIR Builders' description='Contractors' />
				<WhiteCard title='DIR Builders' description='Contractors' />
			</ul>
		</div>
	);
};

export default Projects;
