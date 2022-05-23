import './memberSlider.scss';
import WhiteCard from '../whiteCard/WhiteCard';

const MemberSlider = ({ data }) => {
	return (
		<ul className='slider slider-member'>
			<WhiteCard
				data={data}
				className='slider-card'
				title='Aleksandr'
				description='Ui / Ux Designer'
			/>
		</ul>
	);
};

export default MemberSlider;
