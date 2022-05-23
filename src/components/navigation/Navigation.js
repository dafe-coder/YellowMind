import './navigation.scss';
import NavigationItem from '../navigationItem/NavigationItem';
const Navigation = () => {
	return (
		<nav>
			<ul>
				<NavigationItem type='home' text='Home'/>
				<NavigationItem type='about' text='About Us'/>
				<NavigationItem type='projects' text='Projects'/>
				<NavigationItem type='testimonials' text='Testimonials'/>
				<NavigationItem type='blog' text='Blog'/>
				<NavigationItem type='contact' text='Contact Us'/>
			</ul>
		</nav>
	)
}

export default Navigation;