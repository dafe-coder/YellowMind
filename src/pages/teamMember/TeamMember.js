import Hobbies from '../../components/hobbies/Hobbies';
import MainText from '../../components/mainText/MainText';
import MemberSlider from '../../components/memberSlider/MemberSlider';
import { useParams } from 'react-router-dom';

const TeamMember = ({ team }) => {
	const { name } = useParams();
	const teamItem =
		team.length && team !== undefined
			? team.filter((item) => item.name === name)
			: [];
	return (
		<div
			className='team-member container-700'
			style={{ paddingBottom: '30vh' }}>
			<MemberSlider data={teamItem[0]} />
			{teamItem.length
				? teamItem[0].fistText.map((text, id) => (
						<MainText key={id}>{text.text}</MainText>
				  ))
				: null}
			<Hobbies hobbies={teamItem[0].hobbies} />
			{teamItem.length
				? teamItem[0].secondText.map((text, id) => (
						<MainText key={id}>{text.text}</MainText>
				  ))
				: null}
			<MainText>
				Just act, and{' '}
				<a href='!#' className='black-link'>
					give us a contact
				</a>
				.
			</MainText>
		</div>
	);
};

export default TeamMember;
