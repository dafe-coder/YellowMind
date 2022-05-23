import React from "react";
import './mainText.scss';

const MainText = (props) => {
	return (
		<p className="main-text" style={props.textAlign ? {textAlign:'center'} : {textAlign:'justify'}}>{props.children}</p>
	)
}

export default MainText;