import TeamCard from '../../components/teamCard/TeamCard';

const OurTeam = ({ team }) => {
	return (
		<ul className='our-cards'>
			{team.length
				? team.map((item) => {
						return (
							<TeamCard
								name={item.name}
								position={item.position}
								src={item.imgPath}
							/>
						);
				  })
				: null}
		</ul>
	);
};

export default OurTeam;
