import './testimonials.scss';
import MainTitle from '../../components/mainTitle/MainTitle';
import MainText from '../../components/mainText/MainText';
import TestimonialCard from '../../components/testimonialCard/TestimonialCard';

const Testimonials = () => {
	return (
		<div className='mainApp'>
			<MainTitle title='let our clients talk about us' />
			<MainText>
				The most important criterion for evaluating our work is the opinion
				of our customers
			</MainText>
			<ul className='testimonial-cards'>
				<TestimonialCard name='Jason Wu' company='Dir Builders' />
				<TestimonialCard name='Jason Wu' company='Dir Builders' />
				<TestimonialCard name='Jason Wu' company='Dir Builders' />
				<TestimonialCard name='Jason Wu' company='Dir Builders' />
			</ul>
		</div>
	);
};

export default Testimonials;
