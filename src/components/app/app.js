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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
const App = ({ team }) => {
	return (
		<>
			<Router>
				<Navigation />
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
			</Router>
		</>
	);
};

export default App;
