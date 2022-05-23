import './hobbiesItem.scss';

const HobbiesItem = ({ img, title }) => {
	return (
		<li className='hobbies-item'>
			<div className='hobbies-img'>
				<img src={img} alt={title} />
			</div>
			<h5 className='hobbies-title'>{title}</h5>
		</li>
	);
};

export default HobbiesItem;
