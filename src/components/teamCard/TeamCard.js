import { NavLink } from 'react-router-dom';
import './teamCard.scss';
const TeamCard = ({ name, position, src }) => {
	return (
		<li className='team-card' id='name'>
			<NavLink to={`/team-member/${name}`} className='team-card__link'>
				<div className='team-card__img'>
					<video loop autoPlay muted>
						<source src={src} type='video/mp4' />
					</video>
				</div>
				<a href='!#' className='team-card__info'>
					<h3>{name}</h3>
					<p>{position}</p>
				</a>
			</NavLink>
		</li>
	);
};

export default TeamCard;
