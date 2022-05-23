import MainText from '../mainText/MainText';
import './testimonialCard.scss';

const TestimonialCard = ({name, company}) => {
	return (
		<li className="testimonial-card">
			<div className="testimonial-card__text">
				<MainText textAlign>
					Alex is awesome designer, he’s working as an essential part in my team. Let’s build up something together and lead us to success!
				</MainText>
			</div>
			<div className="testimonial-card__info">
				<h3>{name}</h3>
				<p>{company}</p>
			</div>
		</li>
	)
}

export default TestimonialCard;