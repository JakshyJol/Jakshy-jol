import React from "react";
import whatsapp from "../../Assets/icon/logos_whatsapp-icon.png";
import instagram from "../../Assets/icon/skill-icons_instagram.png";
import kyrgyz from "../../Assets/icon/Язык.png";



import './NavIcon.css'
export const NavIcon = () => {
	return (
		<div className="headerIcon">
			<a href="#">0705 265 747</a>
			<nav className="headerLink">
				<img src={whatsapp} alt="" />
				<img src={instagram} alt="" />
				<img src={kyrgyz} alt="" />
			</nav>
		</div>
	);
};
