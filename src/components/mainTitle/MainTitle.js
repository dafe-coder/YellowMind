import React from "react";
import './mainTitle.scss';

const MainTitle = ({type, title}) => {
	return type === 'h1' ? (
		<h1 className="main-title">{title}</h1>
	) : (
		<h2 className="main-title">{title}</h2>
	)
}

export default MainTitle;