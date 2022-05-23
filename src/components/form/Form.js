import MainLink from '../mainLink/MainLink';
import './form.scss';

const Form = () => {
	return (
		<form action='#'>
			<div className='form-input'>
				<label className='form-label' htmlFor='name'>
					Your Name *
				</label>
				<input type='text' id='name' placeholder='Johny' />
			</div>
			<div className='form-input'>
				<label className='form-label' htmlFor='email'>
					Your Email *
				</label>
				<input type='email' id='email' placeholder='johny-pony@gmail.com' />
			</div>
			<div className='form-input'>
				<label className='form-label' htmlFor='site'>
					Your Website
				</label>
				<input type='text' id='site' placeholder='johny-pony.com' />
			</div>
			<div className='form-textarea'>
				<label className='form-label' htmlFor='text'>
					Your Message *
				</label>
				<textarea
					name='text'
					id='text'
					placeholder='Hi, I’m Jony Pony and I want to  give you all my money. Just contact me back tomorrow!'></textarea>
			</div>
			<MainLink text='Send Message' button />
		</form>
	);
};

export default Form;
