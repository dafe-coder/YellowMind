import './hobbiesList.scss';
import HobbiesItem from '../hobbiesItem/HobbiesItem';
const Hobbies = ({ hobbies }) => {
	return (
		<ul className='hobbies-list'>
			{hobbies.length
				? hobbies.map((hobbie, id) => {
						return (
							<HobbiesItem
								key={id}
								title={hobbie.hobbiesTitle}
								img={hobbie.hobbiesImg}
							/>
						);
				  })
				: null}
		</ul>
	);
};

export default Hobbies;
