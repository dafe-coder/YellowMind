import React from 'react';
import './app.css';
import HomePage from '../../pages/home/HomePage';
import AboutUs from '../../pages/aboutUs/AboutUs';
import Navigation from '../navigation/Navigation';
import Testimonials from '../../pages/testimonials/Testimonials';
import Blog from '../../pages/blog/Blog';
import Projects from '../../pages/projects/Projects';
import Contacts from '../../pages/contacts/Contacts';
import TeamMember from '../../pages/teamMember/TeamMember';
import { useLayoutEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';

const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
		var pageHeight = document.documentElement.scrollHeight;
		document.querySelector('html').style.height = pageHeight;
	}, [location.pathname]);
	return (
		<TransitionGroup component={null}>
			<CSSTransition key={location.key} classNames='fade' timeout={200}>
				{children}
			</CSSTransition>
		</TransitionGroup>
	);
};

const App = ({ team }) => {
	return (
		<Router basename='/YellowMind'>
			<Navigation />
			<Wrapper>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutUs team={team} />} />
					<Route path='/testimonials' element={<Testimonials />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contacts />} />
					<Route
						path='/team-member/:name'
						element={<TeamMember team={team} />}
					/>
				</Routes>
			</Wrapper>
		</Router>
	);
};

export default App;
