import "./navigationItem.scss";
import { NavLink } from 'react-router-dom';
import NavSvg from "./NavSvg"

const NavigationItem = ({type, text}) => {
	return (
		<li>
			<NavLink 
				className={({ isActive }) => "navigation-link" + (isActive ? " active" : "")}
				to={type === 'home' ? '/' : type}>
				<NavSvg type={type}/>
				<NavSvg type={type + '-active'}/>
				<span>{text}</span>
			</NavLink>
		</li>
	)
}

export default NavigationItem;