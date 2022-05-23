import React from 'react';
import './home.scss';

import MainTitle from '../../components/mainTitle/MainTitle';
import MainText from '../../components/mainText/MainText';
import MainLink from '../../components/mainLink/MainLink';

const HomePage = () => {
	return (
		<div className='mainApp'>
			<MainTitle type='h1' title='Your great SaaS product could be better!' />
			<MainText textAlign>
				We can analyze your SaaS product and share with you a quick report for
				Free.
			</MainText>
			<MainLink text='Request a Free analysis Now' />
		</div>
	);
};

export default HomePage;
